import nodemailer from 'nodemailer';

// Email configuration
const createTransporter = () => {
  const port = parseInt(process.env.SMTP_PORT || '465');
  
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: port,
    secure: port === 465, // true for 465 (SSL), false for 587 (TLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export const sendEmail = async ({ to, subject, html, from }: EmailOptions) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: from || `"The Nexus Digitals" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Logo Brief Form Email Template
export const generateLogoBriefEmailTemplate = (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Logo Brief Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #02C173; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #02C173; }
        .field-value { margin-left: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Logo Brief Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="field-label">Name:</span>
            <span class="field-value">${data.name || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Email:</span>
            <span class="field-value">${data.email || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Phone:</span>
            <span class="field-value">${data.phone || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Company Name:</span>
            <span class="field-value">${data.companyName || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Business Type:</span>
            <span class="field-value">${data.businessType || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Target Audience:</span>
            <span class="field-value">${data.targetAudience || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Style Preferences:</span>
            <span class="field-value">${data.stylePreferences || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Colors:</span>
            <span class="field-value">${data.colors || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Typography:</span>
            <span class="field-value">${data.typography || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Additional Information:</span>
            <span class="field-value">${data.additionalInfo || 'Not provided'}</span>
          </div>
          <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Website Brief Form Email Template
export const generateWebsiteBriefEmailTemplate = (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Website Brief Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #02C173; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #02C173; }
        .field-value { margin-left: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Website Brief Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="field-label">Name:</span>
            <span class="field-value">${data.name || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Email:</span>
            <span class="field-value">${data.email || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Phone:</span>
            <span class="field-value">${data.phone || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Company Name:</span>
            <span class="field-value">${data.companyName || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Website Purpose:</span>
            <span class="field-value">${data.websitePurpose || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Target Audience:</span>
            <span class="field-value">${data.targetAudience || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Features Required:</span>
            <span class="field-value">${data.featuresRequired || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Design Preferences:</span>
            <span class="field-value">${data.designPreferences || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Budget Range:</span>
            <span class="field-value">${data.budgetRange || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Timeline:</span>
            <span class="field-value">${data.timeline || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="field-label">Additional Information:</span>
            <span class="field-value">${data.additionalInfo || 'Not provided'}</span>
          </div>
          <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};