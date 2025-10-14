import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, availability, interests, consent } = body || {};

    if (!name || !email || !phone || !availability || !interests) {
      return NextResponse.json(
        { ok: false, error: 'All fields are required' },
        { status: 400 }
      );
    }
    if (!consent) {
      return NextResponse.json(
        { ok: false, error: 'Consent is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    if (!resendApiKey || !contactToEmail) {
      console.error('Missing required environment variables');
      return NextResponse.json(
        { ok: false, error: 'Email service not configured' },
        { status: 502 }
      );
    }

    const html = `
      <h2>New Volunteer Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Availability:</strong> ${availability}</p>
      <p><strong>Interests:</strong><br>${String(interests).replace(/\n/g, '<br>')}</p>
      <p><strong>Consent:</strong> ${consent ? 'Yes' : 'No'}</p>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Hope Haven <onboarding@resend.dev>',
        to: contactToEmail,
        reply_to: email,
        subject: `Volunteer Application: ${name}`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error('Resend API error:', errorData);
      return NextResponse.json(
        { ok: false, error: 'Failed to send email', detail: errorData },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Volunteer route error', err);
    return NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 });
  }
}
