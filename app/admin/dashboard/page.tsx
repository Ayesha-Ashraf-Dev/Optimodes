'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Message {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchMessages(token);
  }, []);

  const fetchMessages = async (token: string) => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/messages', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('adminToken');
          router.push('/admin/login');
          return;
        }
        throw new Error('Failed to fetch messages');
      }

      const data = await response.json();
      setMessages(data.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (messageId: string, currentRead: boolean) => {
    const token = localStorage.getItem('adminToken');
    if (!token) return;

    try {
      const response = await fetch('/api/admin/messages', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ messageId, read: !currentRead }),
      });

      if (response.ok) {
        setMessages(messages.map(m => 
          m.id === messageId ? { ...m, read: !currentRead } : m
        ));
      }
    } catch (err) {
      console.error('Error updating message:', err);
    }
  };

  const handleDelete = async (messageId: string) => {
    const token = localStorage.getItem('adminToken');
    if (!token) return;

    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const response = await fetch(`/api/admin/messages?id=${messageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setMessages(messages.filter(m => m.id !== messageId));
        setSelectedMessage(null);
      }
    } catch (err) {
      console.error('Error deleting message:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>
        <p style={{ fontSize: '18px', color: '#666' }}>Loading...</p>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f5f5f5', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a2e' }}>Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              background: '#ff6b6b',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Logout
          </button>
        </div>

        {error && (
          <div style={{ 
            padding: '15px',
            background: '#fee',
            color: '#c00',
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            {error}
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
          {/* Messages List */}
          <div style={{ background: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
              <h2 style={{ margin: '0', fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>
                Messages ({messages.length})
              </h2>
            </div>
            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
              {messages.length === 0 ? (
                <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
                  No messages yet
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    onClick={() => setSelectedMessage(msg)}
                    style={{
                      padding: '15px',
                      borderBottom: '1px solid #eee',
                      cursor: 'pointer',
                      background: selectedMessage?.id === msg.id ? '#f0f0f0' : msg.read ? '#ffffff' : '#f9f9f9',
                      fontWeight: msg.read ? '400' : '600',
                      transition: 'background 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <strong style={{ color: '#1a1a2e' }}>{msg.name}</strong>
                      {!msg.read && <span style={{ background: '#1800ad', color: '#fff', padding: '2px 8px', borderRadius: '3px', fontSize: '12px' }}>New</span>}
                    </div>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                      {msg.email}
                    </div>
                    <div style={{ fontSize: '13px', color: '#999' }}>
                      {msg.subject}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div style={{ background: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '20px' }}>
            {selectedMessage ? (
              <div>
                <h2 style={{ margin: '0 0 20px 0', fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  {selectedMessage.subject}
                </h2>

                <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#666' }}>From:</strong> {selectedMessage.name} ({selectedMessage.email})
                  </div>
                  {selectedMessage.phone && (
                    <div style={{ marginBottom: '12px' }}>
                      <strong style={{ color: '#666' }}>Phone:</strong> {selectedMessage.phone}
                    </div>
                  )}
                  <div style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#666' }}>Date:</strong> {new Date(selectedMessage.createdAt).toLocaleString()}
                  </div>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', color: '#333' }}>
                    {selectedMessage.message}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => handleMarkAsRead(selectedMessage.id, selectedMessage.read)}
                    style={{
                      padding: '10px 20px',
                      background: selectedMessage.read ? '#999' : '#1800ad',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    {selectedMessage.read ? 'Mark as Unread' : 'Mark as Read'}
                  </button>
                  <button
                    onClick={() => handleDelete(selectedMessage.id)}
                    style={{
                      padding: '10px 20px',
                      background: '#ff6b6b',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: '#999', padding: '40px' }}>
                Select a message to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
