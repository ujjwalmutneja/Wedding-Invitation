import React from "react";

export default function WatercolorGardenGate({ isOpen, isRibbonUntied, onUntieRibbon }) {
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
        transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
        opacity: isOpen ? 0 : 1,
      }}
    >
      {/* Background Soft Watercolor Sky & Distant Mountain Garden Horizon */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, #DCE6EB 0%, #E8EFF2 30%, #F5EDE4 70%, #EADDCF 100%)",
        }}
      >
        {/* Soft Watercolor Clouds & Distant Greenery */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: 0,
            right: 0,
            height: "40%",
            backgroundImage:
              "radial-gradient(ellipse at 30% 50%, rgba(180, 200, 185, 0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(210, 195, 180, 0.4) 0%, transparent 60%)",
          }}
        />

        {/* Stone Terrace Ground Paving at base */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background:
              "linear-gradient(to top, #D6C8B8 0%, #E4D8C9 40%, rgba(244, 237, 228, 0) 100%)",
            borderTop: "1px solid rgba(197, 160, 89, 0.2)",
          }}
        />
      </div>

      {/* =========================================================================
          TOP CASCADING WATERCOLOR BOTANICALS & ARCHED SURROUND
      ========================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "140px",
          zIndex: 12,
          pointerEvents: "none",
        }}
      >
        <svg viewBox="0 0 400 140" style={{ width: "100%", height: "100%", display: "block" }}>
          <defs>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7E9680" />
              <stop offset="100%" stopColor="#A4B8A6" />
            </linearGradient>
            <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAD4DC" />
              <stop offset="100%" stopColor="#E2A6B2" />
            </linearGradient>
          </defs>

          {/* Draping Eucalyptus & Rose Branches from above */}
          <g opacity="0.9">
            {/* Top Swag Arch Vines */}
            <path
              d="M -20,0 Q 200,80 420,0"
              fill="none"
              stroke="#6E8470"
              strokeWidth="4"
            />
            <path
              d="M -10,10 Q 200,100 410,10"
              fill="none"
              stroke="#8EA490"
              strokeWidth="2.5"
            />

            {/* Hanging Leaf Clusters */}
            {[
              { x: 30, y: 35, s: 0.9 },
              { x: 80, y: 55, s: 1.1 },
              { x: 130, y: 70, s: 1.2 },
              { x: 180, y: 75, s: 1.3 },
              { x: 230, y: 72, s: 1.25 },
              { x: 280, y: 60, s: 1.1 },
              { x: 340, y: 40, s: 0.95 },
              { x: 380, y: 25, s: 0.8 },
            ].map((pt, i) => (
              <g key={i} transform={`translate(${pt.x}, ${pt.y}) scale(${pt.s})`}>
                <path
                  d="M 0,0 C 8,14 6,28 0,38 C -6,28 -8,14 0,0 Z"
                  fill="url(#leafGrad)"
                />
                <path
                  d="M 5,8 C 16,16 18,28 12,36 C 6,30 2,20 5,8 Z"
                  fill="#8EA490"
                  opacity="0.85"
                />
                <path
                  d="M -5,8 C -16,16 -18,28 -12,36 C -6,30 -2,20 -5,8 Z"
                  fill="#7E9680"
                  opacity="0.85"
                />
              </g>
            ))}

            {/* Soft Pastel Rose Blossoms nestled in foliage */}
            {[
              { x: 70, y: 38, r: 11 },
              { x: 150, y: 56, r: 13 },
              { x: 200, y: 62, r: 14 },
              { x: 260, y: 52, r: 12 },
              { x: 320, y: 32, r: 10 },
            ].map((rose, i) => (
              <g key={i} transform={`translate(${rose.x}, ${rose.y})`}>
                <circle cx="0" cy="0" r={rose.r} fill="url(#roseGrad)" />
                <circle cx="0" cy="0" r={rose.r * 0.65} fill="#FFF0F3" opacity="0.8" />
                <circle cx="-1" cy="-1" r={rose.r * 0.35} fill="#E2A6B2" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* =========================================================================
          LEFT & RIGHT CLASSICAL STONE PILLARS WITH GARDEN URNS
      ========================================================================== */}
      {/* LEFT STONE PILLAR */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "4px",
          width: "48px",
          bottom: 0,
          zIndex: 15,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Carved Stone Urn on Top */}
        <div style={{ width: "46px", height: "48px" }}>
          <svg viewBox="0 0 46 48" style={{ width: "100%", height: "100%" }}>
            {/* Urn leaves & bouquet */}
            <circle cx="23" cy="14" r="14" fill="#A4B8A6" />
            <circle cx="17" cy="10" r="5" fill="#FAD4DC" />
            <circle cx="28" cy="12" r="6" fill="#FAD4DC" />
            {/* Classical Stone Urn / Planter Vase */}
            <path
              d="M 12,20 C 10,26 14,32 19,34 L 19,40 L 14,44 L 32,44 L 27,40 L 27,34 C 32,32 36,26 34,20 Z"
              fill="#D6C8B8"
              stroke="#A89886"
              strokeWidth="1.2"
            />
            <ellipse cx="23" cy="20" rx="11" ry="3" fill="#E8DFD3" stroke="#A89886" strokeWidth="1" />
          </svg>
        </div>

        {/* Stone Pillar Body */}
        <div
          style={{
            width: "36px",
            flex: 1,
            background: "linear-gradient(to right, #C8BAAA, #E4D8CA 30%, #F5ECE0 60%, #C4B6A6 100%)",
            borderRight: "1px solid rgba(140, 120, 105, 0.4)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.6)",
            boxShadow: "3px 0 12px rgba(45, 37, 34, 0.12)",
            position: "relative",
          }}
        >
          {/* Carved panel grooves on pillar */}
          <div
            style={{
              position: "absolute",
              top: "14px",
              bottom: "14px",
              left: "6px",
              right: "6px",
              border: "1px solid rgba(160, 140, 125, 0.35)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      {/* RIGHT STONE PILLAR */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "4px",
          width: "48px",
          bottom: 0,
          zIndex: 15,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Carved Stone Urn on Top */}
        <div style={{ width: "46px", height: "48px" }}>
          <svg viewBox="0 0 46 48" style={{ width: "100%", height: "100%" }}>
            <circle cx="23" cy="14" r="14" fill="#A4B8A6" />
            <circle cx="18" cy="12" r="6" fill="#FAD4DC" />
            <circle cx="29" cy="10" r="5" fill="#FAD4DC" />
            <path
              d="M 12,20 C 10,26 14,32 19,34 L 19,40 L 14,44 L 32,44 L 27,40 L 27,34 C 32,32 36,26 34,20 Z"
              fill="#D6C8B8"
              stroke="#A89886"
              strokeWidth="1.2"
            />
            <ellipse cx="23" cy="20" rx="11" ry="3" fill="#E8DFD3" stroke="#A89886" strokeWidth="1" />
          </svg>
        </div>

        {/* Stone Pillar Body */}
        <div
          style={{
            width: "36px",
            flex: 1,
            background: "linear-gradient(to left, #C8BAAA, #E4D8CA 30%, #F5ECE0 60%, #C4B6A6 100%)",
            borderLeft: "1px solid rgba(140, 120, 105, 0.4)",
            borderRight: "1px solid rgba(255, 255, 255, 0.6)",
            boxShadow: "-3px 0 12px rgba(45, 37, 34, 0.12)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "14px",
              bottom: "14px",
              left: "6px",
              right: "6px",
              border: "1px solid rgba(160, 140, 125, 0.35)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      {/* =========================================================================
          AUTHENTIC WROUGHT-IRON DOUBLE GATE DOORS (SWINGING OUTWARD IN 3D)
      ========================================================================== */}
      <div
        style={{
          position: "relative",
          width: "calc(100% - 90px)",
          height: "82%",
          marginTop: "30px",
          display: "flex",
          transformStyle: "preserve-3d",
          perspective: "1200px",
        }}
      >
        {/* LEFT GATE DOOR */}
        <div
          style={{
            width: "50%",
            height: "100%",
            transformOrigin: "left center",
            transform: isOpen ? "rotateY(-100deg)" : "rotateY(0deg)",
            transition: "transform 1.4s cubic-bezier(0.25, 1, 0.5, 1)",
            position: "relative",
            filter: isOpen ? "none" : "drop-shadow(6px 0 14px rgba(45, 37, 34, 0.22))",
          }}
        >
          <svg
            viewBox="0 0 160 520"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            {/* Arched Top Wrought Iron Frame */}
            <path
              d="M 6,510 L 6,100 Q 60,35 154,65 L 154,510 Z"
              fill="rgba(245, 240, 235, 0.3)"
              stroke="#443932"
              strokeWidth="4"
            />
            {/* Gold inner fillet */}
            <path
              d="M 14,502 L 14,106 Q 62,45 146,73 L 146,502 Z"
              fill="none"
              stroke="#C5A059"
              strokeWidth="1.8"
            />

            {/* Vertical Iron Spindles */}
            {[34, 56, 78, 100, 124].map((x) => (
              <line
                key={x}
                x1={x}
                y1={x === 34 ? 90 : x === 56 ? 78 : x === 78 ? 70 : x === 100 ? 68 : 70}
                x2={x}
                y2="410"
                stroke="#443932"
                strokeWidth="2.2"
              />
            ))}

            {/* Spear Finials on Top of Spindles */}
            {[34, 56, 78, 100, 124].map((x) => {
              const yTop = x === 34 ? 86 : x === 56 ? 74 : x === 78 ? 66 : x === 100 ? 64 : 66;
              return (
                <path
                  key={x}
                  d={`M ${x},${yTop - 14} L ${x + 4},${yTop} L ${x - 4},${yTop} Z`}
                  fill="#C5A059"
                  stroke="#916E2E"
                  strokeWidth="0.8"
                />
              );
            })}

            {/* Classical Ornate Heart & Leaf Scrolls (Top Section) */}
            <path
              d="M 20,150 C 60,110 100,160 140,130 C 100,180 60,180 20,220"
              fill="none"
              stroke="#C5A059"
              strokeWidth="2.2"
            />
            <circle cx="80" cy="155" r="12" fill="none" stroke="#C5A059" strokeWidth="1.8" />
            <circle cx="80" cy="155" r="5" fill="#C5A059" />

            {/* Mid Medallion Scroll */}
            <path
              d="M 20,290 C 70,250 90,320 140,280 C 100,340 50,330 20,360"
              fill="none"
              stroke="#C5A059"
              strokeWidth="2.2"
            />
            <circle cx="80" cy="300" r="14" fill="none" stroke="#C5A059" strokeWidth="2" />
            <circle cx="80" cy="300" r="6" fill="#C5A059" />

            {/* Solid Bottom Kickplate Panel with Floral Emblem */}
            <rect x="14" y="420" width="132" height="82" rx="4" fill="#E8DFD3" stroke="#443932" strokeWidth="2.5" />
            <rect x="22" y="428" width="116" height="66" rx="2" fill="none" stroke="#C5A059" strokeWidth="1.5" />
            <circle cx="80" cy="461" r="16" fill="none" stroke="#C5A059" strokeWidth="1.5" />
            <path d="M 80,451 L 83,461 L 80,471 L 77,461 Z" fill="#C5A059" />

            {/* Center Gate Latch Handle on Right edge of left door */}
            <path
              d="M 146,240 C 132,240 132,270 146,270"
              fill="#C5A059"
              stroke="#916E2E"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        {/* RIGHT GATE DOOR */}
        <div
          style={{
            width: "50%",
            height: "100%",
            transformOrigin: "right center",
            transform: isOpen ? "rotateY(100deg)" : "rotateY(0deg)",
            transition: "transform 1.4s cubic-bezier(0.25, 1, 0.5, 1)",
            position: "relative",
            filter: isOpen ? "none" : "drop-shadow(-6px 0 14px rgba(45, 37, 34, 0.22))",
          }}
        >
          <svg
            viewBox="0 0 160 520"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            {/* Arched Top Wrought Iron Frame */}
            <path
              d="M 154,510 L 154,100 Q 100,35 6,65 L 6,510 Z"
              fill="rgba(245, 240, 235, 0.3)"
              stroke="#443932"
              strokeWidth="4"
            />
            {/* Gold inner fillet */}
            <path
              d="M 146,502 L 146,106 Q 98,45 14,73 L 14,502 Z"
              fill="none"
              stroke="#C5A059"
              strokeWidth="1.8"
            />

            {/* Vertical Iron Spindles */}
            {[36, 60, 82, 104, 126].map((x) => (
              <line
                key={x}
                x1={x}
                y1={x === 126 ? 90 : x === 104 ? 78 : x === 82 ? 70 : x === 60 ? 68 : 70}
                x2={x}
                y2="410"
                stroke="#443932"
                strokeWidth="2.2"
              />
            ))}

            {/* Spear Finials on Top of Spindles */}
            {[36, 60, 82, 104, 126].map((x) => {
              const yTop = x === 126 ? 86 : x === 104 ? 74 : x === 82 ? 66 : x === 60 ? 64 : 66;
              return (
                <path
                  key={x}
                  d={`M ${x},${yTop - 14} L ${x + 4},${yTop} L ${x - 4},${yTop} Z`}
                  fill="#C5A059"
                  stroke="#916E2E"
                  strokeWidth="0.8"
                />
              );
            })}

            {/* Classical Ornate Heart & Leaf Scrolls (Top Section) */}
            <path
              d="M 140,150 C 100,110 60,160 20,130 C 60,180 100,180 140,220"
              fill="none"
              stroke="#C5A059"
              strokeWidth="2.2"
            />
            <circle cx="80" cy="155" r="12" fill="none" stroke="#C5A059" strokeWidth="1.8" />
            <circle cx="80" cy="155" r="5" fill="#C5A059" />

            {/* Mid Medallion Scroll */}
            <path
              d="M 140,290 C 90,250 70,320 20,280 C 60,340 110,330 140,360"
              fill="none"
              stroke="#C5A059"
              strokeWidth="2.2"
            />
            <circle cx="80" cy="300" r="14" fill="none" stroke="#C5A059" strokeWidth="2" />
            <circle cx="80" cy="300" r="6" fill="#C5A059" />

            {/* Solid Bottom Kickplate Panel with Floral Emblem */}
            <rect x="14" y="420" width="132" height="82" rx="4" fill="#E8DFD3" stroke="#443932" strokeWidth="2.5" />
            <rect x="22" y="428" width="116" height="66" rx="2" fill="none" stroke="#C5A059" strokeWidth="1.5" />
            <circle cx="80" cy="461" r="16" fill="none" stroke="#C5A059" strokeWidth="1.5" />
            <path d="M 80,451 L 83,461 L 80,471 L 77,461 Z" fill="#C5A059" />

            {/* Center Gate Latch Handle on Left edge of right door */}
            <path
              d="M 14,240 C 28,240 28,270 14,270"
              fill="#C5A059"
              stroke="#916E2E"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        {/* =========================================================================
            LUXURY SATIN SILK RIBBON & BOW ACROSS THE GATE
        ========================================================================== */}
        <div
          onClick={onUntieRibbon}
          style={{
            position: "absolute",
            top: "52%",
            left: "-28px",
            right: "-28px",
            height: "90px",
            zIndex: 40,
            cursor: isRibbonUntied ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: isRibbonUntied ? "translateY(-50%) scale(1.15)" : "translateY(-50%) scale(1)",
            opacity: isRibbonUntied ? 0 : 1,
            pointerEvents: isRibbonUntied ? "none" : "auto",
          }}
        >
          {/* Left Ribbon Band */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: "50%",
              height: "28px",
              background:
                "linear-gradient(to bottom, #FFF5F2 0%, #F8E5E1 30%, #ECD2CC 70%, #DEC0B8 100%)",
              boxShadow: "0 8px 20px rgba(45, 37, 34, 0.25)",
              borderTop: "1px solid rgba(255,255,255,0.9)",
              borderBottom: "1px solid rgba(197, 160, 89, 0.5)",
            }}
          />

          {/* Right Ribbon Band */}
          <div
            style={{
              position: "absolute",
              right: 0,
              left: "50%",
              height: "28px",
              background:
                "linear-gradient(to bottom, #FFF5F2 0%, #F8E5E1 30%, #ECD2CC 70%, #DEC0B8 100%)",
              boxShadow: "0 8px 20px rgba(45, 37, 34, 0.25)",
              borderTop: "1px solid rgba(255,255,255,0.9)",
              borderBottom: "1px solid rgba(197, 160, 89, 0.5)",
            }}
          />

          {/* Photorealistic Silk Bow & Split Draped Tails */}
          <div
            style={{
              position: "relative",
              zIndex: 45,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              filter: "drop-shadow(0 10px 24px rgba(60, 45, 40, 0.35))",
            }}
          >
            <svg width="130" height="90" viewBox="0 0 130 90">
              <defs>
                <linearGradient id="silkBowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="30%" stopColor="#F9EAE6" />
                  <stop offset="70%" stopColor="#ECCEC7" />
                  <stop offset="100%" stopColor="#D8B5AC" />
                </linearGradient>
                <filter id="silkShadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* Draped Ribbon Tails */}
              <path
                d="M 58,42 C 50,65 38,82 30,88 L 44,82 L 56,84 C 62,68 62,48 58,42 Z"
                fill="url(#silkBowGrad)"
                filter="url(#silkShadow)"
              />
              <path
                d="M 72,42 C 80,65 92,82 100,88 L 86,82 L 74,84 C 68,68 68,48 72,42 Z"
                fill="url(#silkBowGrad)"
                filter="url(#silkShadow)"
              />

              {/* Left Satin Bow Loop */}
              <path
                d="M 65,36 C 36,12 12,24 22,44 C 32,58 54,42 65,39 Z"
                fill="url(#silkBowGrad)"
                stroke="#ECD2CC"
                strokeWidth="1"
              />
              {/* Left Inner Crease */}
              <path d="M 65,36 C 44,28 32,36 34,42" fill="none" stroke="#D8B5AC" strokeWidth="1.2" opacity="0.7" />

              {/* Right Satin Bow Loop */}
              <path
                d="M 65,36 C 94,12 118,24 108,44 C 98,58 76,42 65,39 Z"
                fill="url(#silkBowGrad)"
                stroke="#ECD2CC"
                strokeWidth="1"
              />
              {/* Right Inner Crease */}
              <path d="M 65,36 C 86,28 98,36 96,42" fill="none" stroke="#D8B5AC" strokeWidth="1.2" opacity="0.7" />

              {/* Center Knot with Pearl/Gold Filigree Ring */}
              <ellipse cx="65" cy="38" rx="13" ry="10" fill="#FDF3F0" stroke="#C5A059" strokeWidth="1.8" />
              <ellipse cx="65" cy="38" rx="7" ry="5" fill="#E8D2CB" />
              <circle cx="65" cy="38" r="3" fill="#C5A059" />
            </svg>

            {/* Interactive Call to Action Button */}
            <div
              style={{
                marginTop: "-2px",
                background: "rgba(255, 255, 255, 0.96)",
                backdropFilter: "blur(8px)",
                border: "1px solid #C5A059",
                borderRadius: "999px",
                padding: "6px 16px",
                boxShadow: "0 6px 18px rgba(197, 160, 89, 0.35)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  color: "#916E2E",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                ✦ TAP TO UNTIE &amp; ENTER ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
