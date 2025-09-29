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
    console.log('[EMAIL SERVICE] Attempting to send email...');
    console.log('[EMAIL SERVICE] SMTP_HOST:', process.env.SMTP_HOST);
    console.log('[EMAIL SERVICE] SMTP_PORT:', process.env.SMTP_PORT);
    console.log('[EMAIL SERVICE] SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Not set');
    console.log('[EMAIL SERVICE] SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'Not set');
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: from || `"The Nexus Digitals" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    };

    console.log('[EMAIL SERVICE] Sending email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    const result = await transporter.sendMail(mailOptions);
    console.log('[EMAIL SERVICE] Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('[EMAIL SERVICE] Error sending email:', error);
    console.error('[EMAIL SERVICE] Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      code: (error as any)?.code,
      response: (error as any)?.response
    });
    throw error;
  }
};

// Logo Brief Form Email Template
export const generateLogoBriefEmailTemplate = (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  
  // Debug: Log all form data to see exactly what we're getting
  console.log('[EMAIL TEMPLATE] Logo Brief Form Data:', data);
  console.log('[EMAIL TEMPLATE] All form keys:', Object.keys(data));
  
  // Create a comprehensive email with ALL form data
  let formDataHtml = '';
  for (const [key, value] of Object.entries(data)) {
    if (value && value.toString().trim() !== '') {
      formDataHtml += `
        <div class="field">
          <span class="field-label">${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:</span>
          <span class="field-value">${value}</span>
        </div>
      `;
    }
  }
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Logo Brief Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background-color: #02C173; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .field { margin-bottom: 10px; padding: 8px; background: white; border-left: 4px solid #02C173; }
        .field-label { font-weight: bold; color: #333; display: inline-block; min-width: 200px; }
        .field-value { margin-left: 10px; color: #666; }
        .raw-data { margin-top: 30px; padding: 20px; background: #f0f0f0; border: 1px solid #ddd; }
        .raw-data h3 { color: #02C173; margin-bottom: 15px; }
        .data-item { margin-bottom: 5px; font-family: monospace; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Logo Brief Form Submission</h1>
        </div>
        <div class="content">
          <h2>Client Responses:</h2>
          ${formDataHtml}
          
          <div class="raw-data">
            <h3>Complete Form Data (Raw):</h3>
            ${Object.entries(data).map(([key, value]) => 
              `<div class="data-item"><strong>${key}:</strong> ${value}</div>`
            ).join('')}
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
  
  // Debug: Log all form data to see exactly what we're getting
  console.log('[EMAIL TEMPLATE] Website Brief Form Data:', data);
  console.log('[EMAIL TEMPLATE] All form keys:', Object.keys(data));
  
  // Create a comprehensive email with ALL form data
  let formDataHtml = '';
  for (const [key, value] of Object.entries(data)) {
    if (value && value.toString().trim() !== '') {
      formDataHtml += `
        <div class="field">
          <span class="field-label">${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:</span>
          <span class="field-value">${value}</span>
        </div>
      `;
    }
  }
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Website Brief Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background-color: #02C173; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .field { margin-bottom: 10px; padding: 8px; background: white; border-left: 4px solid #02C173; }
        .field-label { font-weight: bold; color: #333; display: inline-block; min-width: 250px; }
        .field-value { margin-left: 10px; color: #666; }
        .raw-data { margin-top: 30px; padding: 20px; background: #f0f0f0; border: 1px solid #ddd; }
        .raw-data h3 { color: #02C173; margin-bottom: 15px; }
        .data-item { margin-bottom: 5px; font-family: monospace; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Website Brief Form Submission</h1>
        </div>
        <div class="content">
          <h2>Client Responses:</h2>
          ${formDataHtml}
          
          <div class="raw-data">
            <h3>Complete Form Data (Raw):</h3>
            ${Object.entries(data).map(([key, value]) => 
              `<div class="data-item"><strong>${key}:</strong> ${value}</div>`
            ).join('')}
          </div>
          
          <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};