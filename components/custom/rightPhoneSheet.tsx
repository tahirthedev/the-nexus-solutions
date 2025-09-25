'use client';
import React from 'react';

export default function RightPhoneSheet() {
  return (
    <div className="right-phone-sheet">
      <div className="phone-container">
        {/* Sheet */}
        <div className="sheet">
          <div className="sheet-content">
            <p className="sheet-title">Call us now!</p>
            <p className="sheet-number">+92 300 1234567</p>
          </div>
        </div>

        {/* Phone Icon Box */}
        <div className="phone-box">
          <i className="fa-solid fa-phone"></i>
        </div>
      </div>
    </div>
  );
}
