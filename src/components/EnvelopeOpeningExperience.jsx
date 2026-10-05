import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";
import SageMedallionSeal from "./SageMedallionSeal";
import NightReceptionScene from "./NightReceptionScene";
import { weddingData } from "../data/weddingData";
import { audioEngine } from "../utils/audioEngine";
import { useInvitation } from "../context/InvitationContext";

export default function EnvelopeOpeningExperience({ onOpened, onReplay, onScrollToNext }) {
  const { couple } = weddingData;
  const { guestName } = useInvitation();

  // Animation Sequence States:
  // 'closed' -> 'pressed' -> 'glowing' -> 'opening' -> 'curtains_parting' -> 'revealed'
  const [animStage, setAnimStage] = useState("closed");
  const [sealVisible, setSealVisible] = useState(true);
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

    // Immediately remove the seal from screen
    setSealVisible(false);

    // 0.0s - Tactile press
    setAnimStage("pressed");

    // 0.15s - Under-seal golden glow awakens
    setTimeout(() => {
      setAnimStage("glowing");
      try {
        confetti({
          particleCount: 20,
          spread: 45,
          origin: { y: 0.5 },
          colors: ["#E6CA85", "#C5A059", "#FAF5EE", "#D4AF37"],
          disableForReducedMotion: true,
        });
      } catch (e) {}
    }, 150);

    // 0.45s - Golden light eruption & 3D doors start opening
    setTimeout(() => {
      setAnimStage("opening");
      audioEngine.play();
      if (onOpened) onOpened();
    }, 450);

    // 1.1s - Champagne Curtains begin parting to reveal the Night Reception Scene
    setTimeout(() => {
      setAnimStage("curtains_parting");
    }, 1100);

    // 2.1s - Complete Night Reception stage is fully in view
    setTimeout(() => {
      setAnimStage("revealed");
      if (onOpened) onOpened();
      isAnimatingRef.current = false;
    }, 2100);
  };

  // Replay / Re-close the folder
  const handleReplay = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (isAnimatingRef.current) return;
    setAnimStage("closed");
    setSealVisible(true);
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
            ROYAL CHAMPAGNE CURTAINS STAGE DRAPERY (Top Valance & Royal Side Swags)
            (Features rich champagne pleated silk, pearl beaded trim, and royal valance)
        ========================================================================== */}

        {/* Top Royal Valance Pelmet with Scalloped Swags & Pearl Tassels */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "105px",
            zIndex: 32,
            pointerEvents: "none",
            transition: "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease",
            transform: isFolderOpened ? "translateY(0)" : "translateY(-35px)",
            opacity: isFolderOpened ? 1 : 0,
          }}
        >
          <svg
            viewBox="0 0 500 130"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.65))" }}
          >
            <defs>
              <linearGradient id="valanceSilkRoyal" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFC" />
                <stop offset="30%" stopColor="#F9F2E7" />
                <stop offset="65%" stopColor="#EFE3CF" />
                <stop offset="100%" stopColor="#DECDB1" />
              </linearGradient>
              <linearGradient id="goldTrimRoyal" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9E7422" />
                <stop offset="20%" stopColor="#FCE79F" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="80%" stopColor="#FDF2C2" />
                <stop offset="100%" stopColor="#9E7422" />
              </linearGradient>
              <linearGradient id="pearlShine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#FAF7F2" />
                <stop offset="80%" stopColor="#E6DCCE" />
                <stop offset="100%" stopColor="#C4B59F" />
              </linearGradient>
            </defs>

            {/* Top Ornamental Pelmet Band */}
            <rect x="0" y="0" width="500" height="26" fill="url(#valanceSilkRoyal)" />
            <rect x="0" y="22" width="500" height="5" fill="url(#goldTrimRoyal)" />

            {/* Scalloped Draped Swags (3 royal draped arcs) */}
            <path
              d="M 0,26 Q 85,92 170,26 Q 250,105 330,26 Q 415,92 500,26 L 500,0 L 0,0 Z"
              fill="url(#valanceSilkRoyal)"
              stroke="url(#goldTrimRoyal)"
              strokeWidth="2"
            />

            {/* Swag inner pleat shading */}
            <path d="M 15,26 Q 85,82 155,26" fill="none" stroke="rgba(197, 160, 89, 0.45)" strokeWidth="1.5" />
            <path d="M 30,26 Q 85,72 140,26" fill="none" stroke="rgba(255, 255, 255, 0.75)" strokeWidth="1.2" />
            <path d="M 45,26 Q 85,62 125,26" fill="none" stroke="rgba(197, 160, 89, 0.35)" strokeWidth="1" />
            <path d="M 185,26 Q 250,92 315,26" fill="none" stroke="rgba(197, 160, 89, 0.45)" strokeWidth="1.5" />
            <path d="M 200,26 Q 250,80 300,26" fill="none" stroke="rgba(255, 255, 255, 0.75)" strokeWidth="1.2" />
            <path d="M 215,26 Q 250,68 285,26" fill="none" stroke="rgba(197, 160, 89, 0.35)" strokeWidth="1" />
            <path d="M 345,26 Q 415,82 485,26" fill="none" stroke="rgba(197, 160, 89, 0.45)" strokeWidth="1.5" />
            <path d="M 360,26 Q 415,72 470,26" fill="none" stroke="rgba(255, 255, 255, 0.75)" strokeWidth="1.2" />

            {/* Bottom Gold & Pearl Beaded Fringe */}
            <path
              d="M 0,26 Q 85,92 170,26 Q 250,105 330,26 Q 415,92 500,26"
              fill="none"
              stroke="url(#goldTrimRoyal)"
              strokeWidth="4"
              strokeDasharray="2.5, 4"
            />
            <path
              d="M 0,27 Q 85,93 170,27 Q 250,106 330,27 Q 415,93 500,27"
              fill="none"
              stroke="url(#pearlShine)"
              strokeWidth="2.2"
              strokeDasharray="1.5, 5"
            />

            {/* Center Hanging Pearl & Gold Tassel */}
            <circle cx="250" cy="107" r="5" fill="url(#goldTrimRoyal)" />
            <circle cx="250" cy="107" r="3" fill="url(#pearlShine)" />
            <line x1="250" y1="112" x2="250" y2="128" stroke="url(#goldTrimRoyal)" strokeWidth="3" />
            <circle cx="250" cy="128" r="3" fill="url(#goldTrimRoyal)" />
            <circle cx="170" cy="32" r="3.5" fill="url(#goldTrimRoyal)" />
            <circle cx="330" cy="32" r="3.5" fill="url(#goldTrimRoyal)" />
          </svg>
        </div>

        {/* Left Royal Curtain Panel with Pearl Beaded Parting Edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "56%",
            zIndex: 26,
            pointerEvents: "none",
            transformOrigin: "top left",
            transition: "transform 1.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease",
            transform: isCurtainsOpened
              ? "translateX(-86%) scaleX(0.7) rotate(-2deg)"
              : "translateX(0%) scaleX(1) rotate(0deg)",
            opacity: isFolderOpened ? 1 : 0,
            filter: "drop-shadow(10px 0 26px rgba(0, 0, 0, 0.6))",
          }}
        >
          <svg
            viewBox="0 0 220 800"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            <defs>
              <linearGradient id="silkFluteLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ECE1D1" />
                <stop offset="20%" stopColor="#FFFFFC" />
                <stop offset="40%" stopColor="#E7DBC9" />
                <stop offset="60%" stopColor="#FFFDF8" />
                <stop offset="80%" stopColor="#DFD1BD" />
                <stop offset="95%" stopColor="#FAF4EA" />
                <stop offset="100%" stopColor="#CBBBA2" />
              </linearGradient>
            </defs>

            {/* Draped Curving Silk Body */}
            <path
              d="M 0,0 L 220,0 C 210,180 190,380 175,580 C 158,680 120,770 0,800 Z"
              fill="url(#silkFluteLeft)"
            />

            {/* Deep vertical pleat highlights and shadows */}
            <path d="M 30,0 C 25,240 20,520 0,760" stroke="rgba(197, 160, 89, 0.35)" strokeWidth="3" fill="none" />
            <path d="M 60,0 C 55,240 50,520 15,775" stroke="rgba(255, 255, 255, 0.75)" strokeWidth="2.5" fill="none" />
            <path d="M 90,0 C 85,240 80,520 35,785" stroke="rgba(197, 160, 89, 0.35)" strokeWidth="3" fill="none" />
            <path d="M 120,0 C 115,240 110,520 60,792" stroke="rgba(255, 255, 255, 0.75)" strokeWidth="2.5" fill="none" />
            <path d="M 150,0 C 145,240 140,520 90,798" stroke="rgba(197, 160, 89, 0.3)" strokeWidth="3" fill="none" />
            <path d="M 180,0 C 172,240 162,520 125,800" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2.5" fill="none" />

            {/* Parting Beaded Border (Gold Braided Trim + Pearl Row) */}
            <path
              d="M 220,0 C 210,180 190,380 175,580 C 158,680 120,770 0,800"
              fill="none"
              stroke="url(#goldTrimRoyal)"
              strokeWidth="5"
            />
            <path
              d="M 220,0 C 210,180 190,380 175,580 C 158,680 120,770 0,800"
              fill="none"
              stroke="url(#pearlShine)"
              strokeWidth="3.2"
              strokeDasharray="2, 5.5"
            />
          </svg>
        </div>

        {/* Right Royal Curtain Panel with Pearl Beaded Parting Edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "56%",
            zIndex: 26,
            pointerEvents: "none",
            transformOrigin: "top right",
            transition: "transform 1.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease",
            transform: isCurtainsOpened
              ? "translateX(86%) scaleX(0.7) rotate(2deg)"
              : "translateX(0%) scaleX(1) rotate(0deg)",
            opacity: isFolderOpened ? 1 : 0,
            filter: "drop-shadow(-10px 0 26px rgba(0, 0, 0, 0.6))",
          }}
        >
          <svg
            viewBox="0 0 220 800"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            <defs>
              <linearGradient id="silkFluteRight" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#ECE1D1" />
                <stop offset="20%" stopColor="#FFFFFC" />
                <stop offset="40%" stopColor="#E7DBC9" />
                <stop offset="60%" stopColor="#FFFDF8" />
                <stop offset="80%" stopColor="#DFD1BD" />
                <stop offset="95%" stopColor="#FAF4EA" />
                <stop offset="100%" stopColor="#CBBBA2" />
              </linearGradient>
            </defs>

            {/* Draped Curving Silk Body */}
            <path
              d="M 220,0 L 0,0 C 10,180 30,380 45,580 C 62,680 100,770 220,800 Z"
              fill="url(#silkFluteRight)"
            />

            {/* Deep vertical pleat highlights and shadows */}
            <path d="M 190,0 C 195,240 200,520 220,760" stroke="rgba(197, 160, 89, 0.35)" strokeWidth="3" fill="none" />
            <path d="M 160,0 C 165,240 170,520 205,775" stroke="rgba(255, 255, 255, 0.75)" strokeWidth="2.5" fill="none" />
            <path d="M 130,0 C 135,240 140,520 185,785" stroke="rgba(197, 160, 89, 0.35)" strokeWidth="3" fill="none" />
            <path d="M 100,0 C 105,240 110,520 160,792" stroke="rgba(255, 255, 255, 0.75)" strokeWidth="2.5" fill="none" />
            <path d="M 70,0 C 75,240 80,520 130,798" stroke="rgba(197, 160, 89, 0.3)" strokeWidth="3" fill="none" />
            <path d="M 40,0 C 48,240 58,520 95,800" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2.5" fill="none" />

            {/* Parting Beaded Border (Gold Braided Trim + Pearl Row) */}
            <path
              d="M 0,0 C 10,180 30,380 45,580 C 62,680 100,770 220,800"
              fill="none"
              stroke="url(#goldTrimRoyal)"
              strokeWidth="5"
            />
            <path
              d="M 0,0 C 10,180 30,380 45,580 C 62,680 100,770 220,800"
              fill="none"
              stroke="url(#pearlShine)"
              strokeWidth="3.2"
              strokeDasharray="2, 5.5"
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
          {sealVisible && (
            <div
              onClick={handleStartOpen}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                zIndex: 50,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                transform: "translate(-50%, -50%)",
                animation: "sealBreathingGlow 3.5s infinite ease-in-out",
              }}
            >
              {guestName && (
                <div
                  style={{
                    background: "rgba(22, 28, 22, 0.8)",
                    border: "1px solid rgba(197, 160, 89, 0.45)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "999px",
                    padding: "4px 16px",
                    color: "#F4E8DB",
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "10.5px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
                    marginBottom: "4px",
                  }}
                >
                  FOR: {guestName}
                </div>
              )}
              <SageMedallionSeal
                monogram={couple.monogram}
                subtitle="TAP TO OPEN"
                isPressed={false}
                isGlowing={false}
                isOpening={false}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
