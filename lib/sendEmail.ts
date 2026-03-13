import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(email: string, subject: string, html: string): Promise<void>;
export async function sendEmail(params: { email: string; subject: string; html: string }): Promise<void>;
export async function sendEmail(
  emailOrParams: string | { email: string; subject: string; html: string },
  subject?: string,
  html?: string
): Promise<void> {
  let to: string;
  let emailSubject: string;
  let emailHtml: string;

  if (typeof emailOrParams === 'string') {
    to = emailOrParams;
    emailSubject = subject!;
    emailHtml = html!;
  } else {
    to = emailOrParams.email;
    emailSubject = emailOrParams.subject;
    emailHtml = emailOrParams.html;
  }

  const { error } = await resend.emails.send({
    from: 'PortLaken <onboarding@resend.dev>',
    to: 'fuscleo6@gmail.com',
    subject: emailSubject,
    html: emailHtml,
  });

  if (error) {
    console.error('Resend API Error:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
