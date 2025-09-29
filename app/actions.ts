'use server'

export async function submitLogoBrief(formData: FormData) {
  console.log('[SERVER ACTION] Starting form submission to Formspree')
  console.log('[SERVER ACTION] Environment:', process.env.NODE_ENV)
  console.log('[SERVER ACTION] Form data keys:', Array.from(formData.keys()))
  console.log('[SERVER ACTION] Form data entries count:', formData.getAll('email').length > 0 ? 'Has email' : 'No email')

  try {
    console.log('[SERVER ACTION] Preparing fetch to Formspree')
    const fetchOptions = {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }
    console.log('[SERVER ACTION] Fetch options prepared')

    const response = await fetch('https://formspree.io/f/mvgwklkw', fetchOptions)
    console.log('[SERVER ACTION] Fetch completed')
    console.log('[SERVER ACTION] Formspree response status:', response.status, 'ok:', response.ok)
    console.log('[SERVER ACTION] Response headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      const errorText = await response.text()
      console.error('[SERVER ACTION] Formspree submission failed:', response.status, response.statusText, 'Response:', errorText)
      console.error('[SERVER ACTION] Full response details:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        body: errorText
      })
      throw new Error(`Formspree submission failed: ${response.status} ${response.statusText}`)
    }

    const responseText = await response.text()
    console.log('[SERVER ACTION] Formspree submission successful, response:', responseText)

    return { success: true, message: 'Form submitted successfully' }
  } catch (error) {
    console.error('[SERVER ACTION] Error in server action:', error)
    console.error('[SERVER ACTION] Error type:', error instanceof Error ? error.constructor.name : typeof error)
    console.error('[SERVER ACTION] Error message:', error instanceof Error ? error.message : error)
    console.error('[SERVER ACTION] Error stack:', error instanceof Error ? error.stack : 'No stack')
    throw error
  }
}

export async function submitBriefForm(formData: FormData) {
  console.log('[SERVER ACTION] Starting brief form submission to Formspree')
  console.log('[SERVER ACTION] Environment:', process.env.NODE_ENV)
  console.log('[SERVER ACTION] Form data keys:', Array.from(formData.keys()))
  console.log('[SERVER ACTION] Form data entries count:', formData.getAll('email').length > 0 ? 'Has email' : 'No email')

  try {
    console.log('[SERVER ACTION] Preparing fetch to Formspree')
    const fetchOptions = {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }
    console.log('[SERVER ACTION] Fetch options prepared')

    const response = await fetch('https://formspree.io/f/xkgqjkwd', fetchOptions)
    console.log('[SERVER ACTION] Fetch completed')
    console.log('[SERVER ACTION] Formspree response status:', response.status, 'ok:', response.ok)
    console.log('[SERVER ACTION] Response headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      const errorText = await response.text()
      console.error('[SERVER ACTION] Formspree submission failed:', response.status, response.statusText, 'Response:', errorText)
      console.error('[SERVER ACTION] Full response details:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        body: errorText
      })
      throw new Error(`Formspree submission failed: ${response.status} ${response.statusText}`)
    }

    const responseText = await response.text()
    console.log('[SERVER ACTION] Formspree submission successful, response:', responseText)

    return { success: true, message: 'Form submitted successfully' }
  } catch (error) {
    console.error('[SERVER ACTION] Error in server action:', error)
    console.error('[SERVER ACTION] Error type:', error instanceof Error ? error.constructor.name : typeof error)
    console.error('[SERVER ACTION] Error message:', error instanceof Error ? error.message : error)
    console.error('[SERVER ACTION] Error stack:', error instanceof Error ? error.stack : 'No stack')
    throw error
  }
}