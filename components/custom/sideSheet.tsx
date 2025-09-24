"use client";
import { useState } from "react";

export default function FloatingSheetButton() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Container for button + sheet */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "row-reverse", // button attached to the sheet
          height: "450px",
          width: open ? "380px" : "50px", // expand width when open
          transition: "width 0.3s ease",
          overflow: "hidden", // no scroll on container
        }}
      >
        {/* Sheet content */}
        {open && (
          <div
            style={{
              background: "#000",

              padding: "0px 20px",
              boxShadow: "-10px 0 40px #00000026",



              overflow: "hidden", // remove scroll
            }}
          >
            <h2 style={{ fontSize: "20px" }}>Sign Up Now &</h2>
            <p style={{ fontSize: "20px" }}> Let’s Get Started</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted!");
                setOpen(false);
              }}
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <input type="text" placeholder="Your Name *" required className="p-2 rounded border" />
              <input type="email" placeholder="Email *" required className="p-2 rounded border" />
              <div style={{ display: "flex" }}>
                <div className="input-group">

                  <span className="input-group-text rounded-start border-end-0">+92</span>


                  <input type="tel" className="form-control rounded-end" placeholder="3001234567" required />
                </div>
              </div>
              <textarea placeholder="Talk About Your Project" rows={3} className="p-2 rounded border" />
              <button type="submit" className="te-theme-btn blue-btn" style={{borderRadius:"5px"}}>
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Vertical Button */}
        <div
  onClick={() => setOpen(!open)}
  style={{
    width: "50px",
    gap:"10px",
    height: "150px", // smaller than sheet height
    background: "#02c173",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: open ? "0" : "3px 0 0 3px",
    boxShadow: "0 0 40px #00000026",
    flexShrink: 0,
    marginTop: "150px", // center vertically in the 450px container
  }}
>
  <span
    style={{
      transform: "rotate(-90deg)",
      textTransform: "uppercase",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "700",
      color: "#fff",
      fontSize: "16px",
      whiteSpace: "nowrap",
    }}
  >
    LET'S GET STARTED
  </span>
</div>

      </div>
    </div>
  );
}
