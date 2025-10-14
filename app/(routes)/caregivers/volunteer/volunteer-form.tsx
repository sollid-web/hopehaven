"use client";

import { useState, FormEvent } from 'react';
import { Send, User, Phone, Calendar, HeartHandshake } from 'lucide-react';

export function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    interests: '',
    consent: false,
  });
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setStatus({ type: 'error', message: 'Please agree to the terms to proceed.' });
      return;
    }
    setStatus({ type: 'loading', message: 'Submitting...' });
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your application was received.' });
        setFormData({ name: '', email: '', phone: '', availability: '', interests: '', consent: false });
      } else {
        setStatus({ type: 'error', message: data.error || 'Submission failed. Try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="card">
        <div className="mb-6">
          <label htmlFor="name">Full Name</label>
          <div className="relative">
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="mb-6 grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <div className="relative">
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="availability">Availability</label>
          <div className="relative">
            <input
              id="availability"
              type="text"
              placeholder="e.g., Weekends, Weeknights, 5-10 hrs/week"
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              required
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="interests">Areas of Interest</label>
          <textarea
            id="interests"
            rows={5}
            placeholder="Tutoring, arts & crafts, sports, meal prep, events, admin, etc."
            value={formData.interests}
            onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
            required
          />
        </div>

        <div className="mb-6 flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1"
            required
          />
          <label htmlFor="consent" className="text-sm text-gray-300">
            I confirm the information provided is accurate. I understand that reference checks and a vulnerable
            sector police check are required prior to volunteering, and I consent to being contacted about this
            application.
          </label>
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

        <button type="submit" className="btn w-full" disabled={status.type === 'loading'}>
          <Send className="mr-2 h-5 w-5" />
          {status.type === 'loading' ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>

      <div className="mt-8 text-sm text-gray-400 flex items-center gap-2">
        <HeartHandshake className="h-4 w-4" />
        <p>
          Have questions before applying? Use our <a href="/contact" className="text-primary hover:underline">contact
          form</a> and we’ll get back to you.
        </p>
      </div>
    </>
  );
}
