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
        .section { margin-bottom: 30px; border-bottom: 1px solid #ddd; padding-bottom: 20px; }
        .section-title { font-size: 18px; font-weight: bold; color: #02C173; margin-bottom: 15px; }
        .field { margin-bottom: 10px; }
        .field-label { font-weight: bold; color: #333; display: inline-block; width: 200px; }
        .field-value { margin-left: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Logo Brief Form Submission</h1>
        </div>
        <div class="content">
          
          <div class="section">
            <div class="section-title">Client Information</div>
            <div class="field">
              <span class="field-label">Company:</span>
              <span class="field-value">${data.client_name || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Contact Person:</span>
              <span class="field-value">${data.contact_person || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Address:</span>
              <span class="field-value">${data.address || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Phone:</span>
              <span class="field-value">${data.phone || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Email:</span>
              <span class="field-value">${data.email || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Website:</span>
              <span class="field-value">${data.website || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Logo Design Brief</div>
            <div class="field">
              <span class="field-label">Company Name:</span>
              <span class="field-value">${data.company_name || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Slogan:</span>
              <span class="field-value">${data.slogan || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Company Overview:</span>
              <span class="field-value">${data.company_overview || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Target Audience:</span>
              <span class="field-value">${data.target_audience || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Additional Requirements:</span>
              <span class="field-value">${data.additional_requirements || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Logo Examples & Preferences</div>
            <div class="field">
              <span class="field-label">Colors Like:</span>
              <span class="field-value">${data.colors_like || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Colors Dislike:</span>
              <span class="field-value">${data.colors_dislike || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Horizontal Logos Like:</span>
              <span class="field-value">${data.horizontal_logos_like || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Horizontal Logos Dislike:</span>
              <span class="field-value">${data.horizontal_logos_dislike || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Website Logos Like:</span>
              <span class="field-value">${data.website_logos_like || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Other Information</div>
            <div class="field">
              <span class="field-label">Additional Info:</span>
              <span class="field-value">${data.additional_info || 'Not provided'}</span>
            </div>
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
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background-color: #02C173; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 30px; border-bottom: 1px solid #ddd; padding-bottom: 20px; }
        .section-title { font-size: 18px; font-weight: bold; color: #02C173; margin-bottom: 15px; }
        .field { margin-bottom: 10px; }
        .field-label { font-weight: bold; color: #333; display: inline-block; width: 200px; }
        .field-value { margin-left: 10px; }
        .modules-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
        .module-item { display: flex; justify-content: space-between; padding: 5px; background: #fff; border-radius: 4px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Website Brief Form Submission</h1>
        </div>
        <div class="content">
          
          <div class="section">
            <div class="section-title">Client Information</div>
            <div class="field">
              <span class="field-label">Client Name:</span>
              <span class="field-value">${data.client_name || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Date:</span>
              <span class="field-value">${data.date || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Email:</span>
              <span class="field-value">${data.email || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Signature:</span>
              <span class="field-value">${data.signature || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Business Specifics</div>
            <div class="field">
              <span class="field-label">Has Logo:</span>
              <span class="field-value">${data.has_logo || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Business Name:</span>
              <span class="field-value">${data.business_name || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Slogan:</span>
              <span class="field-value">${data.slogan || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Existing Website:</span>
              <span class="field-value">${data.existing_site || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Website Specifics</div>
            <div class="field">
              <span class="field-label">Principal Purpose:</span>
              <span class="field-value">${data.principal_purpose || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Target Audience:</span>
              <span class="field-value">${data.target_audience || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Existing Website URL:</span>
              <span class="field-value">${data.existing_website_url || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Color Details:</span>
              <span class="field-value">${data.color_details || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Competitors:</span>
              <span class="field-value">${data.competitors || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Needs CMS:</span>
              <span class="field-value">${data.needs_cms || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">CMS Platform:</span>
              <span class="field-value">${data.cms_platform || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">SSL Required:</span>
              <span class="field-value">${data.ssl_required || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Platform Preferences:</span>
              <span class="field-value">${data.platform_preferences || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Content Pages:</span>
              <span class="field-value">${data.content_pages || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Website Modules Required</div>
            <div class="modules-grid">
              <div class="module-item"><span>Account Login:</span><span>${data.account_login_required || 'Not specified'}</span></div>
              <div class="module-item"><span>Company Info:</span><span>${data.company_info_required || 'Not specified'}</span></div>
              <div class="module-item"><span>Banner/Slider:</span><span>${data.banner_slider_required || 'Not specified'}</span></div>
              <div class="module-item"><span>Content Area:</span><span>${data.content_area_required || 'Not specified'}</span></div>
              <div class="module-item"><span>News & Events:</span><span>${data.news_events_required || 'Not specified'}</span></div>
              <div class="module-item"><span>Site Search:</span><span>${data.site_search_required || 'Not specified'}</span></div>
              <div class="module-item"><span>RFI Form:</span><span>${data.rfi_form_required || 'Not specified'}</span></div>
              <div class="module-item"><span>Blog Feed:</span><span>${data.blog_feed_required || 'Not specified'}</span></div>
              <div class="module-item"><span>Featured Products:</span><span>${data.featured_products_required || 'Not specified'}</span></div>
              <div class="module-item"><span>Video Gallery:</span><span>${data.video_gallery_required || 'Not specified'}</span></div>
              <div class="module-item"><span>Newsletter:</span><span>${data.newsletter_required || 'Not specified'}</span></div>
              <div class="module-item"><span>Shopping Cart:</span><span>${data.cart_widget_required || 'Not specified'}</span></div>
              <div class="module-item"><span>Social Media:</span><span>${data.social_icons_required || 'Not specified'}</span></div>
              <div class="module-item"><span>Twitter Feed:</span><span>${data.twitter_feed_required || 'Not specified'}</span></div>
              <div class="module-item"><span>Facebook Feed:</span><span>${data.facebook_feed_required || 'Not specified'}</span></div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Technical Requirements</div>
            <div class="field">
              <span class="field-label">External API:</span>
              <span class="field-value">${data.external_api || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Functional Requirements:</span>
              <span class="field-value">${data.functional_requirements || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Specific Requirements:</span>
              <span class="field-value">${data.specific_requirements || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Admin Requirements:</span>
              <span class="field-value">${data.admin_requirements || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Payment & Timeline</div>
            <div class="field">
              <span class="field-label">Payment Credit Card:</span>
              <span class="field-value">${data.payment_credit_card ? 'Yes' : 'No'}</span>
            </div>
            <div class="field">
              <span class="field-label">Project Deadline:</span>
              <span class="field-value">${data.project_deadline || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Agreement Details</div>
            <div class="field">
              <span class="field-label">Account Manager Name:</span>
              <span class="field-value">${data.account_manager_name || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Account Manager Signature:</span>
              <span class="field-value">${data.account_manager_signature || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Work Approved By:</span>
              <span class="field-value">${data.work_approved_by || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Work Locked By:</span>
              <span class="field-value">${data.work_locked_by || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Client Signature:</span>
              <span class="field-value">${data.client_signature || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="field-label">Agreement Date:</span>
              <span class="field-value">${data.agreement_date || 'Not provided'}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Additional Information</div>
            <div class="field">
              <span class="field-label">Other Suggestions:</span>
              <span class="field-value">${data.other_suggestions || 'Not provided'}</span>
            </div>
          </div>

          <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};