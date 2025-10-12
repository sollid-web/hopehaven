'use client';

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    }
  };

  return (
    <div className="section">
      <div className="container-narrow max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        
        <p className="text-lg text-gray-300 mb-8">
          Have questions or want to learn more about Hope Haven? We'd love to 
          hear from you. Fill out the form below and we'll get back to you as 
          soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="card">
          <div className="mb-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={status.type === 'loading'}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={status.type === 'loading'}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              disabled={status.type === 'loading'}
              rows={6}
            />
          </div>

          {status.type !== 'idle' && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                status.type === 'success'
                  ? 'bg-green-900/20 border border-green-700/50 text-green-200'
                  : status.type === 'error'
                  ? 'bg-red-900/20 border border-red-700/50 text-red-200'
                  : 'bg-blue-900/20 border border-blue-700/50 text-blue-200'
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            className="btn w-full"
            disabled={status.type === 'loading'}
          >
            <Send className="mr-2 h-5 w-5" />
            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-8 text-sm text-gray-400">
          <p>
            <strong className="text-white">Note:</strong> This form is for general 
            inquiries only. For adoption-related questions, please use our 
            <a href="/adoptions" className="text-primary hover:underline ml-1">
              adoption inquiry form
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
