import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";
import SageMedallionSeal from "./SageMedallionSeal";
import NightReceptionScene from "./NightReceptionScene";
import { weddingData } from "../data/weddingData";
import { audioEngine } from "../utils/audioEngine";

export default function EnvelopeOpeningExperience({ onOpened, onReplay, onScrollToNext }) {
  const { couple } = weddingData;

  // Animation Sequence States:
  // 'closed' -> 'pressed' -> 'glowing' -> 'opening' -> 'curtains_parting' -> 'revealed'
  const [animStage, setAnimStage] = useState("closed");
  const isAnimatingRef = useRef(false);

  // Background golden dust particles for closed folder state
  const [particles] = useState(() =>
    Array.from({ length: 16 }, (_, i) => ({
      id: i,
      x: Math.random() * 92 + 4,
      y: Math.random() * 85 + 10,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 2,
    }))
  );

  // Trigger Tactile Opening Sequence
  const handleStartOpen = () => {
    if (isAnimatingRef.current || animStage !== "closed") return;
    isAnimatingRef.current = true;

    // 0.0s - Tactile press
    setAnimStage("pressed");

    // 0.2s - Under-seal golden glow awakens
    setTimeout(() => {
      setAnimStage("glowing");
      try {
        confetti({
          particleCount: 16,
          spread: 40,
          origin: { y: 0.5 },
          colors: ["#E6CA85", "#C5A059", "#FAF5EE", "#D4AF37"],
          disableForReducedMotion: true,
        });
      } catch (e) {}
    }, 200);

    // 0.55s - Golden light eruption & 3D doors start opening
    setTimeout(() => {
      setAnimStage("opening");
      audioEngine.play();
      if (onOpened) onOpened();
    }, 550);

    // 1.2s - Champagne Curtains begin parting to reveal the Night Reception Scene
    setTimeout(() => {
      setAnimStage("curtains_parting");
    }, 1200);

    // 2.2s - Complete Night Reception stage is fully in view
    setTimeout(() => {
      setAnimStage("revealed");
      if (onOpened) onOpened();
      isAnimatingRef.current = false;
    }, 2200);
  };

  // Replay / Re-close the folder
  const handleReplay = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (isAnimatingRef.current) return;
    setAnimStage("closed");
    window.scrollTo({ top: 0, behavior: "instant" });
    if (onReplay) onReplay();
  };

  const isFolderOpened = animStage === "opening" || animStage === "curtains_parting" || animStage === "revealed";
  const isCurtainsOpened = animStage === "curtains_parting" || animStage === "revealed";

  return (
    <div
      id="welcome"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#070B16",
        perspective: "1600px",
      }}
    >
      {/* Floating Golden Dust Particles (Visible during closed stage) */}
      {animStage === "closed" &&
        particles.map((p) => (
          <div
            key={p.id}
            className="gold-particle-item"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: 0.7,
            }}
          />
        ))}

      {/* =========================================================================
          SCENE 2 — GRAND NIGHT WEDDING RECEPTION SCENE (Underneath Layer)
          Revealed immediately as the Sage Green covers swing open and curtains part
          (Matches Inviationa.mp4: Midnight navy, hanging lights canopy, couple, gold calligraphy, NO SAVE THE DATE)
      ========================================================================== */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: isFolderOpened ? 1 : 0,
          pointerEvents: isFolderOpened ? "auto" : "none",
          transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <NightReceptionScene
          isRevealed={isFolderOpened}
          onReplay={handleReplay}
          onScrollToNext={onScrollToNext}
        />

        {/* =========================================================================
            CHAMPAGNE CURTAINS STAGE DRAPERY (Top Valance & Gathered Side Swags)
        ========================================================================== */}

        {/* Top Valance Swag with Gold Bullion Fringe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "95px",
            zIndex: 30,
            pointerEvents: "none",
            transition: "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease",
            transform: isFolderOpened ? "translateY(0)" : "translateY(-30px)",
            opacity: isFolderOpened ? 1 : 0,
          }}
        >
          <svg
            viewBox="0 0 500 120"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.45))" }}
          >
            <defs>
              <linearGradient id="valanceSilk" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFDF9" />
                <stop offset="35%" stopColor="#F5ECE0" />
                <stop offset="70%" stopColor="#E9DECf" />
                <stop offset="100%" stopColor="#D9CCA8" />
              </linearGradient>
              <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#AA7C26" />
                <stop offset="25%" stopColor="#F9E29C" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="75%" stopColor="#F9E29C" />
                <stop offset="100%" stopColor="#AA7C26" />
              </linearGradient>
            </defs>

            {/* Top Ornamental Pelmet Band */}
            <rect x="0" y="0" width="500" height="24" fill="url(#valanceSilk)" />
            <rect x="0" y="20" width="500" height="4" fill="url(#goldTrim)" />

            {/* Scalloped Draped Swags (3 elegant draped loops) */}
            <path
              d="M 0,24 Q 85,85 170,24 Q 250,95 330,24 Q 415,85 500,24 L 500,24 L 500,0 L 0,0 Z"
              fill="url(#valanceSilk)"
              stroke="url(#goldTrim)"
              strokeWidth="1.5"
            />

            {/* Swag fabric pleat lines */}
            <path d="M 15,24 Q 85,75 155,24" fill="none" stroke="rgba(197, 160, 89, 0.4)" strokeWidth="1" />
            <path d="M 30,24 Q 85,65 140,24" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.8" />
            <path d="M 185,24 Q 250,82 315,24" fill="none" stroke="rgba(197, 160, 89, 0.4)" strokeWidth="1" />
            <path d="M 200,24 Q 250,70 300,24" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.8" />
            <path d="M 345,24 Q 415,75 485,24" fill="none" stroke="rgba(197, 160, 89, 0.4)" strokeWidth="1" />

            {/* Bottom Gold Fringe on Swags */}
            <path
              d="M 0,24 Q 85,85 170,24 Q 250,95 330,24 Q 415,85 500,24"
              fill="none"
              stroke="url(#goldTrim)"
              strokeWidth="3.5"
              strokeDasharray="2, 3"
            />

            {/* Center Hanging Tassel */}
            <circle cx="250" cy="98" r="4.5" fill="url(#goldTrim)" />
            <line x1="250" y1="102" x2="250" y2="118" stroke="url(#goldTrim)" strokeWidth="2.5" />
            <circle cx="170" cy="30" r="3" fill="url(#goldTrim)" />
            <circle cx="330" cy="30" r="3" fill="url(#goldTrim)" />
          </svg>
        </div>

        {/* Left Curtain Panel (Swags open to the left) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "55%",
            zIndex: 25,
            pointerEvents: "none",
            transformOrigin: "top left",
            transition: "transform 1.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease",
            transform: isCurtainsOpened
              ? "translateX(-84%) scaleX(0.72) rotate(-2deg)"
              : "translateX(0%) scaleX(1) rotate(0deg)",
            opacity: isFolderOpened ? 1 : 0,
            filter: "drop-shadow(8px 0 20px rgba(0, 0, 0, 0.5))",
          }}
        >
          <svg
            viewBox="0 0 200 800"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            <defs>
              <linearGradient id="curtainLeftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ECE3D5" />
                <stop offset="35%" stopColor="#FFFDF9" />
                <stop offset="70%" stopColor="#E6DBCC" />
                <stop offset="90%" stopColor="#FAF4EA" />
                <stop offset="100%" stopColor="#D5C7B0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,0 L 200,0 C 190,200 175,400 165,600 C 150,700 120,780 0,800 Z"
              fill="url(#curtainLeftGrad)"
            />
            <path d="M 40,0 C 35,250 30,550 0,780" stroke="rgba(197, 160, 89, 0.35)" strokeWidth="2.5" fill="none" />
            <path d="M 80,0 C 75,250 70,550 20,790" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" fill="none" />
            <path d="M 120,0 C 115,250 110,550 50,795" stroke="rgba(197, 160, 89, 0.3)" strokeWidth="2" fill="none" />
            <path d="M 160,0 C 150,250 145,550 80,800" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" fill="none" />
            <path
              d="M 200,0 C 190,200 175,400 165,600 C 150,700 120,780 0,800"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="3.5"
            />
          </svg>
        </div>

        {/* Right Curtain Panel (Swags open to the right) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "55%",
            zIndex: 25,
            pointerEvents: "none",
            transformOrigin: "top right",
            transition: "transform 1.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease",
            transform: isCurtainsOpened
              ? "translateX(84%) scaleX(0.72) rotate(2deg)"
              : "translateX(0%) scaleX(1) rotate(0deg)",
            opacity: isFolderOpened ? 1 : 0,
            filter: "drop-shadow(-8px 0 20px rgba(0, 0, 0, 0.5))",
          }}
        >
          <svg
            viewBox="0 0 200 800"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            <defs>
              <linearGradient id="curtainRightGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#ECE3D5" />
                <stop offset="35%" stopColor="#FFFDF9" />
                <stop offset="70%" stopColor="#E6DBCC" />
                <stop offset="90%" stopColor="#FAF4EA" />
                <stop offset="100%" stopColor="#D5C7B0" />
              </linearGradient>
            </defs>
            <path
              d="M 200,0 L 0,0 C 10,200 25,400 35,600 C 50,700 80,780 200,800 Z"
              fill="url(#curtainRightGrad)"
            />
            <path d="M 160,0 C 165,250 170,550 200,780" stroke="rgba(197, 160, 89, 0.35)" strokeWidth="2.5" fill="none" />
            <path d="M 120,0 C 125,250 130,550 180,790" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" fill="none" />
            <path d="M 80,0 C 85,250 90,550 150,795" stroke="rgba(197, 160, 89, 0.3)" strokeWidth="2" fill="none" />
            <path d="M 40,0 C 50,250 55,550 120,800" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" fill="none" />
            <path
              d="M 0,0 C 10,200 25,400 35,600 C 50,700 80,780 200,800"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="3.5"
            />
          </svg>
        </div>
      </div>

      {/* =========================================================================
          SCENE 1 — LUXURY CLOSED SAGE GREEN 3D GATEFOLD INVITATION FOLDER
          (3D panels open outward when user touches the baroque medallion seal)
      ========================================================================== */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 35,
          pointerEvents: isFolderOpened ? "none" : "auto",
          perspective: "1600px",
          transformStyle: "preserve-3d",
          transition: "opacity 0.7s ease 1.2s",
          opacity: animStage === "revealed" ? 0 : 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "480px",
            height: "100%",
            minHeight: "100vh",
            transformStyle: "preserve-3d",
            boxShadow:
              "0 30px 70px -10px rgba(18, 22, 18, 0.48), 0 0 35px rgba(197, 160, 89, 0.2)",
          }}
        >
          {/* ==================== LEFT SAGE GREEN COVER PANEL ==================== */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "50%",
              height: "100%",
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              transition: "transform 1.4s cubic-bezier(0.25, 1, 0.5, 1)",
              transform: isFolderOpened ? "rotateY(-115deg)" : "rotateY(0deg)",
              boxShadow: isFolderOpened
                ? "none"
                : "inset -8px 0 18px rgba(0, 0, 0, 0.35), 8px 0 20px rgba(0, 0, 0, 0.2)",
              zIndex: 40,
            }}
          >
            {/* Front Face: Sage Green Cardstock with Embossed Leaves Texture */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/images/sage-folder-cover.jpg')",
                backgroundSize: "200% 100%",
                backgroundPosition: "left center",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                borderRight: "1px solid rgba(0, 0, 0, 0.4)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 40% 50%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.2) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Antique Gold Beaded Trim along opening seam */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  width: "9px",
                  background:
                    "linear-gradient(180deg, #FAF0D7 0%, #D4AF37 30%, #AA7C26 70%, #FAF0D7 100%)",
                  boxShadow:
                    "-2px 0 6px rgba(0, 0, 0, 0.4), inset 1px 0 2px rgba(255, 255, 255, 0.7)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "4px 0",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage:
                      "radial-gradient(circle, #FFFFFF 1.5px, #9A6E20 2.2px, transparent 3px)",
                    backgroundSize: "8px 10px",
                  }}
                />
              </div>
            </div>

            {/* Back Face: Luxury Champagne Damask Silk */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                background: "linear-gradient(135deg, #F0E6D8 0%, #D9CCA8 50%, #C8BA94 100%)",
                boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(#AA7C26 1px, transparent 1px), radial-gradient(#FAF0D7 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 12px 12px",
                  opacity: 0.35,
                }}
              />
            </div>
          </div>

          {/* ==================== RIGHT SAGE GREEN COVER PANEL ==================== */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50%",
              height: "100%",
              transformOrigin: "right center",
              transformStyle: "preserve-3d",
              transition: "transform 1.4s cubic-bezier(0.25, 1, 0.5, 1)",
              transform: isFolderOpened ? "rotateY(115deg)" : "rotateY(0deg)",
              boxShadow: isFolderOpened
                ? "none"
                : "inset 8px 0 18px rgba(0, 0, 0, 0.35), -8px 0 20px rgba(0, 0, 0, 0.2)",
              zIndex: 40,
            }}
          >
            {/* Front Face: Sage Green Cardstock with Embossed Leaves Texture */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/images/sage-folder-cover.jpg')",
                backgroundSize: "200% 100%",
                backgroundPosition: "right center",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                borderLeft: "1px solid rgba(0, 0, 0, 0.4)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 60% 50%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.2) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Antique Gold Beaded Trim along opening seam */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: "9px",
                  background:
                    "linear-gradient(180deg, #FAF0D7 0%, #D4AF37 30%, #AA7C26 70%, #FAF0D7 100%)",
                  boxShadow:
                    "2px 0 6px rgba(0, 0, 0, 0.4), inset -1px 0 2px rgba(255, 255, 255, 0.7)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "4px 0",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage:
                      "radial-gradient(circle, #FFFFFF 1.5px, #9A6E20 2.2px, transparent 3px)",
                    backgroundSize: "8px 10px",
                  }}
                />
              </div>
            </div>

            {/* Back Face: Luxury Champagne Damask Silk */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                background: "linear-gradient(135deg, #F0E6D8 0%, #D9CCA8 50%, #C8BA94 100%)",
                boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(#AA7C26 1px, transparent 1px), radial-gradient(#FAF0D7 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 12px 12px",
                  opacity: 0.35,
                }}
              />
            </div>
          </div>

          {/* ==================== CENTER VERTICAL SEAM GOLDEN LIGHT REVEAL ==================== */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: isFolderOpened ? "120px" : animStage === "glowing" ? "20px" : "4px",
              zIndex: 42,
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(255, 245, 210, 0.95) 0%, rgba(230, 202, 133, 0.7) 45%, transparent 75%)",
              opacity: animStage === "glowing" ? 1 : animStage === "opening" ? 0.8 : 0,
              filter: "blur(6px)",
              transition: "all 0.5s ease-out",
              pointerEvents: "none",
            }}
          />

          {/* Volumetric Rotating Light Beams during Eruption */}
          {(animStage === "glowing" || animStage === "opening") && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "480px",
                height: "480px",
                zIndex: 44,
                pointerEvents: "none",
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(255, 240, 185, 0.4) 20deg, transparent 40deg, rgba(230, 202, 133, 0.5) 65deg, transparent 90deg, rgba(255, 240, 185, 0.4) 120deg, transparent 150deg, rgba(230, 202, 133, 0.5) 180deg, transparent 210deg, rgba(255, 240, 185, 0.4) 240deg, transparent 270deg, rgba(230, 202, 133, 0.5) 300deg, transparent 330deg)",
                filter: "blur(8px)",
                animation: "lightBeamsRotate 3s infinite linear",
              }}
            />
          )}

          {/* ==================== CENTER ORNATE MEDALLION SEAL ==================== */}
          {animStage !== "revealed" && (
            <div
              onClick={handleStartOpen}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                zIndex: 50,
                cursor: isFolderOpened ? "default" : "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                opacity: animStage === "opening" ? 0 : 1,
                transform:
                  animStage === "opening"
                    ? "translate(-50%, -50%) scale(1.3)"
                    : animStage === "pressed"
                    ? "translate(-50%, -50%) scale(0.92)"
                    : "translate(-50%, -50%) scale(1)",
                animation: animStage === "closed" ? "sealBreathingGlow 3.5s infinite ease-in-out" : "none",
              }}
            >
              <SageMedallionSeal
                monogram={couple.monogram}
                subtitle="TAP TO OPEN"
                isPressed={animStage === "pressed"}
                isGlowing={animStage === "glowing"}
                isOpening={isFolderOpened}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
