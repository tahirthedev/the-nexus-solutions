import { BriefForm } from "@/components/custom/brief-form-info";
import { LogoBriefForm } from "@/components/custom/logo-brief-form";



export default function Page() {
  return (
    <main className="page-container">
      {/* <div aria-hidden className="background-blobs">
        <div className="neon-blob blob-1" />
        <div className="neon-blob neon-blob--accent blob-2" />
        <div className="neon-blob blob-3" />
      </div> */}

      <section className="form-section">
        <LogoBriefForm />
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-contact">
            <a href="tel:+16824289881" className="footer-link">
              (682) 428-9881
            </a>
          </div>

          <div>
            <a href="mailto:info@thenexusdigitals.com" className="footer-link">
              <></>
              info@thenexusdigitals.com
            </a>
          </div>

          <address className="footer-address">
            2006 Broken Oak Street
            <br />
            San Antonio - Texas
            <br />
            78232-3106
          </address>
        </div>
      </footer>
    </main>
  )
}
