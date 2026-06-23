import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-change-this';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;
    
    console.log('📝 Login attempt for:', email);
    console.log('📝 Request body:', body);

    // Validate input
    if (!email || !password) {
      console.log('❌ Missing email or password');
      return NextResponse.json(
        { error: 'Please provide email and password' },
        { status: 400 }
      );
    }

    // Check environment variables
    console.log('🔑 Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('🔑 ANON Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

    // Initialize Supabase with ANON key
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Try to sign in
    console.log('🔄 Attempting Supabase auth...');
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.log('❌ Auth error:', {
        message: error.message,
        status: error.status,
        name: error.name
      });
      
      // Return specific error messages
      if (error.message === 'Invalid login credentials') {
        return NextResponse.json(
          { error: 'Invalid email or password' },
          { status: 401 }
        );
      }
      
      return NextResponse.json(
        { error: error.message },
        { status: 401 }
      );
    }

    console.log('✅ Auth success for:', data.user.email);
    console.log('🆔 User ID:', data.user.id);

    // Check if user is in admins table
    const adminSupabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data: adminData, error: adminError } = await adminSupabase
      .from('admins')
      .select('*')
      .eq('id', data.user.id)
      .single();

    if (adminError) {
      console.log('❌ Admin check error:', adminError.message);
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      );
    }

    if (!adminData) {
      console.log('❌ User is not an admin');
      return NextResponse.json(
        { error: 'Unauthorized - Admin access required' },
        { status: 403 }
      );
    }

    console.log('✅ Admin verified:', adminData.email);

    // Create JWT token
    const token = jwt.sign(
      { 
        id: data.user.id, 
        email: data.user.email,
        role: adminData.role || 'admin'
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    console.log('✅ JWT token created');

    // Create response
    const response = NextResponse.json({
      success: true,
      token,
      admin: {
        id: data.user.id,
        email: data.user.email,
        name: adminData.name || 'Admin'
      }
    }, { status: 200 });

    // Set cookie
    response.cookies.set('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });

    console.log('✅ Login complete');
    return response;

  } catch (error: any) {
    console.error('❌ Login error:', error);
    return NextResponse.json(
      { error: error.message || 'Error logging in' },
      { status: 500 }
    );
  }
}