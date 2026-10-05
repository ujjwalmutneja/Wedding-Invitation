import React from "react";

export default function RealisticDebossedLace() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* SVG Letterpress Blind-Debossing Lighting Filter */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="subtleBlindDeboss" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
            <feOffset in="blur" dx="-0.6" dy="-0.6" result="lightOffset" />
            <feFlood floodColor="#FFFFFF" floodOpacity="0.75" result="lightColor" />
            <feComposite in="lightColor" in2="lightOffset" operator="in" result="highlight" />

            <feOffset in="blur" dx="0.6" dy="0.6" result="shadowOffset" />
            <feFlood floodColor="#9C9286" floodOpacity="0.45" result="shadowColor" />
            <feComposite in="shadowColor" in2="shadowOffset" operator="in" result="shadow" />

            <feMerge>
              <feMergeNode in="highlight" />
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* LEFT SIDE SUBTLE DEBOSSED BOTANICAL PATTERN */}
      <svg
        viewBox="0 0 160 700"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "44%",
          height: "100%",
          opacity: 0.65,
          filter: "url(#subtleBlindDeboss)",
        }}
      >
        <g fill="none" stroke="#D0C8BE" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          {/* Delicate vertical botanical vine */}
          <path d="M 24,40 C 38,100 18,160 34,220 C 50,280 22,340 36,400 C 50,460 24,520 38,580 C 48,630 28,660 32,700" />

          {/* Small 5-Petal Florets along vine */}
          {[120, 260, 420, 560].map((y, idx) => (
            <g key={idx} transform={`translate(${idx % 2 === 0 ? 44 : 36}, ${y}) scale(0.9)`}>
              <circle cx="0" cy="0" r="10" fill="#EAE6DE" stroke="#C5BEB3" strokeWidth="0.8" />
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <path
                  key={i}
                  d={`M 0,0 C ${Math.cos((deg * Math.PI) / 180) * 12},${
                    Math.sin((deg * Math.PI) / 180) * 12
                  } ${Math.cos(((deg + 36) * Math.PI) / 180) * 15},${
                    Math.sin(((deg + 36) * Math.PI) / 180) * 15
                  } 0,0`}
                  fill="#F1EDE5"
                  stroke="#C5BEB3"
                  strokeWidth="0.7"
                />
              ))}
              <circle cx="0" cy="0" r="2.8" fill="#B5ADA2" />
            </g>
          ))}

          {/* Delicate Leaves */}
          {[70, 170, 210, 310, 360, 470, 510, 620].map((y, i) => (
            <g key={i} transform={`translate(${26 + (i % 3) * 6}, ${y}) rotate(${i % 2 === 0 ? 30 : -25})`}>
              <path
                d="M 0,0 C 12,-6 20,-3 22,5 C 14,8 5,6 0,0 Z"
                fill="#E8E4DC"
                stroke="#C5BEB3"
                strokeWidth="0.8"
              />
            </g>
          ))}
        </g>
      </svg>

      {/* RIGHT SIDE SUBTLE DEBOSSED BOTANICAL PATTERN (MIRRORED) */}
      <svg
        viewBox="0 0 160 700"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "44%",
          height: "100%",
          opacity: 0.65,
          transform: "scaleX(-1)",
          filter: "url(#subtleBlindDeboss)",
        }}
      >
        <g fill="none" stroke="#D0C8BE" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 24,40 C 38,100 18,160 34,220 C 50,280 22,340 36,400 C 50,460 24,520 38,580 C 48,630 28,660 32,700" />

          {[120, 260, 420, 560].map((y, idx) => (
            <g key={idx} transform={`translate(${idx % 2 === 0 ? 44 : 36}, ${y}) scale(0.9)`}>
              <circle cx="0" cy="0" r="10" fill="#EAE6DE" stroke="#C5BEB3" strokeWidth="0.8" />
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <path
                  key={i}
                  d={`M 0,0 C ${Math.cos((deg * Math.PI) / 180) * 12},${
                    Math.sin((deg * Math.PI) / 180) * 12
                  } ${Math.cos(((deg + 36) * Math.PI) / 180) * 15},${
                    Math.sin(((deg + 36) * Math.PI) / 180) * 15
                  } 0,0`}
                  fill="#F1EDE5"
                  stroke="#C5BEB3"
                  strokeWidth="0.7"
                />
              ))}
              <circle cx="0" cy="0" r="2.8" fill="#B5ADA2" />
            </g>
          ))}

          {[70, 170, 210, 310, 360, 470, 510, 620].map((y, i) => (
            <g key={i} transform={`translate(${26 + (i % 3) * 6}, ${y}) rotate(${i % 2 === 0 ? 30 : -25})`}>
              <path
                d="M 0,0 C 12,-6 20,-3 22,5 C 14,8 5,6 0,0 Z"
                fill="#E8E4DC"
                stroke="#C5BEB3"
                strokeWidth="0.8"
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
