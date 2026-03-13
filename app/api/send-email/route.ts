import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/sendEmail';

export async function POST(req: Request) {
  try {
    const { email, subject, html } = await req.json();

    console.log('[send-email] Incoming request → to:', email, '| subject:', subject);

    if (!email || !subject || !html) {
      console.warn('[send-email] Missing required parameters');
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    await sendEmail({ email, subject, html });

    console.log('[send-email] ✅ Email dispatched successfully to:', email);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('[send-email] ❌ Error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
