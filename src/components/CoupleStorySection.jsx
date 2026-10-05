import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function CoupleStorySection() {
  const { story, couple } = weddingData;

  return (
    <section
      id="story"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "60px 16px 50px",
        background: "linear-gradient(180deg, #FAF6F0 0%, #F5EBE1 50%, #FAF5EE 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "11px",
            letterSpacing: "4px",
            color: "var(--color-gold-dark)",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          ✦ {story.tagline} ✦
        </p>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "32px",
            fontWeight: "500",
            letterSpacing: "2px",
            color: "var(--color-text-main)",
          }}
        >
          {story.title}
        </h2>
      </div>

      {/* Main Story Container */}
      <div
        className="gold-frame"
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#FFFFFF",
          overflow: "hidden",
          boxShadow: "var(--shadow-card)",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Arch Couple Story Portrait */}
        <div style={{ position: "relative", width: "100%", height: "360px", overflow: "hidden" }}>
          <img
            src={story.image}
            alt={`${couple.bride.firstName} & ${couple.groom.firstName} Story`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 20%",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "80px",
              background: "linear-gradient(to top, rgba(255, 255, 255, 1), transparent)",
            }}
          />
        </div>

        {/* Narrative Content */}
        <div style={{ padding: "10px 24px 32px" }}>
          {/* Poetic quote */}
          <div
            style={{
              background: "rgba(251, 240, 242, 0.7)",
              borderRadius: "14px",
              padding: "18px 16px",
              margin: "0 auto 20px",
              border: "1px dashed rgba(197, 160, 89, 0.35)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "18px",
                color: "var(--color-rose-deep)",
                lineHeight: "1.5",
                fontStyle: "italic",
              }}
            >
              {story.quote}
            </p>
          </div>

          {/* Story Paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", textAlign: "left" }}>
            {story.paragraphs.map((para, idx) => (
              <p
                key={idx}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12.5px",
                  color: "var(--color-text-body)",
                  lineHeight: "1.7",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Signoff */}
          <div style={{ marginTop: "24px" }}>
            <p
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "30px",
                color: "var(--color-gold-dark)",
              }}
            >
              {couple.bride.firstName} &amp; {couple.groom.firstName}
            </p>
            <p
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "9px",
                letterSpacing: "2px",
                color: "var(--color-text-muted)",
                marginTop: "2px",
              }}
            >
              {couple.hashtag.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
