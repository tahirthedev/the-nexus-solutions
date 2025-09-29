'use server'

import { sendEmail, generateLogoBriefEmailTemplate, generateWebsiteBriefEmailTemplate } from '@/lib/email';

export async function submitLogoBrief(formData: FormData) {
  console.log('[SERVER ACTION] Starting logo brief form submission')
  console.log('[SERVER ACTION] Environment:', process.env.NODE_ENV)
  console.log('[SERVER ACTION] Form data keys:', Array.from(formData.keys()))

  try {
    // Send email with form data to into@thenexusdigitals.com
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

  try {
    // Send email with form data to into@thenexusdigitals.com
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