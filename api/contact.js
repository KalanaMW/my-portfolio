// Vercel Serverless Function for Contact Form
import nodemailer from 'nodemailer';

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || 'kalanam890@gmail.com',
      pass: process.env.EMAIL_APP_PASSWORD, // Gmail app password
    },
  });
};

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, and message are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Create email transporter
    const transporter = createTransporter();

    // Email content to you
    const mailOptions = {
      from: process.env.EMAIL_USER || 'kalanam890@gmail.com',
      to: 'kalanam890@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      text: `
You have received a new message from your portfolio contact form.

==========================================

From: ${name}
Email: ${email}
Subject: ${subject || 'No Subject'}

Message:
------------------------------------------
${message}
------------------------------------------

Submitted at: ${new Date().toLocaleString()}

==========================================

Reply directly to: ${email}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #667eea; border-radius: 10px;">
          <h2 style="color: #667eea; border-bottom: 3px solid #667eea; padding-bottom: 10px;">
            📧 New Contact Form Submission
          </h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || 'No Subject'}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; color: #555; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
              <strong>Reply to:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <a href="mailto:${email}" style="background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
              Reply to ${name}
            </a>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
      data: {
        name,
        email,
        subject: subject || '',
        timestamp: new Date().toISOString(),
      },
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    return res.status(500).json({
      error: 'Failed to send message',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}

// Apply CORS headers
export const config = {
  api: {
    bodyParser: true,
  },
};
