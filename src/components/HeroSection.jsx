import React from "react";
import { ChevronDown, Calendar, MapPin, Sparkles } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function HeroSection({ onScrollToInvite }) {
  const { couple, date, invitation, venue } = weddingData;

  return (
    <section
      id="welcome"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        padding: "32px 20px 28px",
        background: "radial-gradient(circle at 50% 30%, #FFFDF9 0%, #FAF5EE 70%, #F5EBE1 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Soft Glow & Texture */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(248, 215, 222, 0.4) 0%, transparent 45%), radial-gradient(circle at 80% 60%, rgba(235, 220, 195, 0.45) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Auspicious Invocation */}
      <div style={{ position: "relative", zIndex: 10, marginTop: "12px" }}>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "14px",
            letterSpacing: "4px",
            color: "var(--color-gold-dark)",
            marginBottom: "4px",
            fontWeight: 600,
          }}
        >
          {date.blessingSanskrit}
        </p>
        <p
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "11px",
            letterSpacing: "3px",
            color: "var(--color-text-muted)",
            textTransform: "uppercase",
          }}
        >
          {invitation.leadIn}
        </p>
      </div>

      {/* Main Hand-Painted Couple Illustration with Arch */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "380px",
          margin: "16px auto",
          zIndex: 10,
        }}
      >
        {/* Decorative Golden Outer Frame */}
        <div
          style={{
            position: "relative",
            borderRadius: "180px 180px 24px 24px",
            overflow: "hidden",
            boxShadow:
              "0 20px 40px -10px rgba(45, 37, 34, 0.22), 0 0 20px rgba(197, 160, 89, 0.25)",
            border: "2px solid rgba(197, 160, 89, 0.5)",
            background: "#FFF",
          }}
        >
          {/* Couple Hero Image */}
          <img
            src={couple.heroImage}
            alt={`${couple.groom.firstName} & ${couple.bride.firstName}`}
            style={{
              width: "100%",
              height: "360px",
              objectFit: "cover",
              display: "block",
              transform: "scale(1.02)",
              transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          {/* Soft Gradient Overlay at bottom of image */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "100px",
              background: "linear-gradient(to top, rgba(250, 246, 240, 0.95), transparent)",
            }}
          />
        </div>

        {/* Floating Monogram Wax Seal on the frame */}
        <div
          style={{
            position: "absolute",
            bottom: "-18px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "56px",
            height: "56px",
            zIndex: 15,
            filter: "drop-shadow(0 6px 12px rgba(45, 37, 34, 0.25))",
          }}
        >
          <img
            src={couple.waxSeal}
            alt="Wax Seal Monogram"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Couple Names & Prominent Save The Date */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", marginTop: "14px" }}>
        {/* Script & Serif Couple Names */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "36px",
            fontWeight: "500",
            letterSpacing: "3px",
            lineHeight: "1.15",
            color: "var(--color-text-main)",
            margin: "4px 0",
          }}
        >
          {couple.groom.firstName}{" "}
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "38px",
              color: "var(--color-gold-dark)",
              margin: "0 4px",
              fontWeight: "400",
            }}
          >
            &
          </span>{" "}
          {couple.bride.firstName}
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            letterSpacing: "1.5px",
            color: "var(--color-text-body)",
            marginTop: "6px",
            marginBottom: "16px",
            fontWeight: "400",
          }}
        >
          {invitation.subLead}
        </p>

        {/* PROMINENT WEDDING DATE BADGE (Always immediately visible without gimmicks) */}
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "12px 24px",
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(197, 160, 89, 0.4)",
            boxShadow: "0 6px 20px rgba(197, 160, 89, 0.12)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "3px",
              color: "var(--color-gold-dark)",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            ✦ SAVE THE DATE ✦
          </span>

          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "20px",
              fontWeight: "600",
              letterSpacing: "2px",
              color: "var(--color-text-main)",
              margin: "4px 0",
            }}
          >
            {date.dayOfWeek} • {date.dayNumber} {date.monthName} {date.year}
          </div>

          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              letterSpacing: "1px",
              color: "var(--color-text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <MapPin size={12} color="#C5A059" /> {venue.name}, {venue.city}
          </span>
        </div>
      </div>

      {/* Bottom Scroll / Interaction Indicator */}
      <div
        onClick={onScrollToInvite}
        style={{
          position: "relative",
          zIndex: 10,
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "var(--color-gold-dark)",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          Scroll to explore
        </span>
        <div style={{ animation: "gentleBounce 2s infinite ease-in-out" }}>
          <ChevronDown size={18} color="#C5A059" />
        </div>
      </div>

      <style>{`
        @keyframes gentleBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
