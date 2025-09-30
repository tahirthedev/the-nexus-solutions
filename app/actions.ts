'use server'

import { sendEmail, generateLogoBriefEmailTemplate, generateWebsiteBriefEmailTemplate } from '@/lib/email';

export async function submitLogoBrief(formData: FormData) {
  console.log('[SERVER ACTION] Starting logo brief form submission')
  console.log('[SERVER ACTION] Environment:', process.env.NODE_ENV)
  console.log('[SERVER ACTION] Form data keys:', Array.from(formData.keys()))
  console.log('[SERVER ACTION] SMTP_HOST:', process.env.SMTP_HOST ? 'Set' : 'Not set')
  console.log('[SERVER ACTION] SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Not set')

  try {
    // Check if email environment variables are configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('[SERVER ACTION] Email environment variables not configured, falling back to Formspree')
      
      // Fallback to Formspree if email env vars not set
      const response = await fetch('https://formspree.io/f/mvgwklkw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Formspree submission failed: ${response.status}`);
      }

      console.log('[SERVER ACTION] Logo brief form submitted successfully via Formspree')
      return { success: true, message: 'Logo brief form submitted successfully' }
    }

    // Send email with form data
    const emailHtml = generateLogoBriefEmailTemplate(formData);
    
    await sendEmail({
      to: 'info@thenexusdigitals.com',
      subject: 'New Logo Brief Form Submission',
      html: emailHtml,
    });

    console.log('[SERVER ACTION] Logo brief email sent successfully to info@thenexusdigitals.com')
    return { success: true, message: 'Logo brief form submitted successfully' }
  } catch (error) {
    console.error('[SERVER ACTION] Error in logo brief submission:', error)
    console.error('[SERVER ACTION] Error type:', error instanceof Error ? error.constructor.name : typeof error)
    console.error('[SERVER ACTION] Error message:', error instanceof Error ? error.message : error)
    console.error('[SERVER ACTION] Error stack:', error instanceof Error ? error.stack : 'No stack')
    throw error
  }
}

export async function submitBriefForm(formData: FormData) {
  console.log('[SERVER ACTION] Starting website brief form submission')
  console.log('[SERVER ACTION] Environment:', process.env.NODE_ENV)
  console.log('[SERVER ACTION] Form data keys:', Array.from(formData.keys()))
  console.log('[SERVER ACTION] SMTP_HOST:', process.env.SMTP_HOST ? 'Set' : 'Not set')
  console.log('[SERVER ACTION] SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Not set')

  try {
    // Check if email environment variables are configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('[SERVER ACTION] Email environment variables not configured, falling back to Formspree')
      
      // Fallback to Formspree if email env vars not set
      const response = await fetch('https://formspree.io/f/xkgqjkwd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Formspree submission failed: ${response.status}`);
      }

      console.log('[SERVER ACTION] Website brief form submitted successfully via Formspree')
      return { success: true, message: 'Website brief form submitted successfully' }
    }

    // Send email with form data
    const emailHtml = generateWebsiteBriefEmailTemplate(formData);
    
    await sendEmail({
      to: 'info@thenexusdigitals.com',
      subject: 'New Website Brief Form Submission',
      html: emailHtml,
    });

    console.log('[SERVER ACTION] Website brief email sent successfully to info@thenexusdigitals.com')
    return { success: true, message: 'Website brief form submitted successfully' }
  } catch (error) {
    console.error('[SERVER ACTION] Error in website brief submission:', error)
    console.error('[SERVER ACTION] Error type:', error instanceof Error ? error.constructor.name : typeof error)
    console.error('[SERVER ACTION] Error message:', error instanceof Error ? error.message : error)
    console.error('[SERVER ACTION] Error stack:', error instanceof Error ? error.stack : 'No stack')
    throw error
  }
}