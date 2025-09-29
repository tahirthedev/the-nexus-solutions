"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import Image from "next/image"


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

export function LogoBriefForm() {
    const [submitting, setSubmitting] = useState(false)

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
            console.log("[v0] Logo brief form submitted payload:", Object.fromEntries(form.entries()))
            console.log("[DEBUG] About to send fetch to Formspree")
            const response = await fetch('https://formspree.io/f/xkgqjkwd', {
                method: 'POST',
                body: form,
                headers: {
                    'Accept': 'application/json'
                }
            })
            console.log("[DEBUG] Fetch response status:", response.status, "ok:", response.ok, "statusText:", response.statusText)
            if (response.ok) {
                const responseText = await response.text()
                console.log("[SUCCESS] Form submitted to Formspree successfully, response:", responseText)
                try {
                    const responseJson = JSON.parse(responseText)
                    console.log("[DEBUG] Parsed response JSON:", responseJson)
                    if (responseJson.ok) {
                        console.log("[DEBUG] Formspree confirms submission was successful")
                    } else {
                        console.warn("[WARN] Formspree response indicates issue:", responseJson)
                    }
                } catch (parseError) {
                    console.log("[DEBUG] Response is not JSON, raw text:", responseText)
                }
                alert("Form submitted successfully!")
                // Reset form if needed
                if (e.currentTarget) {
                    e.currentTarget.reset()
                }
            } else {
                const responseText = await response.text()
                console.error("[ERROR] Formspree submission failed:", response.status, response.statusText, "Response body:", responseText)
                try {
                    const errorJson = JSON.parse(responseText)
                    console.error("[DEBUG] Parsed error response:", errorJson)
                } catch (parseError) {
                    console.log("[DEBUG] Error response is not JSON, raw text:", responseText)
                }
                alert("Form submission failed. Please try again.")
            }
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

    const logoImages = [
        '/images/logo-brief/c1.jpg',
        '/images/logo-brief/c2.jpg',
        '/images/logo-brief/c3.jpg',
        '/images/logo-brief/c4.jpg',
        '/images/logo-brief/c5.jpg',
        '/images/logo-brief/c6.jpg',
        '/images/logo-brief/t1.png',
        '/images/logo-brief/t2.png',
        '/images/logo-brief/t3.jpg',
        '/images/logo-brief/t4.jpg',
        '/images/logo-brief/t5.jpg',
        '/images/logo-brief/t6.jpg',
    ]

    const logoImagesTwo = [
        '/images/logo-brief-two/h1.jpg',
        '/images/logo-brief-two/h2.jpg',
        '/images/logo-brief-two/h3.jpg',
        '/images/logo-brief-two/h4.png',
        '/images/logo-brief-two/h5.jpg',
        '/images/logo-brief-two/h6.png',
        '/images/logo-brief-two/o1.jpg',
        '/images/logo-brief-two/o2.jpg',
        '/images/logo-brief-two/o3.png',
        '/images/logo-brief-two/o4.jpg',
        '/images/logo-brief-two/o5.jpg',
        '/images/logo-brief-two/o6.jpg',
    ]

    const logoImagesThree = [
        '/images/logo-brief-three/w1.png',
        '/images/logo-brief-three/w2.png',
        '/images/logo-brief-three/w3.jpg',
        '/images/logo-brief-three/w4.png',
        '/images/logo-brief-three/w5.jpg',
        '/images/logo-brief-three/w6.jpg',
        '/images/logo-brief-three/w7.jpg',
        '/images/logo-brief-three/w8.jpg',
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
                    <h1 className="hero-title">Logo Brief Form</h1>
                    <p className="hero-subtitle">
                        Please fill out this form so we can scope and craft your Logo accurately.
                    </p>
                </div>

            </section>



            {/* Client Information */}
            <div className="card" style={{ overflow: 'hidden' }}>
                <div className="card-header">
                    <div className="card-title" style={{ fontSize: '24px', fontWeight: 'bold' }}>Client Information</div>
                </div>
                <div className="two-col" style={{ padding: "20px" }}>
                    <div className="form-field">
                        <label htmlFor="client_name" style={{ marginBottom: '10px' }}>Company</label>
                        <input id="client_name" name="client_name" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: '40px' }} />
                    </div>
                    <div className="form-field">
                        <label htmlFor="contact_person" style={{ marginBottom: '10px' }}>Contact Person</label>
                        <input id="contact_person" name="contact_person" type="text" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: '40px' }} />
                    </div>
                </div>

                <div className="two-col" style={{ padding: "20px" }}>
                    <div className="form-field">
                        <label htmlFor="address" style={{ marginBottom: '10px' }}>Address</label>
                        <input id="address" name="address" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: '40px' }} />
                    </div>
                    <div className="form-field">
                        <label htmlFor="phone" style={{ marginBottom: '10px' }}>phone</label>
                        <input id="phone" name="phone" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: '40px' }} />
                    </div>
                </div>
                <div className="two-col" style={{ padding: "20px" }}>
                    <div className="form-field">
                        <label htmlFor="email" style={{ marginBottom: '10px' }}>Email</label>
                        <input id="email" name="email" type="email" required style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: '40px' }} />
                    </div>
                    <div className="form-field">
                        <label htmlFor="website" style={{ marginBottom: '10px' }}>Website address</label>
                        <input id="website" name="website" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: '40px' }} />
                    </div>
                </div>
            </div>

            {/* Logo Specifics */}
            <div className="card" style={{ overflow: 'hidden' }}>
                <div className="card-header">
                    <div className="card-title" style={{ fontSize: '24px', fontWeight: 'bold' }}>Logo Design Brief</div>
                </div>
                <div className="card-grid" style={{ padding: '20px' }}>
                    <div className="two-col">
                        <div className="form-field">
                            <label htmlFor="company_name" style={{ marginBottom: '10px' }}>What is the Name of the company that will appear on the Logo?</label>
                            <input id="company_name" name="company_name" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: "40px" }} />
                        </div>
                        <div className="form-field">
                            <label htmlFor="slogan" style={{ marginBottom: '10px' }}>Are there any tagline/slogan associated with the logo?</label>
                            <input id="slogan" name="slogan" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: "40px" }} />
                        </div>
                    </div>
                    <div className="two-col">
                        <div className="form-field">
                            <label htmlFor="company_overview" style={{ marginBottom: '10px' }}>Please give us a brief overview of your company. What are your services? What you do or produce?</label>
                            <input id="company_overview" name="company_overview" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: "40px" }} />
                        </div>
                        <div className="form-field">
                            <label htmlFor="target_audience" style={{ marginBottom: '10px' }}>Who are your target audience/typical customer?</label>
                            <input id="target_audience" name="target_audience" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: "40px" }} />
                        </div>
                    </div>
                    <div className="two-col">
                        <div className="form-field">
                            <label htmlFor="style_vision" style={{ marginBottom: '10px' }}>What sort of style do you envision? (E.g. professional, modern and clean, old world, cutting edge, vintage, sporty, futuristic, High etc.)</label>
                            <input id="style_vision" name="style_vision" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: "40px" }} />
                        </div>
                        <div className="form-field">
                            <label htmlFor="adjectives" style={{ marginBottom: '10px' }}>Please provide some adjectives that describe what you hope to communicate with your logo ?</label>
                            <input id="adjectives" name="adjectives" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: "40px" }} />
                        </div>
                    </div>

                    <div className="two-col">
                        <div className="form-field">
                            <label htmlFor="logo_ideas" style={{ marginBottom: '10px' }}>Are the any ideas that you like to use for the logo (or) you are open to ideas? Ideas, icons, images or symbols
                            </label>
                            <input id="logo_ideas" name="logo_ideas" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: "40px" }} />
                        </div>
                        <div className="form-field">
                            <label htmlFor="symbols" style={{ marginBottom: '10px' }}>Do you have any particular images or symbols you associate with your product or company? (E.g. favorite animal or object, like a lion, ship, mountain or tree.)</label>
                            <input id="symbols" name="symbols" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: "40px" }} />
                        </div>
                        <div className="form-field full-span">
                            <label htmlFor="color_preferences" style={{ marginBottom: '10px' }}>What are your color preferences?</label>
                            <input id="color_preferences" name="color_preferences" style={{ border: '1px solid #02C173', color: 'white', padding: '10px 20px', height: "40px" }} />
                        </div>
                    </div>


                </div>
            </div>


            {/* Website Specifics */}
            <div className="card" style={{ border: 'none', overflow: 'visible' }}>
                <div className="card-header">
                    <div className="card-title" style={{ fontSize: '24px', fontWeight: 'bold' }}>Logo Examples</div>
                </div>
                <div className="card-grid" style={{ padding: '20px' }}>
                    <div className="two-col">
                        <div className="form-field">
                            <h4>Corporate/Professional</h4>
                            <p>Corporate logos are simple, bold and communicate strength. They do not necessarily illustrate what a company does. They are basic trademarks that come to symbolize a company even if they are start as a somewhat arbitrary choice.</p>
                        </div>
                        <div className="form-field">
                            <h4>Text-only</h4>
                            <p>Text-only logos are a challenge to keep unique because most fonts are so widely used. However, it can provide a nice literary or legal look. Alternatively, if you want something artier, a handwritten or arty font can look can look unique.</p>
                        </div>
                    </div>

                    <div className="logo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '20px', justifyContent: 'space-between' }}>
                        {logoImages.map((img, index) => (
                            <div key={index} style={{ position: 'relative', width: '100%', height: '200px' }}>
                                <Image fill src={img} alt={`Logo example ${index + 1}`} style={{ objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>


                    <div className="two-col">
                        <div className="form-field">
                            <h4>Historical/Seals</h4>
                            <p>These are having classic rich feel and have real longevity.</p>
                        </div>
                        <div className="form-field">
                            <h4>Old World</h4>
                            <p>Fun and beautiful. We are huge fans of old world style.</p>
                        </div>
                    </div>

                    <div className="logo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '20px', justifyContent: 'space-between' }}>
                        {logoImagesTwo.map((img, index) => (
                            <div key={`two-${index}`} style={{ position: 'relative', width: '100%', height: '200px' }}>
                                <Image fill src={img} alt={`Logo example two ${index + 1}`} style={{ objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>

                    <div>
                        <h4>Whimsical</h4>
                        <p>Whimsical logos, they are based on illustrations take more time and more budget are more unique than any other type of logo.</p>
                    </div>

                    <div className="logo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '20px', justifyContent: 'space-between' }}>
                        {logoImagesThree.map((img, index) => (
                            <div key={`three-${index}`} style={{ position: 'relative', width: '100%', height: '200px' }}>
                                <Image fill src={img} alt={`Logo example three ${index + 1}`} style={{ objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Scope of Work Agreement */}
            <div className="card" style={{ overflow: 'hidden' }}>
                <div className="card-header">
                    <div className="card-title">Other Information</div>
                </div>
                <div className="card-grid" style={{ padding: '20px' }}>
                    <div>
                        <p className="agreement-note" style={{ fontSize: "17px" }}>
                            Please provide any information, which you think we might need to know, which hasn’t been covered in your answers?
                        </p>
                        <div className="form-field full-span" style={{ width: '100%' }}>
                            <textarea id="additional_info" name="additional_info" style={{ border: '0.5px solid #02C173', background: 'transparent', borderRadius: '4px', width: '100%', minHeight: '40px', flex: 1, color: 'white', padding: '10px 0px' }} />
                        </div>
                        <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                            <p style={{marginTop:"15px"}}>Once this design questionaire is completed, simply just hit the submit button below.</p>
                            <p>One of our team member will contact you shortly. Please feel free to contact us in case of any confusion. We are committed to working with you to provide a professional identity that increases your brand equity and enhances the value proposition of your products/services.</p>
                            <p>Disclaimer: The following information will strictly be used for order fulfillment, and to have a clear understanding of your business; it will not be distributed to any third party/service vendor. Your input is valuable to us, and we strongly encourage you to describe in detail to the best of your ability. However, we will be corresponding with you at every step of the process even after receiving this document as a logo varies enormously in appearance. Any future alterations to the following specifications will be subject to additional charges. Carefully submit your details as it would be the building block for our design work. Feel free to leave fields blank if not applicable. In case of any concerns that you would like to discuss over the phone related to this form, call us at
                            (682) 428-9881</p>
                            <p>NOTE: After design approval, no refunds will be applicable.</p>
                        </div>

                        <div className="submit-row" style={{ textAlign: "center" }}>
            <button type="submit" className="te-theme-btn blue-btn" style={{ borderRadius: '6px' }} disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
