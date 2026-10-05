import React from "react";

export default function SageMedallionSeal({
  monogram = "S & R",
  subtitle = "TAP TO OPEN",
  isPressed = false,
  isGlowing = false,
  isOpening = false,
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "116px",
        height: "148px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: isPressed ? "scale(0.92)" : isGlowing ? "scale(1.06)" : "scale(1)",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      {/* Background Volumetric Golden Glow when touched */}
      <div
        style={{
          position: "absolute",
          inset: "-25px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255, 235, 175, 0.95) 0%, rgba(212, 175, 55, 0.6) 45%, transparent 75%)",
          opacity: isGlowing ? 1 : 0.2,
          transform: isGlowing ? "scale(1.35)" : "scale(0.85)",
          filter: "blur(14px)",
          transition: "all 0.5s ease-out",
          pointerEvents: "none",
          animation: isGlowing ? "goldenHaloPulse 1.8s infinite ease-in-out" : "none",
        }}
      />

      {/* Main Luxury Baroque Cartouche SVG */}
      <svg
        viewBox="0 0 130 165"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          filter: isPressed
            ? "drop-shadow(0 4px 8px rgba(0,0,0,0.5)) drop-shadow(0 0 10px rgba(197, 160, 89, 0.4))"
            : "drop-shadow(0 16px 32px rgba(15, 20, 15, 0.45)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.25)) drop-shadow(0 0 18px rgba(197, 160, 89, 0.35))",
          transition: "filter 0.3s ease",
        }}
      >
        <defs>
          {/* Antique Gold Metallic Foil Gradient */}
          <linearGradient id="foilGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF0D7" />
            <stop offset="20%" stopColor="#DFB758" />
            <stop offset="45%" stopColor="#FFF2D1" />
            <stop offset="70%" stopColor="#9C7221" />
            <stop offset="90%" stopColor="#DDB352" />
            <stop offset="100%" stopColor="#F7E6B8" />
          </linearGradient>

          {/* Deep Gold Shimmer for Borders */}
          <linearGradient id="goldBorderGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8F681C" />
            <stop offset="30%" stopColor="#E2BD63" />
            <stop offset="50%" stopColor="#FFF8E7" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#7A5612" />
          </linearGradient>

          {/* Ivory Textured Paper Gradient Face */}
          <radialGradient id="ivoryPaperGrad" cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#FFFDFB" />
            <stop offset="50%" stopColor="#FAF4EA" />
            <stop offset="85%" stopColor="#F2E8D8" />
            <stop offset="100%" stopColor="#E5D9C5" />
          </radialGradient>

          {/* Deep Embossed Gold Filter */}
          <filter id="goldEmbossEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feOffset in="SourceAlpha" dx="0.5" dy="0.7" result="shadowOffset" />
            <feGaussianBlur in="shadowOffset" stdDeviation="0.35" result="shadowBlur" />
            <feFlood floodColor="#5C4112" floodOpacity="0.85" result="shadowColor" />
            <feComposite in="shadowColor" in2="shadowBlur" operator="in" result="shadow" />

            <feOffset in="SourceAlpha" dx="-0.4" dy="-0.4" result="lightOffset" />
            <feGaussianBlur in="lightOffset" stdDeviation="0.3" result="lightBlur" />
            <feFlood floodColor="#FFFFFF" floodOpacity="0.95" result="lightColor" />
            <feComposite in="lightColor" in2="lightBlur" operator="in" result="highlight" />

            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="highlight" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Paper Grain Pattern */}
          <pattern id="cartoucheGrain" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.5" fill="#AA7C26" opacity="0.12" />
            <circle cx="30" cy="20" r="0.4" fill="#AA7C26" opacity="0.1" />
            <circle cx="20" cy="35" r="0.6" fill="#AA7C26" opacity="0.12" />
          </pattern>
        </defs>

        {/* ==================== OUTSIDE 3D PAPER BEVEL LAYER ==================== */}
        {/* Outer Baroque Cartouche Plaque Silhouette (matches reference image) */}
        <path
          d="M 65,4 
             C 71,4 77,8 83,9 C 87,4 93,5 98,9 C 102,13 102,19 106,23 C 111,26 117,28 119,34 C 122,40 119,47 122,53 C 126,60 128,68 126,76 C 128,84 126,92 122,99 C 119,105 122,112 119,118 C 117,124 111,126 106,129 C 102,133 102,139 98,143 C 93,147 87,148 83,143 C 77,144 71,148 65,148 C 59,148 53,144 47,143 C 43,148 37,147 32,143 C 28,139 28,133 24,129 C 19,126 13,124 11,118 C 8,112 11,105 8,99 C 4,92 2,84 4,76 C 2,68 4,60 8,53 C 11,47 8,40 11,34 C 13,28 19,26 24,23 C 28,19 28,13 32,9 C 37,5 43,4 47,9 C 53,8 59,4 65,4 Z"
          fill="#443210"
          transform="translate(0, 2)"
          opacity="0.4"
        />

        {/* Main Gold Outer Rim */}
        <path
          d="M 65,4 
             C 71,4 77,8 83,9 C 87,4 93,5 98,9 C 102,13 102,19 106,23 C 111,26 117,28 119,34 C 122,40 119,47 122,53 C 126,60 128,68 126,76 C 128,84 126,92 122,99 C 119,105 122,112 119,118 C 117,124 111,126 106,129 C 102,133 102,139 98,143 C 93,147 87,148 83,143 C 77,144 71,148 65,148 C 59,148 53,144 47,143 C 43,148 37,147 32,143 C 28,139 28,133 24,129 C 19,126 13,124 11,118 C 8,112 11,105 8,99 C 4,92 2,84 4,76 C 2,68 4,60 8,53 C 11,47 8,40 11,34 C 13,28 19,26 24,23 C 28,19 28,13 32,9 C 37,5 43,4 47,9 C 53,8 59,4 65,4 Z"
          fill="url(#foilGoldGrad)"
          stroke="url(#goldBorderGrad)"
          strokeWidth="1.2"
        />

        {/* Ivory Cotton Paper Face */}
        <path
          d="M 65,7 
             C 70,7 75,10 81,11 C 85,7 90,8 95,11 C 98,15 98,20 102,24 C 107,27 112,28 114,34 C 117,39 114,46 117,51 C 120,58 122,65 120,76 C 122,87 120,94 117,101 C 114,106 117,113 114,118 C 112,124 107,125 102,128 C 98,132 98,137 95,141 C 90,144 85,145 81,141 C 75,142 70,145 65,145 C 60,145 55,142 49,141 C 45,145 40,144 35,141 C 32,137 32,132 28,128 C 23,125 18,124 16,118 C 13,113 16,106 13,101 C 10,94 8,87 10,76 C 8,65 10,58 13,51 C 16,46 13,39 16,34 C 18,28 23,27 28,24 C 32,20 32,15 35,11 C 40,8 45,7 49,11 C 55,10 60,7 65,7 Z"
          fill="url(#ivoryPaperGrad)"
        />

        {/* Paper Grain Overlay */}
        <path
          d="M 65,7 
             C 70,7 75,10 81,11 C 85,7 90,8 95,11 C 98,15 98,20 102,24 C 107,27 112,28 114,34 C 117,39 114,46 117,51 C 120,58 122,65 120,76 C 122,87 120,94 117,101 C 114,106 117,113 114,118 C 112,124 107,125 102,128 C 98,132 98,137 95,141 C 90,144 85,145 81,141 C 75,142 70,145 65,145 C 60,145 55,142 49,141 C 45,145 40,144 35,141 C 32,137 32,132 28,128 C 23,125 18,124 16,118 C 13,113 16,106 13,101 C 10,94 8,87 10,76 C 8,65 10,58 13,51 C 16,46 13,39 16,34 C 18,28 23,27 28,24 C 32,20 32,15 35,11 C 40,8 45,7 49,11 C 55,10 60,7 65,7 Z"
          fill="url(#cartoucheGrain)"
          pointerEvents="none"
        />

        {/* ==================== INNER BAROQUE FILIGREE SCROLLWORK ==================== */}
        {/* Fine Inner Scalloped Gold Framing Line */}
        <path
          d="M 65,12 
             C 69,12 73,15 78,16 C 82,12 86,13 90,16 C 93,19 93,24 97,27 C 101,29 105,31 107,35 C 110,40 107,45 110,49 C 113,55 115,62 113,76 C 115,90 113,97 110,103 C 107,107 110,112 107,117 C 105,121 101,123 97,125 C 93,128 93,133 90,136 C 86,139 82,140 78,136 C 73,137 69,140 65,140 C 61,140 57,137 52,136 C 48,140 44,139 40,136 C 37,133 37,128 33,125 C 29,123 25,121 23,117 C 20,112 23,107 20,103 C 17,97 15,90 17,76 C 15,62 17,55 20,49 C 23,45 20,40 23,35 C 25,31 29,29 33,27 C 37,24 37,19 40,16 C 44,13 48,12 52,16 C 57,15 61,12 65,12 Z"
          fill="none"
          stroke="url(#foilGoldGrad)"
          strokeWidth="1.1"
          opacity="0.9"
        />

        {/* Delicate Corner Filigree Flourishes in Gold */}
        {/* Top-Left Baroque Flourish */}
        <path
          d="M 38,28 C 42,22 49,20 54,23 C 50,26 44,28 40,34 C 36,31 34,25 38,28 Z"
          fill="url(#foilGoldGrad)"
          opacity="0.85"
        />
        <circle cx="48" cy="24" r="1.3" fill="url(#foilGoldGrad)" />

        {/* Top-Right Baroque Flourish */}
        <path
          d="M 92,28 C 88,22 81,20 76,23 C 80,26 86,28 90,34 C 94,31 96,25 92,28 Z"
          fill="url(#foilGoldGrad)"
          opacity="0.85"
        />
        <circle cx="82" cy="24" r="1.3" fill="url(#foilGoldGrad)" />

        {/* Bottom-Left Baroque Flourish */}
        <path
          d="M 38,124 C 42,130 49,132 54,129 C 50,126 44,124 40,118 C 36,121 34,127 38,124 Z"
          fill="url(#foilGoldGrad)"
          opacity="0.85"
        />
        <circle cx="48" cy="128" r="1.3" fill="url(#foilGoldGrad)" />

        {/* Bottom-Right Baroque Flourish */}
        <path
          d="M 92,124 C 88,130 81,132 76,129 C 80,126 86,124 90,118 C 94,121 96,127 92,124 Z"
          fill="url(#foilGoldGrad)"
          opacity="0.85"
        />
        <circle cx="82" cy="128" r="1.3" fill="url(#foilGoldGrad)" />

        {/* ==================== CENTER BOTANICAL VINE & TYPOGRAPHY ==================== */}
        {/* Top Vertical Floral Stem (Matching reference video exactly!) */}
        <g stroke="url(#foilGoldGrad)" strokeWidth="1" fill="none" strokeLinecap="round">
          <line x1="65" y1="26" x2="65" y2="58" />
          {/* Stem Leaves */}
          <path d="M 65,33 Q 60,30 58,34 Q 62,36 65,34" fill="url(#foilGoldGrad)" stroke="none" />
          <path d="M 65,33 Q 70,30 72,34 Q 68,36 65,34" fill="url(#foilGoldGrad)" stroke="none" />
          <path d="M 65,42 Q 59,39 57,44 Q 61,46 65,43" fill="url(#foilGoldGrad)" stroke="none" />
          <path d="M 65,42 Q 71,39 73,44 Q 69,46 65,43" fill="url(#foilGoldGrad)" stroke="none" />
          <path d="M 65,51 Q 61,49 59,53 Q 63,54 65,52" fill="url(#foilGoldGrad)" stroke="none" />
          <path d="M 65,51 Q 69,49 71,53 Q 67,54 65,52" fill="url(#foilGoldGrad)" stroke="none" />
          {/* Top Bud */}
          <circle cx="65" cy="24" r="1.6" fill="url(#foilGoldGrad)" stroke="none" />
        </g>

        {/* Center Main Text "TAP TO OPEN" in Majestic Gold Roman Serif */}
        <g filter="url(#goldEmbossEffect)">
          <text
            x="65"
            y="74"
            textAnchor="middle"
            fill="#5E4314"
            fontFamily="'Cinzel', serif"
            fontSize="10"
            fontWeight="700"
            letterSpacing="3"
          >
            TAP TO
          </text>
          <text
            x="65"
            y="87"
            textAnchor="middle"
            fill="#5E4314"
            fontFamily="'Cinzel', serif"
            fontSize="10"
            fontWeight="700"
            letterSpacing="3"
          >
            OPEN
          </text>
        </g>

        {/* Bottom Vertical Floral Stem (Symmetrical to top) */}
        <g stroke="url(#foilGoldGrad)" strokeWidth="1" fill="none" strokeLinecap="round">
          <line x1="65" y1="94" x2="65" y2="126" />
          {/* Stem Leaves */}
          <path d="M 65,100 Q 61,102 59,98 Q 63,97 65,99" fill="url(#foilGoldGrad)" stroke="none" />
          <path d="M 65,100 Q 69,102 71,98 Q 67,97 65,99" fill="url(#foilGoldGrad)" stroke="none" />
          <path d="M 65,109 Q 59,112 57,107 Q 61,105 65,108" fill="url(#foilGoldGrad)" stroke="none" />
          <path d="M 65,109 Q 71,112 73,107 Q 69,105 65,108" fill="url(#foilGoldGrad)" stroke="none" />
          <path d="M 65,118 Q 60,121 58,117 Q 62,115 65,117" fill="url(#foilGoldGrad)" stroke="none" />
          <path d="M 65,118 Q 70,121 72,117 Q 68,115 65,117" fill="url(#foilGoldGrad)" stroke="none" />
          {/* Bottom Bud */}
          <circle cx="65" cy="128" r="1.6" fill="url(#foilGoldGrad)" stroke="none" />
        </g>
      </svg>
    </div>
  );
}
