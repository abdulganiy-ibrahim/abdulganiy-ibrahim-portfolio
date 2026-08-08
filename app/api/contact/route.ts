import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !subject || !message) {
    return Response.json(
      { message: 'All fields are required' },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return Response.json(
      { message: 'Please enter a valid email address' },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <contact@yourdomain.com>',
      to: 'abdulganiyibrahim.dev@gmail.com',
      replyTo: email,
      subject: `${subject} — from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { message: 'Failed to send message' },
        { status: 500 }
      );
    }

    return Response.json(data);
  } catch (err) {
    console.error('Contact form error:', err);
    return Response.json(
      { message: 'Unexpected error' },
      { status: 500 }
    );
  }
}