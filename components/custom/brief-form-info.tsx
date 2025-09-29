"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { submitBriefForm } from "@/app/actions"


type YesNo = "yes" | "no"

function YesNoField({
  name,
  value,
  onChange,
}: {
  name: string
  value: YesNo | undefined
  onChange: (v: YesNo) => void
}) {
  return (
    <div className="yesno-field">
      <div className="radio-option">
        <input type="radio" id={`${name}-yes`} name={name} value="yes" checked={value === "yes"} onChange={() => onChange("yes")} style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', color: 'white', padding: '10px 20px' }} />
        <label htmlFor={`${name}-yes`}>Yes</label>
      </div>
      <div className="radio-option">
        <input type="radio" id={`${name}-no`} name={name} value="no" checked={value === "no"} onChange={() => onChange("no")} style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', color: 'white', padding: '10px 20px' }} />
        <label htmlFor={`${name}-no`}>No</label>
      </div>
    </div>
  )
}

export function BriefForm() {
  const [submitting, setSubmitting] = useState(false)
  const [yesNoValues, setYesNoValues] = useState<Record<string, YesNo>>({})

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) {
      console.log("[DEBUG] Submission already in progress, ignoring")
      return
    }
    console.log("[DEBUG] Starting form submission")
    setSubmitting(true)
    try {
      const form = new FormData(e.currentTarget)
      // Add yes/no values to form data
      Object.entries(yesNoValues).forEach(([key, value]) => {
        form.set(key, value)
      })
      console.log("[CLIENT] Brief form submitted payload:", Object.fromEntries(form.entries()))
      console.log("[CLIENT] Calling server action submitBriefForm")
      const result = await submitBriefForm(form)
      console.log("[CLIENT] Server action result:", result)
      alert("Form submitted successfully!")
      // Reset form if needed
      if (e.currentTarget) {
        e.currentTarget.reset()
      }
      setYesNoValues({})
    } catch (error) {
      console.error("[ERROR] Error submitting form:", error instanceof Error ? error.message : error, error instanceof Error ? error.stack : '')
      alert("An error occurred while submitting the form.")
    } finally {
      console.log("[DEBUG] Submission finished")
      setSubmitting(false)
    }
  }

  const modules: { key: string; label: string }[] = [
    { key: "account_login", label: "Account Login" },
    { key: "company_info", label: "About / Company Information" },
    { key: "banner_slider", label: "Banner / Slider" },
    { key: "content_area", label: "Content Area" },
    { key: "news_events", label: "News and Events Widget" },
    { key: "site_search", label: "Site Search" },
    { key: "rfi_form", label: "Request for Information Form" },
    { key: "blog_feed", label: "Blog Feed" },
    { key: "featured_products", label: "Featured Products" },
    { key: "video_gallery", label: "Video Gallery" },
    { key: "newsletter", label: "Newsletter Subscription Option" },
    { key: "cart_widget", label: "Shopping Cart Widget" },
    { key: "social_icons", label: "Social Media Icons" },
    { key: "twitter_feed", label: "Twitter/X Feed" },
    { key: "facebook_feed", label: "Facebook Feeds" },
  ]

  return (
    <form onSubmit={onSubmit} className="brief-form">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">

          <div>
            <Link href="/" className="">
              <Image
                src="/images/logo/nexus logo site.png"
                alt="Image"
                width={187}
                height={56}
              />
            </Link>
          </div>
          <h1 className="hero-title">Website Brief Form</h1>
          <p className="hero-subtitle">
            Please fill out this form so we can scope and craft your website accurately.
          </p>
        </div>

      </section>

   

      {/* Client Information */}
      <div className="card" style={{ overflow: 'hidden' }}>
        <div className="card-header">
          <div className="card-title">Client Information</div>
        </div>
        <div className="two-col" style={{padding:"20px"}}>
          <div className="form-field">
            <label htmlFor="client_name" style={{ marginBottom: '10px' }}>Client Name</label>
            <input id="client_name" name="client_name"  style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: '40px' }} />
          </div>
          <div className="form-field">
            <label htmlFor="date" style={{ marginBottom: '10px' }}>Date</label>
            <input id="date" name="date" type="date" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px' , height: '40px' }} />
          </div>
          <div className="form-field">
            <label htmlFor="email" style={{ marginBottom: '10px' }}>Email</label>
            <input id="email" name="email" type="email" required style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: '40px' }} />
          </div>
          <div className="form-field full-span">
            <label htmlFor="signature" style={{ marginBottom: '10px' }}>Signature</label>
            <input id="signature" name="signature"  style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px' , height: '40px' }} />
          </div>
        </div>
      </div>

      {/* Business Specifics */}
      <div className="card" style={{ overflow: 'hidden' }}>
        <div className="card-header">
          <div className="card-title">Business Specifics</div>
        </div>
        <div className="card-grid" style={{ padding: '20px' }}>
          <div className="field-row">
            <div className="field-label">
              <label>Do you have a Logo for the Business?</label>
              <div className="hint-text">Upload later is fine.</div>
            </div>
            <YesNoField name="has_logo" value={yesNoValues.has_logo} onChange={(v) => setYesNoValues(prev => ({...prev, has_logo: v}))} />
          </div>

          <div className="two-col">
            <div className="form-field">
              <label htmlFor="business_name" style={{ marginBottom: '10px' }}>Business Name</label>
              <input id="business_name" name="business_name"  style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height:"40px" }} />
            </div>
            <div className="form-field">
              <label htmlFor="slogan" style={{ marginBottom: '10px' }}>Slogan (if any)</label>
              <input id="slogan" name="slogan" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height:"40px" }} />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="existing_site" style={{ marginBottom: '10px' }}>Is there an existing website? If yes, URL</label>
            <input id="existing_site" name="existing_site"  style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height:"40px" }} />
          </div>
        </div>
      </div>


      {/* Website Specifics */}
      <div className="card" style={{ border: 'none', overflow: 'visible' }}>
        <div className="card-header">
          <div className="card-title">Website Specifics</div>
        </div>
        <div className="card-grid" style={{ padding: '20px' }}>
          <div className="two-col">
            <div className="form-field" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="principal_purpose" style={{ marginBottom: "10px", display: 'block' }}>What is the Principal Purpose of the Website?</label>
              <textarea id="principal_purpose" name="principal_purpose" style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', width: '100%', minHeight: '40px', flex: 1, color: 'white', padding: '10px 0px' }} />
            </div>
            <div className="form-field" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="target_audience" style={{ marginBottom: "10px", display: 'block' }}>Who is the Target Audience?</label>
              <textarea id="target_audience" name="target_audience"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', width: '100%', minHeight: '40px', flex: 1, color: 'white', padding: '10px 0px' }} />
            </div>
          </div>
          <div className="two-col">
            <div className="form-field" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="existing_website_url" style={{ marginBottom: '10px' }}>Is there an existing website? If yes, please provide the URL</label>
              <textarea id="existing_website_url" name="existing_website_url"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', width: '100%', height:"40px", color: 'white', padding: '10px 0px' }} />
            </div>
            <div className="form-field">
              <label htmlFor="color_details" style={{ marginBottom: '10px' }}>Are there any website color preferences? If yes, mention the details.</label>

              <input id="color_details" name="color_details"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', width: '100%', color: 'white',  height:"40px", padding: '10px 0px' }} />
            </div>
          </div>
          <div className="two-col">
            <div className="form-field" >
              <label htmlFor="competitors" style={{ marginBottom: '10px' }}>Please mention 3 top competitors</label>
              <textarea id="competitors" name="competitors"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', width: '100%', height:"40px", color: 'white', padding: '10px 0px' }} />
            </div>
            <div className="form-field" >
              <label style={{ marginBottom: '30px' }}>What payment methods would you like to use? Check all that applies</label>
              <div className="checkbox-group" style={{ display: "flex", gap: "10px" }}>
                <div className="checkbox-option" style={{ display: "flex", gap: "10px", padding: "0px 10px" }}>
                  <input type="checkbox" id="payment_credit_card" className="paymnet" name="payment_credit_card" style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', color: 'white', padding: '10px 0px' }} />
                  <label htmlFor="payment_credit_card" className="paymnet">Pay by credit card</label>
                </div>
                <div className="checkbox-option" style={{ display: "flex", gap: "10px", alignItems: "center", padding: "0px 10px" }}>
                  <input type="checkbox" id="payment_bank_transfer" className="paymnet" name="payment_bank_transfer" style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', color: 'white', padding: '10px 0px' }} />
                  <label htmlFor="payment_bank_transfer" className="paymnet">Bank transfer</label>
                </div>
                <div className="checkbox-option" style={{ display: "flex", gap: "10px", alignItems: "center", padding: "0px 10px" }}>
                  <input type="checkbox" id="payment_mastercard" className="paymnet" name="payment_mastercard" style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', color: 'white', padding: '10px 0px' }} />
                  <label htmlFor="payment_mastercard" className="paymnet">MasterCard</label>
                </div>
                <div className="checkbox-option" style={{ display: "flex", gap: "10px", alignItems: "center", padding: "0px 10px" }}>
                  <input type="checkbox" id="payment_paypal" className="paymnet" name="payment_paypal" style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', color: 'white', padding: '10px 0px' }} />
                  <label htmlFor="payment_paypal" className="paymnet">Paypal</label>
                </div>
              </div>
            </div>
          </div>
          <div className="two-col">
            <div className="field-row" style={{ display: 'flex', alignItems: 'start', flexDirection: "column", gap: "10px", minHeight: '120px' }}>
              <div className="field-label" style={{ flex: 1 }}>
                <label style={{ marginBottom: '10px' }}>Do you need a CMS (Content Management System) to edit the content of the content pages like (About us, Privacy policy, FAQ etc.)?</label>
              </div>
              <div style={{ width: '120px' }}>
                <YesNoField name="needs_cms" value={yesNoValues.needs_cms} onChange={(v) => setYesNoValues(prev => ({...prev, needs_cms: v}))} />
              </div>
            </div>
            <div className="" style={{ display: 'flex', alignItems: 'start', flexDirection: "column", gap: "10px", minHeight: '120px' }}>
              <div className="field-label" style={{ flex: 1 }}>
                <label style={{ marginBottom: '10px' }}>SSL Integration required?</label>
              </div>
              <div style={{ width: '120px' }}>
                <YesNoField name="ssl_required" value={yesNoValues.ssl_required} onChange={(v) => setYesNoValues(prev => ({...prev, ssl_required: v}))} />
              </div>
            </div>
          </div>
          <div className="two-col">
            <div className="form-field">
              <label htmlFor="platform_preferences" style={{ marginBottom: '10px' }}>Do you have any preferences for the platform / technology to be used for the website? Or, open to best option which suites my business</label>
              <textarea id="platform_preferences" name="platform_preferences"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', height:"40px", color: 'white', padding: '10px 20px' }} />
            </div>
            <div className="form-field">
              <label htmlFor="specific_requirements" style={{ marginBottom: '2px' }}>Are there any specific requirements or preferences not mentioned above?</label>
              <br/>
              <textarea id="specific_requirements" name="specific_requirements"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', height:"40px", color: 'white', padding: '10px 20px' }} />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="content_pages" style={{ marginBottom: '10px' }}>Please list down content pages you will have on your website? (Example: About Us, Privacy Policy, FAQs etc.)</label>
            <textarea id="content_pages" name="content_pages"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', minHeight: "50px", color: 'white', padding: '10px 20px' }} />
          </div>


          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #02C173', padding: '8px', color: 'white', textAlign: 'left' }}>Modules/components</th>
                  <th style={{ border: '1px solid #02C173', padding: '8px', color: 'white', textAlign: 'left' }}>Required (Yes/No)</th>
                  <th style={{ border: '1px solid #02C173', padding: '8px', color: 'white', textAlign: 'left' }}>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {modules.map(module => (
                  <tr key={module.key}>
                    <td style={{ border: '1px solid #02C173', padding: '8px', color: 'white', textAlign: 'left' }}>{module.label}</td>
                    <td style={{ border: '1px solid #02C173', padding: '8px', textAlign: 'left' }}><YesNoField name={`${module.key}_required`} value={yesNoValues[`${module.key}_required`]} onChange={(v) => setYesNoValues(prev => ({...prev, [`${module.key}_required`]: v}))} /></td>
                    <td style={{ border: '1px solid #02C173', padding: '8px', textAlign: 'left', verticalAlign: 'middle' }}><textarea name={`${module.key}_feedback`} style={{ border: '1px solid #02C173', background: 'transparent', borderRadius: '4px', width: '100%', minHeight: '60px', color: 'white', resize: 'vertical', padding: '10px 20px', boxSizing: 'border-box' }} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="two-col">
            <div className="form-field" >
              <label htmlFor="external_api" style={{ marginBottom: '10px' }}>Any External API required? If yes, then please mention the details of that API</label>
              <textarea id="external_api" name="external_api"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', height:"40px", color: 'white', padding: '10px 20px' }} />
            </div>
            <div className="form-field" >
              <label htmlFor="functional_requirements" style={{ marginBottom: '10px' }}>Detailed Functional Requirements:(Please mention the detailed functional requirements of the application)</label>
              <textarea id="functional_requirements" name="functional_requirements"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', height:"40px", color: 'white', padding: '10px 20px' }} />
            </div>
          </div>
          <div className="two-col">
            <div className="form-field" >
              <label htmlFor="admin_requirements" style={{ marginBottom: '1px' }}>Administration area Detail Functional Requirements (Please mention detailed functional requirements of Admin module)</label>
              <br />
              <textarea id="admin_requirements" name="admin_requirements"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', height:"40px", color: 'white', padding: '10px 20px' }} />
            </div>
            <div className="form-field">
              <label htmlFor="cms_platform" style={{ marginBottom: '10px' }}>Any specific content management system (CMS) platform you require? (Drupel, Magento, Word press, etc.) Or do you leave that to the developer’s suggestion?</label>

              <textarea id="cms_platform" name="cms_platform"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', height:"40px", color: 'white', padding: '10px 20px' }} />
            </div>

          </div>

          <div className="two-col">
          <div className="form-field">
              <label htmlFor="other_suggestions" style={{ marginBottom: '10px' }}>Is there a specific deadline you have for the completion of the website? (Kindly note that website completion depends on the scope of work & is subject to extension if required)</label>
              <textarea id="other_suggestions" name="other_suggestions"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', height:"40px", color: 'white', padding: '10px 20px' }} />
            </div>
            <div className="form-field">
              <label htmlFor="other_suggestions" style={{ marginBottom: '27px' }}>Do you have any other suggestion, idea or requirements for the website?</label>
              <br/>
              <textarea id="other_suggestions" name="other_suggestions"  style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', height:"40px", color: 'white', padding: '10px 20px' }} />
            </div>

          </div>
        </div>
      </div>

      {/* Scope of Work Agreement */}
      <div className="card" style={{ overflow: 'hidden' }}>
        <div className="card-header">
          <div className="card-title">Scope of Work Agreement</div>
        </div>
        <div className="card-grid" style={{ padding: '20px' }}>
          <p className="agreement-note" style={{ fontSize: "17px" }}>
            This acknowledges both parties understand and agree to the scope of work mentioned above to the best of
            their capabilities. Additional changes beyond the scope may be subject to additional charges.
          </p>

          <div className="two-col">
            <div className="form-field">
              <label htmlFor="work_locked_by" style={{ marginBottom: '10px' }}>Scope of Work Locked in By</label>
              <input id="work_locked_by" name="work_locked_by" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px',  height:"40px"}} />
            </div>
            <div className="form-field">
              <label htmlFor="work_approved_by" style={{ marginBottom: '10px' }}>Scope of Work Approved by</label>
              <input id="work_approved_by" name="work_approved_by" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height:"40px" }} />
            </div>
          </div>

          <div className="two-col">
            <div className="form-field">
              <label htmlFor="account_manager_name" style={{ marginBottom: '10px' }}>Account Manager Name</label>
              <input id="account_manager_name" name="account_manager_name" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px'  , height:"40px"}} />
            </div>
            <div className="form-field">
              <label htmlFor="account_manager_signature" style={{ marginBottom: '10px' }}>Signature</label>
              <input id="account_manager_signature" name="account_manager_signature"  style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px' , height:"40px" }} />
            </div>
          </div>

          <div className="two-col">
            <div className="form-field">
              <label htmlFor="project_deadline" style={{ marginBottom: '10px' }}>Project Deadline</label>
              <input id="project_deadline" name="project_deadline" type="date" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px' , height:"40px" }} />
            </div>
            <div className="form-field">
              <label htmlFor="client_signature" style={{ marginBottom: '10px' }}>Signature</label>
              <input id="client_signature" name="client_signature"  style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px' , height:"40px" }} />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="agreement_date" style={{ marginBottom: '10px' }}>dd/mm/yyyy Date</label>
            <input id="agreement_date" name="agreement_date" type="date" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height:"40px"  }} />
          </div>

       

          <div>
            <p style={{ color: "white", fontSize: "17px", lineHeight: "30px" }}> <span style={{ color: "#02C173" }}>Disclaimer</span>: The following information will strictly be used for order fulfillment, and to have a clear understanding of your business; it will not be distributed to any third party/service vendor.

              Your input is valuable to us, and we strongly encourage you to provide as many details as you can. However, we will be corresponding with you at every step of the process even after receiving this document since a website varies enormously in content & functionality. Any future alterations to the following specifications will be subject to additional charges. Carefully submit your details as it would be the building blocks for our design work. Feel free to leave fields blank if not applicable. In case of any concerns which you would like to discuss over the phone related to this form, call us at (682) 428-9881

            </p>
            <p style={{ color: "gray" }}>Note: After design approval, and during development phase, you cannot ask us to stop your project, no refunds will be applicable.</p>
          </div>

          <div className="submit-row" style={{ textAlign: "center" }}>
            <button type="submit" className="te-theme-btn blue-btn" style={{ borderRadius: '6px' }} disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
