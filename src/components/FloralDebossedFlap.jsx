import React from "react";

export default function FloralDebossedFlap({ side = "left" }) {
  const isLeft = side === "left";

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        [isLeft ? "left" : "right"]: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
        transform: isLeft ? "none" : "scaleX(-1)",
      }}
    >
      {/* SVG Blind Debossing / Letterpress Botanical Lace */}
      <svg
        viewBox="0 0 200 600"
        preserveAspectRatio="xMinYMid meet"
        style={{
          width: "100%",
          height: "100%",
          filter: "drop-shadow(1px 1px 0.5px rgba(255,255,255,0.9)) drop-shadow(-0.8px -0.8px 0.5px rgba(160, 140, 130, 0.35))",
          opacity: 0.65,
        }}
      >
        <g fill="none" stroke="#C8B8AC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Flowing botanical vine running along the edge */}
          <path d="M 25,20 C 35,70 15,120 30,170 C 45,220 20,270 35,320 C 50,370 25,420 40,470 C 55,520 30,570 45,600" />
          <path d="M 15,40 C 22,90 8,140 18,190 C 28,240 12,290 22,340 C 32,390 18,440 28,490 C 38,540 20,580 30,600" opacity="0.5" strokeDasharray="3,3" />

          {/* Rose Buds & Flowers */}
          {/* Flower 1 */}
          <g transform="translate(30, 90) scale(0.9)">
            <circle cx="0" cy="0" r="10" strokeWidth="1" />
            <path d="M -6,-4 C -2,-8 4,-8 8,-4 C 10,2 6,8 0,10 C -6,8 -10,2 -6,-4 Z" />
            <path d="M -3,-2 C 0,-4 3,-4 4,-2 C 5,2 3,5 0,6 C -3,5 -5,2 -3,-2 Z" />
            {/* Leaves */}
            <path d="M 10,-4 C 18,-10 24,-6 26,2 C 20,4 14,2 10,-4 Z" fill="rgba(200, 184, 172, 0.15)" />
            <path d="M -8,8 C -16,14 -22,10 -24,2 C -18,0 -12,2 -8,8 Z" fill="rgba(200, 184, 172, 0.15)" />
          </g>

          {/* Flower 2 */}
          <g transform="translate(38, 240) scale(1.1)">
            <circle cx="0" cy="0" r="12" strokeWidth="1" />
            <path d="M -8,-5 C -3,-10 5,-10 10,-5 C 12,3 7,10 0,12 C -7,10 -12,3 -8,-5 Z" />
            <path d="M -4,-2 C 0,-5 4,-5 5,-2 C 6,3 4,6 0,7 C -4,6 -6,3 -4,-2 Z" />
            <path d="M 12,-6 C 22,-14 30,-8 32,2 C 24,5 16,3 12,-6 Z" fill="rgba(200, 184, 172, 0.15)" />
            <path d="M -10,10 C -20,18 -28,12 -30,2 C -22,0 -15,3 -10,10 Z" fill="rgba(200, 184, 172, 0.15)" />
          </g>

          {/* Flower 3 */}
          <g transform="translate(28, 390) scale(0.85)">
            <circle cx="0" cy="0" r="10" strokeWidth="1" />
            <path d="M -6,-4 C -2,-8 4,-8 8,-4 C 10,2 6,8 0,10 C -6,8 -10,2 -6,-4 Z" />
            <path d="M 10,-3 C 18,-8 22,-4 24,3 C 18,4 13,2 10,-3 Z" fill="rgba(200, 184, 172, 0.15)" />
            <path d="M -8,6 C -15,12 -20,8 -22,1 C -16,0 -11,2 -8,6 Z" fill="rgba(200, 184, 172, 0.15)" />
          </g>

          {/* Flower 4 */}
          <g transform="translate(42, 510) scale(1)">
            <circle cx="0" cy="0" r="11" strokeWidth="1" />
            <path d="M -7,-4 C -2,-9 5,-9 9,-4 C 11,2 6,9 0,11 C -6,9 -11,2 -7,-4 Z" />
            <path d="M 11,-5 C 20,-12 26,-7 28,2 C 22,4 15,2 11,-5 Z" fill="rgba(200, 184, 172, 0.15)" />
            <path d="M -9,9 C -18,15 -24,10 -26,2 C -19,0 -13,2 -9,9 Z" fill="rgba(200, 184, 172, 0.15)" />
          </g>

          {/* Intermediate Leaf Pairs along vine */}
          {[60, 140, 180, 290, 340, 440, 470, 560].map((y, i) => (
            <g key={i} transform={`translate(${20 + (i % 3) * 6}, ${y})`}>
              <path
                d="M 0,0 C 8,-6 16,-4 18,2 C 12,5 6,4 0,0 Z"
                fill="rgba(200, 184, 172, 0.12)"
              />
              <path
                d="M 0,0 C -8,-6 -16,-4 -18,2 C -12,5 -6,4 0,0 Z"
                fill="rgba(200, 184, 172, 0.12)"
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
