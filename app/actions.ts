'use server'

export async function submitLogoBrief(formData: FormData) {
  console.log('[SERVER ACTION] Starting form submission to Formspree')
  console.log('[SERVER ACTION] Form data:', Object.fromEntries(formData.entries()))

  try {
    const response = await fetch('https://formspree.io/f/xkgqjkwd', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    console.log('[SERVER ACTION] Formspree response status:', response.status, 'ok:', response.ok)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('[SERVER ACTION] Formspree submission failed:', response.status, response.statusText, 'Response:', errorText)
      throw new Error(`Formspree submission failed: ${response.status} ${response.statusText}`)
    }

    const responseText = await response.text()
    console.log('[SERVER ACTION] Formspree submission successful, response:', responseText)

    return { success: true, message: 'Form submitted successfully' }
  } catch (error) {
    console.error('[SERVER ACTION] Error in server action:', error)
    throw error
  }
}