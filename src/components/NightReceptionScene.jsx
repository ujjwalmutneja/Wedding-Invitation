import React, { useState, useEffect } from "react";
import { weddingData } from "../data/weddingData";
import { Sparkles, ChevronDown, RotateCcw } from "lucide-react";

export default function NightReceptionScene({
  isRevealed = true,
  onReplay = null,
  onScrollToNext = null,
}) {
  const { couple } = weddingData;

  // Staggered reveal state timers
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isRevealed) {
      setStep(0);
      return;
    }

    // Sequence timeline:
    // 0.4s -> step 1 (midnight environment & fairy lights)
    // 1.2s -> step 2 (reception decor & couple)
    // 1.8s -> step 3 ("we are getting married")
    // 2.4s -> step 4 (grand couple names)
    // 3.0s -> step 5 (composition settled)
    const t1 = setTimeout(() => setStep(1), 400);
    const t2 = setTimeout(() => setStep(2), 1200);
    const t3 = setTimeout(() => setStep(3), 1800);
    const t4 = setTimeout(() => setStep(4), 2400);
    const t5 = setTimeout(() => setStep(5), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [isRevealed]);

  // Ambient Twinkling Stars in Night Sky
  const [stars] = useState(() =>
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: Math.random() * 94 + 3,
      top: Math.random() * 45 + 5,
      size: Math.random() * 3 + 1.5,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }))
  );

  // Occasional golden sparkles / flares
  const [sparkles] = useState(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: 15 + i * 14 + (Math.random() * 6 - 3),
      top: 18 + (i % 3) * 12 + Math.random() * 6,
      delay: i * 1.6 + 0.8,
      duration: 3.5,
    }))
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 50% 30%, #0D162B 0%, #070B16 55%, #03050B 100%)",
        color: "#FFFFFF",
        textAlign: "center",
        padding: "24px 16px 28px",
        boxSizing: "border-box",
      }}
    >
      {/* =========================================================================
          1. DEEP MIDNIGHT NAVY & GRAND NIGHT RECEPTION BACKGROUND (With Bride & Groom)
          ========================================================================= */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/night-reception-scene.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: step >= 1 ? 1 : 0,
          transition: "opacity 1.2s ease-out",
          pointerEvents: "none",
        }}
      />

      {/* Subtle Night Sky Contrast Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(7, 11, 22, 0.75) 0%, rgba(7, 11, 22, 0.4) 35%, rgba(7, 11, 22, 0.15) 65%, rgba(3, 5, 11, 0.85) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* =========================================================================
          2. CANOPY OF THOUSANDS OF HANGING FAIRY LIGHTS
          ========================================================================= */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "38%",
          pointerEvents: "none",
          opacity: step >= 1 ? 1 : 0,
          transition: "opacity 1.4s ease-out",
          animation: "fairyCanopyShimmer 4s infinite ease-in-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "120%",
            height: "180px",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255, 230, 160, 0.35) 0%, rgba(212, 175, 55, 0.15) 50%, transparent 80%)",
            filter: "blur(16px)",
          }}
        />
      </div>

      {/* Ambient Twinkling Stars in Night Sky */}
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            background: "#FFF8E7",
            boxShadow: "0 0 6px rgba(255, 240, 190, 0.9)",
            opacity: step >= 1 ? 0.85 : 0,
            animation: `starTwinkleGlow ${s.duration}s infinite ease-in-out`,
            animationDelay: `${s.delay}s`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Occasional Star Sparkles / Golden Flares */}
      {sparkles.map((sp) => (
        <div
          key={sp.id}
          style={{
            position: "absolute",
            left: `${sp.left}%`,
            top: `${sp.top}%`,
            width: "14px",
            height: "14px",
            pointerEvents: "none",
            opacity: step >= 1 ? 0.9 : 0,
            animation: `starTwinkleGlow ${sp.duration}s infinite ease-in-out`,
            animationDelay: `${sp.delay}s`,
          }}
        >
          <svg viewBox="0 0 24 24" style={{ width: "100%", height: "100%" }}>
            <path
              d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z"
              fill="url(#sparkleGoldGrad2)"
            />
            <defs>
              <linearGradient id="sparkleGoldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#FFEAA7" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}

      {/* Top Replay Button (Allows replaying opening sequence) */}
      {onReplay && step >= 4 && (
        <button
          onClick={onReplay}
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            zIndex: 60,
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "5px 12px",
            borderRadius: "999px",
            background: "rgba(13, 22, 43, 0.75)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(212, 175, 55, 0.45)",
            color: "#FAF5EE",
            fontFamily: "var(--font-cinzel)",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "1px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
            transition: "all 0.25s ease",
          }}
          title="Replay Invitation Opening"
        >
          <RotateCcw size={11} color="#E6CA85" /> REPLAY
        </button>
      )}

      {/* =========================================================================
          3. PURE & CLEAN TYPOGRAPHY:
          "we are getting married" + BIG COUPLE NAMES (NOTHING ELSE)
          ========================================================================= */}
      <div
        style={{
          position: "relative",
          zIndex: 30,
          width: "100%",
          maxWidth: "440px",
          marginTop: "95px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* "we are getting married" in elegant romantic gold script */}
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            letterSpacing: "3.5px",
            color: "#F7E6B8",
            fontStyle: "italic",
            fontWeight: 400,
            margin: "0 0 6px 0",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.9), 0 0 14px rgba(212, 175, 55, 0.45)",
            opacity: step >= 3 ? 1 : 0,
            transform: step >= 3 ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          we are getting married
        </p>

        {/* Big Couple Names in Grand Luxury Gold Wedding Calligraphy */}
        <div
          style={{
            margin: "2px 0 0 0",
            opacity: step >= 4 ? 1 : 0,
            transform: step >= 4 ? "scale(1) translateY(0)" : "scale(0.92) translateY(16px)",
            transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h1
            style={{
              fontFamily: "'Alex Brush', 'Cormorant Garamond', cursive",
              fontSize: "58px",
              fontWeight: "400",
              lineHeight: "1.15",
              margin: 0,
              background: "linear-gradient(135deg, #FFFDF6 0%, #FFEAA7 30%, #F5DE98 55%, #D4AF37 80%, #FFFDF6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter:
                "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 20px rgba(212, 175, 55, 0.55))",
              letterSpacing: "1px",
            }}
          >
            {couple.bride.firstName}{" "}
            <span
              style={{
                fontSize: "44px",
                margin: "0 6px",
                fontFamily: "'Alex Brush', cursive",
              }}
            >
              &amp;
            </span>{" "}
            {couple.groom.firstName}
          </h1>
        </div>
      </div>

      {/* =========================================================================
          4. LOWER CONTINUATION ACTION (Smooth scroll to Scene 3)
          ========================================================================= */}
      {onScrollToNext && (
        <div
          onClick={onScrollToNext}
          style={{
            position: "relative",
            zIndex: 35,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2px",
            cursor: "pointer",
            opacity: step >= 5 ? 1 : 0,
            transform: step >= 5 ? "translateY(0)" : "translateY(14px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}
        >
          <button
            className="btn-gold-primary"
            style={{
              padding: "9px 24px",
              fontSize: "11px",
              letterSpacing: "2px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.65), 0 0 16px rgba(212, 175, 55, 0.4)",
              background: "linear-gradient(135deg, #DFB758 0%, #C5A059 50%, #9C7221 100%)",
            }}
          >
            <Sparkles size={13} /> Explore Celebrations
          </button>
          <div style={{ animation: "gentleBounce 2s infinite ease-in-out", marginTop: "2px" }}>
            <ChevronDown size={18} color="#E6CA85" />
          </div>
        </div>
      )}
    </div>
  );
}
