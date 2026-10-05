import React from "react";

export default function OrnateGate({ isOpen, isRibbonUntied, onUntieRibbon }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1200px",
        overflow: "hidden",
        pointerEvents: isOpen ? "none" : "auto",
        transition: "opacity 0.8s ease 0.8s",
        opacity: isOpen ? 0 : 1,
      }}
    >
      {/* Background Soft Palace Garden Silhouette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 40%, rgba(255, 253, 249, 0.95) 0%, rgba(245, 235, 225, 0.98) 100%)",
        }}
      />

      {/* Ornate Arch Top & Stone Pillars */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        {/* Left Stone Pillar with Floral Vines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "36px",
            height: "100%",
            background: "linear-gradient(to right, #E2D7C8, #F3ECE2, #E8DFD3)",
            borderRight: "2px solid rgba(197, 160, 89, 0.4)",
            boxShadow: "2px 0 10px rgba(0,0,0,0.08)",
          }}
        >
          {/* Pillar capital */}
          <div
            style={{
              width: "48px",
              height: "28px",
              background: "#E8DFD3",
              borderBottom: "2px solid #C5A059",
              borderRadius: "0 0 8px 0",
            }}
          />
        </div>

        {/* Right Stone Pillar with Floral Vines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "36px",
            height: "100%",
            background: "linear-gradient(to left, #E2D7C8, #F3ECE2, #E8DFD3)",
            borderLeft: "2px solid rgba(197, 160, 89, 0.4)",
            boxShadow: "-2px 0 10px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "28px",
              background: "#E8DFD3",
              borderBottom: "2px solid #C5A059",
              borderRadius: "0 0 0 8px",
              marginLeft: "-12px",
            }}
          />
        </div>

        {/* Top Ornate Arch Header */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "36px",
            right: "36px",
            height: "90px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <svg viewBox="0 0 340 90" style={{ width: "100%", height: "100%" }}>
            <path
              d="M 10,80 Q 170,-10 330,80"
              fill="none"
              stroke="#5A4E46"
              strokeWidth="4"
            />
            <path
              d="M 20,80 Q 170,10 320,80"
              fill="none"
              stroke="#C5A059"
              strokeWidth="2"
            />
            {/* Arch finial crest */}
            <circle cx="170" cy="18" r="8" fill="#C5A059" />
            <path
              d="M 170,6 L 174,18 L 170,24 L 166,18 Z"
              fill="#916E2E"
            />
          </svg>
        </div>
      </div>

      {/* Double Wrought-Iron Gate Doors Container */}
      <div
        style={{
          position: "relative",
          width: "calc(100% - 72px)",
          height: "76%",
          display: "flex",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Left Gate Door */}
        <div
          style={{
            width: "50%",
            height: "100%",
            transformOrigin: "left center",
            transform: isOpen ? "rotateY(-105deg)" : "rotateY(0deg)",
            transition: "transform 1.3s cubic-bezier(0.25, 1, 0.5, 1)",
            position: "relative",
            background: "rgba(255, 255, 255, 0.05)",
            boxShadow: isOpen ? "none" : "5px 0 15px rgba(0,0,0,0.1)",
          }}
        >
          <svg
            viewBox="0 0 160 480"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            {/* Outer Frame */}
            <rect
              x="4"
              y="10"
              width="152"
              height="460"
              rx="6"
              fill="none"
              stroke="#4A4039"
              strokeWidth="5"
            />
            <rect
              x="12"
              y="18"
              width="136"
              height="444"
              rx="4"
              fill="none"
              stroke="#C5A059"
              strokeWidth="2"
            />

            {/* Vertical Bars */}
            {[34, 56, 78, 100, 122].map((x) => (
              <line
                key={x}
                x1={x}
                y1="22"
                x2={x}
                y2="456"
                stroke="#5A4E46"
                strokeWidth="2.5"
              />
            ))}

            {/* Gold Finial Spearheads */}
            {[34, 56, 78, 100, 122].map((x) => (
              <path
                key={x}
                d={`M ${x},8 L ${x + 4},18 L ${x - 4},18 Z`}
                fill="#C5A059"
              />
            ))}

            {/* Ornate Royal Scrollwork */}
            <path
              d="M 20,80 C 60,60 100,100 140,80 C 100,120 60,120 20,160"
              fill="none"
              stroke="#C5A059"
              strokeWidth="2.5"
            />
            <circle cx="80" cy="110" r="14" fill="none" stroke="#C5A059" strokeWidth="2" />
            <circle cx="80" cy="110" r="6" fill="#C5A059" />

            <path
              d="M 20,380 C 60,340 100,400 140,360 C 100,420 60,420 20,440"
              fill="none"
              stroke="#C5A059"
              strokeWidth="2.5"
            />
            <circle cx="80" cy="390" r="14" fill="none" stroke="#C5A059" strokeWidth="2" />
            <circle cx="80" cy="390" r="6" fill="#C5A059" />

            {/* Center Lock Medallion Half */}
            <path
              d="M 148,220 C 130,220 130,260 148,260"
              fill="#C5A059"
              stroke="#916E2E"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Right Gate Door */}
        <div
          style={{
            width: "50%",
            height: "100%",
            transformOrigin: "right center",
            transform: isOpen ? "rotateY(105deg)" : "rotateY(0deg)",
            transition: "transform 1.3s cubic-bezier(0.25, 1, 0.5, 1)",
            position: "relative",
            background: "rgba(255, 255, 255, 0.05)",
            boxShadow: isOpen ? "none" : "-5px 0 15px rgba(0,0,0,0.1)",
          }}
        >
          <svg
            viewBox="0 0 160 480"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            {/* Outer Frame */}
            <rect
              x="4"
              y="10"
              width="152"
              height="460"
              rx="6"
              fill="none"
              stroke="#4A4039"
              strokeWidth="5"
            />
            <rect
              x="12"
              y="18"
              width="136"
              height="444"
              rx="4"
              fill="none"
              stroke="#C5A059"
              strokeWidth="2"
            />

            {/* Vertical Bars */}
            {[34, 56, 78, 100, 122].map((x) => (
              <line
                key={x}
                x1={x}
                y1="22"
                x2={x}
                y2="456"
                stroke="#5A4E46"
                strokeWidth="2.5"
              />
            ))}

            {/* Gold Finial Spearheads */}
            {[34, 56, 78, 100, 122].map((x) => (
              <path
                key={x}
                d={`M ${x},8 L ${x + 4},18 L ${x - 4},18 Z`}
                fill="#C5A059"
              />
            ))}

            {/* Ornate Royal Scrollwork */}
            <path
              d="M 140,80 C 100,60 60,100 20,80 C 60,120 100,120 140,160"
              fill="none"
              stroke="#C5A059"
              strokeWidth="2.5"
            />
            <circle cx="80" cy="110" r="14" fill="none" stroke="#C5A059" strokeWidth="2" />
            <circle cx="80" cy="110" r="6" fill="#C5A059" />

            <path
              d="M 140,380 C 100,340 60,400 20,360 C 60,420 100,420 140,440"
              fill="none"
              stroke="#C5A059"
              strokeWidth="2.5"
            />
            <circle cx="80" cy="390" r="14" fill="none" stroke="#C5A059" strokeWidth="2" />
            <circle cx="80" cy="390" r="6" fill="#C5A059" />

            {/* Center Lock Medallion Half */}
            <path
              d="M 12,220 C 30,220 30,260 12,260"
              fill="#C5A059"
              stroke="#916E2E"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Satin Silk Ribbon Tied Across the Gate */}
        <div
          onClick={onUntieRibbon}
          style={{
            position: "absolute",
            top: "48%",
            left: "-18px",
            right: "-18px",
            height: "70px",
            zIndex: 30,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: isRibbonUntied
              ? "translateY(-50%) scale(1.15)"
              : "translateY(-50%) scale(1)",
            opacity: isRibbonUntied ? 0 : 1,
            pointerEvents: isRibbonUntied ? "none" : "auto",
          }}
        >
          {/* Horizontal Satin Ribbon Band Left */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: "50%",
              height: "26px",
              background:
                "linear-gradient(to bottom, #F7EBE8 0%, #FAF0EE 30%, #EBD5D0 70%, #D8BEB8 100%)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              borderBottom: "1px solid rgba(197, 160, 89, 0.4)",
            }}
          />

          {/* Horizontal Satin Ribbon Band Right */}
          <div
            style={{
              position: "absolute",
              right: 0,
              left: "50%",
              height: "26px",
              background:
                "linear-gradient(to bottom, #F7EBE8 0%, #FAF0EE 30%, #EBD5D0 70%, #D8BEB8 100%)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              borderBottom: "1px solid rgba(197, 160, 89, 0.4)",
            }}
          />

          {/* Ornate Satin Ribbon Bow & Knot */}
          <div
            style={{
              position: "relative",
              zIndex: 35,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              filter: "drop-shadow(0 8px 18px rgba(90, 70, 65, 0.28))",
            }}
          >
            {/* SVG Bow loops & tails */}
            <svg width="110" height="74" viewBox="0 0 110 74">
              {/* Left loop */}
              <path
                d="M 55,32 C 30,10 10,20 18,36 C 26,48 45,36 55,34 Z"
                fill="url(#ribbonGrad)"
                stroke="#D8BEB8"
                strokeWidth="1"
              />
              {/* Right loop */}
              <path
                d="M 55,32 C 80,10 100,20 92,36 C 84,48 65,36 55,34 Z"
                fill="url(#ribbonGrad)"
                stroke="#D8BEB8"
                strokeWidth="1"
              />
              {/* Ribbon Tails */}
              <path
                d="M 50,36 C 45,55 35,68 30,72 L 40,68 L 48,70 C 52,55 52,40 50,36 Z"
                fill="url(#ribbonGrad)"
              />
              <path
                d="M 60,36 C 65,55 75,68 80,72 L 70,68 L 62,70 C 58,55 58,40 60,36 Z"
                fill="url(#ribbonGrad)"
              />
              {/* Center Knot with Golden Ring */}
              <ellipse cx="55" cy="33" rx="11" ry="9" fill="#F4E4E0" stroke="#C5A059" strokeWidth="1.5" />
              <circle cx="55" cy="33" r="4" fill="#C5A059" />

              <defs>
                <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF7F5" />
                  <stop offset="45%" stopColor="#F7E6E2" />
                  <stop offset="100%" stopColor="#E2C7C0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Interactive Prompt Badge */}
            <div
              style={{
                marginTop: "-4px",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(6px)",
                border: "1px solid #C5A059",
                borderRadius: "999px",
                padding: "4px 12px",
                boxShadow: "0 4px 12px rgba(197, 160, 89, 0.3)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "9px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  color: "#916E2E",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                ✦ Tap to Untie &amp; Enter ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
