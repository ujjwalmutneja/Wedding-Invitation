import React from "react";

export default function RealisticWaxSeal({ monogram = "S&R" }) {
  return (
    <div
      style={{
        position: "relative",
        width: "92px",
        height: "92px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "drop-shadow(0 12px 24px rgba(45, 36, 30, 0.32)) drop-shadow(0 3px 6px rgba(0, 0, 0, 0.12))",
        userSelect: "none",
      }}
    >
      {/* 3D Organic Hand-Poured Wax Seal SVG */}
      <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs>
          {/* Main Wax Lighting Gradient (Top-Left Diffuse Light) */}
          <radialGradient id="waxBase" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FBF9F6" />
            <stop offset="35%" stopColor="#EFEBE3" />
            <stop offset="70%" stopColor="#DFD8CC" />
            <stop offset="100%" stopColor="#C8BEB0" />
          </radialGradient>

          {/* Recessed Center Area Gradient */}
          <linearGradient id="innerStamp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D5CCC0" />
            <stop offset="50%" stopColor="#E5DFD5" />
            <stop offset="100%" stopColor="#FAF7F2" />
          </linearGradient>

          {/* Monogram Engraving Shadow Filter */}
          <filter id="debossText" x="-20%" y="-20%" width="140%" height="140%">
            <feOffset in="SourceAlpha" dx="0.5" dy="0.7" result="shadowOffset" />
            <feGaussianBlur in="shadowOffset" stdDeviation="0.4" result="shadowBlur" />
            <feFlood floodColor="#7A6F64" floodOpacity="0.75" result="shadowColor" />
            <feComposite in="shadowColor" in2="shadowBlur" operator="in" result="shadow" />

            <feOffset in="SourceAlpha" dx="-0.5" dy="-0.5" result="lightOffset" />
            <feGaussianBlur in="lightOffset" stdDeviation="0.4" result="lightBlur" />
            <feFlood floodColor="#FFFFFF" floodOpacity="0.85" result="lightColor" />
            <feComposite in="lightColor" in2="lightBlur" operator="in" result="highlight" />

            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="highlight" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Organic Hand-Poured Outer Wax Perimeter */}
        <path
          d="M 50,4 C 65,3 82,10 90,24 C 98,38 97,56 92,70 C 86,84 72,96 54,97 C 36,98 20,92 10,78 C 1,64 2,46 8,30 C 14,15 32,5 50,4 Z"
          fill="url(#waxBase)"
          stroke="#C5BBAE"
          strokeWidth="0.8"
        />

        {/* Raised Outer Wax Rim Highlight */}
        <path
          d="M 50,8 C 72,8 91,24 91,48 C 91,72 72,91 50,91 C 27,91 9,72 9,48 C 9,25 28,8 50,8 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          opacity="0.6"
        />

        {/* Recessed Center Circle */}
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="url(#innerStamp)"
          stroke="#BDB2A4"
          strokeWidth="1.2"
        />

        {/* Stamped Concentric Double Ring Groove */}
        <circle
          cx="50"
          cy="50"
          r="31"
          fill="none"
          stroke="#A89D8F"
          strokeWidth="0.8"
          strokeDasharray="2.5,1.5"
          opacity="0.75"
        />
        <circle
          cx="50"
          cy="50"
          r="28.5"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.6"
          opacity="0.5"
        />

        {/* Monogram Script/Serif Text Deeply Engraved */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fill="#5C5147"
          fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
          fontSize="24"
          fontWeight="600"
          letterSpacing="1"
          filter="url(#debossText)"
          style={{ fontStyle: "italic" }}
        >
          {monogram}
        </text>

        {/* Subtle decorative dot stars below monogram */}
        <circle cx="50" cy="65" r="1.2" fill="#7A6F64" opacity="0.6" />
        <circle cx="44" cy="65" r="0.8" fill="#7A6F64" opacity="0.5" />
        <circle cx="56" cy="65" r="0.8" fill="#7A6F64" opacity="0.5" />
      </svg>
    </div>
  );
}
