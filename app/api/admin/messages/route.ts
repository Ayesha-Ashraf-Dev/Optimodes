import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import jwt from 'jsonwebtoken';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-change-this';

// Verify JWT token
function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get token from cookie or header
    const token = request.cookies.get('adminToken')?.value || 
                  request.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    // Get search params
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = parseInt(searchParams.get('skip') || '0');

    // ✅ Fetch messages from Supabase
    const { data: messages, error, count } = await supabase
      .from('contacts')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(skip, skip + limit - 1);

    if (error) throw error;

    return NextResponse.json(
      {
        success: true,
        data: messages,
        pagination: {
          total: count,
          limit,
          skip,
          pages: Math.ceil((count || 0) / limit),
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Fetch messages error:', error);
    return NextResponse.json(
      { error: error.message || 'Error fetching messages' },
      { status: 500 }
    );
  }
}

// Mark message as read
export async function PATCH(request: NextRequest) {
  try {
    const token = request.cookies.get('adminToken')?.value || 
                  request.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    const { messageId, read } = await request.json();

    // ✅ Update message in Supabase
    const { data: updatedMessage, error } = await supabase
      .from('contacts')
      .update({ read })
      .eq('id', messageId)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(
      { success: true, data: updatedMessage },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Update message error:', error);
    return NextResponse.json(
      { error: error.message || 'Error updating message' },
      { status: 500 }
    );
  }
}

// Delete message
export async function DELETE(request: NextRequest) {
  try {
    const token = request.cookies.get('adminToken')?.value || 
                  request.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const messageId = searchParams.get('id');

    if (!messageId) {
      return NextResponse.json(
        { error: 'Message ID is required' },
        { status: 400 }
      );
    }

    // ✅ Delete message from Supabase
    const { error } = await supabase
      .from('contacts')
      .delete()
      .eq('id', messageId);

    if (error) throw error;

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Delete message error:', error);
    return NextResponse.json(
      { error: error.message || 'Error deleting message' },
      { status: 500 }
    );
  }
}