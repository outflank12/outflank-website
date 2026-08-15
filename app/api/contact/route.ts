import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, mobile, company, projectType, message } = await req.json();

    // Validate required fields
    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { error: 'Name, email, mobile, and message are required.' },
        { status: 400 }
      );
    }

    // Configure the SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Aluxa Website" <${process.env.SMTP_USER}>`, // sender address
      to: process.env.SMTP_TO_EMAIL, // list of receivers
      subject: `New Project Inquiry from ${name}`, // Subject line
      text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Company: ${company || 'N/A'}
Project Type: ${projectType}

Message:
${message}
      `, // plain text body
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `, // html body
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send the message. Please try again later.' },
      { status: 500 }
    );
  }
}
