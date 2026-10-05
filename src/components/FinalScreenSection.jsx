import React from "react";
import { ArrowUp } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function FinalScreenSection({ onScrollToTop }) {
  const { closing } = weddingData;

  return (
    <section
      id="final-screen"
      style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "60px 20px 40px",
        background: "radial-gradient(circle at 50% 40%, #FFFDF9 0%, #FAF5EE 65%, #F4E8DB 100%)",
      }}
    >
      {/* Main Closing Card with only "With Love & Gratitude" and the quote */}
      <div
        className="gold-frame gold-corner-accents"
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#FFFFFF",
          padding: "48px 28px",
          boxShadow: "var(--shadow-card)",
          position: "relative",
          margin: "auto",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "4px",
            color: "var(--color-gold-dark)",
            textTransform: "uppercase",
            marginBottom: "18px",
          }}
        >
          ✦ {closing.title} ✦
        </p>

        {/* Warm Quote */}
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            color: "var(--color-rose-deep)",
            lineHeight: "1.7",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          {closing.quote}
        </p>
      </div>

      {/* Back to Top button */}
      {onScrollToTop && (
        <button
          onClick={onScrollToTop}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--color-gold-dark)",
            fontFamily: "var(--font-cinzel)",
            fontSize: "10px",
            letterSpacing: "2px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "16px",
            textTransform: "uppercase",
            marginTop: "20px",
          }}
        >
          <ArrowUp size={14} /> Back to Beginning
        </button>
      )}
    </section>
  );
}
