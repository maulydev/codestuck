import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email template for contact form
const createEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New Contact Form Submission</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #0d6efd;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }
    .header h2 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
    }
    .field {
      margin-bottom: 15px;
    }
    .field-label {
      font-weight: bold;
      color: #333333;
      display: block;
      margin-bottom: 5px;
    }
    .field-value {
      color: #555555;
    }
    .footer {
      background-color: #f8f9fa;
      color: #777777;
      text-align: center;
      padding: 15px;
      font-size: 12px;
    }
    @media only screen and (max-width: 600px) {
      .email-container {
        width: 100%;
        margin: 0;
        border-radius: 0;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h2>CodeStuck</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="field-label">Name:</span>
        <span class="field-value">${data.name}</span>
      </div>
      <div class="field">
        <span class="field-label">Contact:</span>
        <span class="field-value">${data.contact}</span>
      </div>
      <div class="field">
        <span class="field-label">Institution:</span>
        <span class="field-value">${data.institution || 'Not provided'}</span>
      </div>
      <div class="field">
        <span class="field-label">Project Title:</span>
        <span class="field-value">${data.projectTitle}</span>
      </div>
      <div class="field">
        <span class="field-label">Help Needed:</span>
        <span class="field-value">${data.helpNeeded}</span>
      </div>
      <div class="field">
        <span class="field-label">GitHub URL:</span>
        <span class="field-value">${data.githubUrl || 'Not provided'}</span>
      </div>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} CodeStuck. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields - removed institution and githubUrl from required fields
    const requiredFields = ['name', 'contact', 'projectTitle', 'helpNeeded'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Ensure optional fields exist but can be empty
    body.institution = body.institution || '';
    body.githubUrl = body.githubUrl || '';

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission: ${body.projectTitle}`,
      html: createEmailTemplate(body),
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
