"use client";
import { useState } from "react";

export default function FloatingSheetButton() {
  const [open, setOpen] = useState(false);

  const sheetWidth = 370; // width of the sheet
  const buttonWidth = 50; // width of the button
  const buttonHeight = 50; // width of the button
  const sheetHeight = 520; // height of the sheet

  return (
    <div>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", 
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        />
      )}

      {/* Sheet Container */}
      <div
        style={{
          position: "fixed",
          padding:"10px 0px",
          top: "50%",
          right: 0,
          height: `${sheetHeight}px`,
          width: open ? `${sheetWidth}px` : `${buttonWidth}px`, // 👈 only button width when closed
          transform: `translateY(-50%)`,
          zIndex: 1000,
        }}
      >
        {/* Sheet */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: `${sheetWidth}px`,
            height: `${sheetHeight}px`,
            background: "#000",
            padding: "0px 10px",
            boxShadow: "-10px 0 40px #00000026",
            transform: open ? "translateX(0)" : `translateX(${sheetWidth}px)`,
            transition: "transform 0.3s ease",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h2 style={{ fontSize: "20px", padding: "0px 15px" }}>
            Sign Up Now &
          </h2>
          <p style={{ fontSize: "20px", padding: "0px 15px" }}>
            Let’s Get Started
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
              setOpen(false);
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              padding: "0px 15px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name *"
              required
              className="p-2 rounded border"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              className="p-2 rounded border"
            />
            <div className="input-group">
              <span className="input-group-text rounded-start border-end-0">
                +92
              </span>
              <input
                type="tel"
                className="form-control rounded-end"
                placeholder="3001234567"
                required
              />
            </div>
            <textarea
              placeholder="Talk About Your Project"
              rows={4}
              className="p-2 rounded border"
            />
            <button
              type="submit"
              className="te-theme-btn blue-btn"
              style={{ borderRadius: "5px" }}
            >
              Submit
            </button>
          </form>

          {/* Button attached to left edge of sheet */}
          <div
            onClick={() => setOpen(!open)}
            style={{
              position: "absolute",
              left: `-${buttonWidth}px`,
              top: "50%",
              transform: "translateY(-50%)",
              width: `${buttonWidth}px`,
              height: "230px", // smaller button height
              background: "#02c173",
              lineHeight:"10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              borderRadius: "5px 0 0 5px",
              boxShadow: "0 0 20px #00000026",
            }}
          >
            <span
              style={{
                transform: "rotate(-90deg)",
                textTransform: "uppercase",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "700",
                color: "#fff",
                fontSize: "14px",
               
                whiteSpace: "nowrap",
                letterSpacing: "4px",
              }}
            >
              LET'S GET STARTED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
