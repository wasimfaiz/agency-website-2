import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { fullName, email, projectType, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      replyTo: email,
      subject: `New Project Inquiry from ${fullName} - ${projectType}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #F4F6F8;
            color: #0A2540;
            margin: 0;
            padding: 40px 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            border: 1px solid rgba(10, 37, 64, 0.1);
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(10, 37, 64, 0.05);
          }
          .header {
            background-color: #0A2540;
            padding: 30px 40px;
            text-align: center;
          }
          .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 24px;
            letter-spacing: -0.5px;
          }
          .header p {
            color: rgba(255, 255, 255, 0.7);
            font-size: 12px;
            margin: 8px 0 0 0;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 700;
          }
          .content {
            padding: 40px;
          }
          .field {
            margin-bottom: 24px;
          }
          .label {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            color: #007BFF;
            letter-spacing: 1px;
            margin-bottom: 8px;
            display: block;
          }
          .value {
            font-size: 15px;
            color: #0A2540;
            line-height: 1.6;
            background-color: #F8FAFC;
            padding: 16px;
            border-radius: 12px;
            border: 1px solid rgba(10, 37, 64, 0.05);
          }
          .footer {
            background-color: #F8FAFC;
            padding: 24px 40px;
            text-align: center;
            border-top: 1px solid rgba(10, 37, 64, 0.05);
          }
          .footer p {
            margin: 0;
            font-size: 12px;
            color: rgba(10, 37, 64, 0.5);
          }
          .btn {
            display: inline-block;
            padding: 14px 32px;
            background-color: #007BFF;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 30px;
            font-size: 14px;
            font-weight: bold;
            margin-top: 10px;
          }
        </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Project Inquiry</h1>
              <p>Setzet Agency</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Client Name</span>
                <div class="value">${fullName}</div>
              </div>
              <div class="field">
                <span class="label">Email Address</span>
                <div class="value"><a href="mailto:${email}" style="color: #007BFF; text-decoration: none; font-weight: 500;">${email}</a></div>
              </div>
              <div class="field">
                <span class="label">Project Type</span>
                <div class="value">${projectType}</div>
              </div>
              <div class="field">
                <span class="label">Message Details</span>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
              <div style="text-align: center; margin-top: 40px;">
                <a href="mailto:${email}" class="btn">Reply to Client</a>
              </div>
            </div>
            <div class="footer">
              <p>This email was automatically generated from your website's contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
