import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Sun,
  Music,
  HeartHandshake,
  Wine,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useInvitation } from "../context/InvitationContext";

export default function FunctionsSection() {
  const { events, type, typeName } = useInvitation();
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const getEventIcon = (iconName) => {
    switch (iconName) {
      case "Sun":
        return <Sun size={16} color="#C5A059" />;
      case "Music":
        return <Music size={16} color="#C5A059" />;
      case "HeartHandshake":
        return <HeartHandshake size={16} color="#C5A059" />;
      case "Wine":
        return <Wine size={16} color="#C5A059" />;
      case "Sparkles":
      default:
        return <Sparkles size={16} color="#C5A059" />;
    }
  };

  const safeIndex = activeEventIndex < events.length ? activeEventIndex : 0;
  const currentEvent = events[safeIndex] || events[0];

  const nextEvent = () => {
    if (events.length <= 1) return;
    setActiveEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    if (events.length <= 1) return;
    setActiveEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section
      id="functions"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "60px 16px 50px",
        background: "linear-gradient(180deg, #F5EDE4 0%, #FAF6F0 40%, #F5EBE1 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
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
          ✦ CELEBRATION ITINERARY ✦
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
          {events.length === 1 ? "The Wedding Ceremony" : "Wedding Functions"}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            color: "var(--color-text-muted)",
            marginTop: "4px",
          }}
        >
          {events.length === 1
            ? "We request the honor of your presence at the auspicious wedding ceremony"
            : "Swipe or tap the tabs below to explore each ceremony"}
        </p>
      </div>

      {/* Interactive Tabs Header (rendered only when more than 1 event) */}
      {events.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: "6px",
            overflowX: "auto",
            maxWidth: "100%",
            padding: "4px 8px 12px",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            marginBottom: "16px",
          }}
        >
          {events.map((ev, idx) => (
            <button
              key={ev.id}
              onClick={() => setActiveEventIndex(idx)}
              style={{
                flexShrink: 0,
                padding: "8px 16px",
                borderRadius: "999px",
                fontFamily: "var(--font-cinzel)",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border:
                  safeIndex === idx
                    ? "1px solid #C5A059"
                    : "1px solid rgba(197, 160, 89, 0.25)",
                background:
                  safeIndex === idx
                    ? "linear-gradient(135deg, #C5A059 0%, #D8B775 100%)"
                    : "rgba(255, 255, 255, 0.8)",
                color: safeIndex === idx ? "#FFFFFF" : "#594E48",
                boxShadow:
                  safeIndex === idx
                    ? "0 4px 14px rgba(197, 160, 89, 0.35)"
                    : "none",
              }}
            >
              {ev.tabName || ev.name}
            </button>
          ))}
        </div>
      )}

      {/* Main Active Event Card with Illustration */}
      <div
        className="gold-frame"
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#FFFFFF",
          overflow: "hidden",
          boxShadow: "var(--shadow-card)",
          position: "relative",
          animation: "fadeInSlideUp 0.5s ease forwards",
        }}
      >
        {/* Event Watercolor Illustration with Parallax feel */}
        <div style={{ position: "relative", width: "100%", height: "240px", overflow: "hidden" }}>
          <img
            key={currentEvent.image}
            src={currentEvent.image}
            alt={currentEvent.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.8s ease",
            }}
          />
          {/* Subtle gradient overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60px",
              background: "linear-gradient(to top, rgba(255, 255, 255, 1), transparent)",
            }}
          />

          {/* Navigation Arrows on image (only if multiple events) */}
          {events.length > 1 && (
            <>
              <button
                onClick={prevEvent}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.85)",
                  border: "1px solid rgba(197, 160, 89, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
                aria-label="Previous Function"
              >
                <ChevronLeft size={18} color="#2D2522" />
              </button>

              <button
                onClick={nextEvent}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.85)",
                  border: "1px solid rgba(197, 160, 89, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
                aria-label="Next Function"
              >
                <ChevronRight size={18} color="#2D2522" />
              </button>
            </>
          )}
        </div>

        {/* Event Content Details */}
        <div style={{ padding: "20px 22px 28px", textAlign: "center" }}>
          {/* Badge & Event Title */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              borderRadius: "999px",
              background: "rgba(251, 240, 242, 0.8)",
              border: "1px solid rgba(197, 160, 89, 0.3)",
              marginBottom: "8px",
            }}
          >
            {getEventIcon(currentEvent.icon)}
            <span
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "10px",
                fontWeight: "600",
                letterSpacing: "1.5px",
                color: "var(--color-rose-deep)",
                textTransform: "uppercase",
              }}
            >
              {currentEvent.tagline}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "24px",
              fontWeight: "600",
              color: "var(--color-text-main)",
              letterSpacing: "1px",
              marginBottom: "12px",
            }}
          >
            {currentEvent.name}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12.5px",
              color: "var(--color-text-body)",
              lineHeight: "1.6",
              marginBottom: "20px",
              maxWidth: "340px",
              margin: "0 auto 20px",
            }}
          >
            {currentEvent.description}
          </p>

          {/* Key Event Details: Date, Time, Venue */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              background: "rgba(250, 246, 240, 0.7)",
              padding: "16px",
              borderRadius: "14px",
              border: "1px solid rgba(197, 160, 89, 0.2)",
              textAlign: "left",
            }}
          >
            {/* Date */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  marginBottom: "4px",
                }}
              >
                <Calendar size={14} color="#C5A059" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: "11px",
                    fontFamily: "var(--font-cinzel)",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                    color: "var(--color-gold-dark)",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  DATE:
                </span>
              </div>
              <p
                style={{
                  fontSize: "13.5px",
                  fontWeight: "600",
                  color: "var(--color-text-main)",
                  margin: 0,
                  paddingLeft: "21px",
                  lineHeight: "1.4",
                }}
              >
                {currentEvent.dateDisplay}
              </p>
            </div>

            {/* Timing */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  marginBottom: "4px",
                }}
              >
                <Clock size={14} color="#C5A059" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: "11px",
                    fontFamily: "var(--font-cinzel)",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                    color: "var(--color-gold-dark)",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  TIMING:
                </span>
              </div>
              <p
                style={{
                  fontSize: "13.5px",
                  fontWeight: "600",
                  color: "var(--color-text-main)",
                  margin: 0,
                  paddingLeft: "21px",
                  lineHeight: "1.4",
                }}
              >
                {currentEvent.time}
              </p>
            </div>

            {/* Venue */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  marginBottom: "4px",
                }}
              >
                <MapPin size={14} color="#C5A059" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: "11px",
                    fontFamily: "var(--font-cinzel)",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                    color: "var(--color-gold-dark)",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  VENUE:
                </span>
              </div>
              <p
                style={{
                  fontSize: "13.5px",
                  fontWeight: "600",
                  color: "var(--color-text-main)",
                  margin: 0,
                  paddingLeft: "21px",
                  lineHeight: "1.4",
                }}
              >
                {currentEvent.venue}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Dots (rendered only when more than 1 event) */}
      {events.length > 1 && (
        <div style={{ display: "flex", gap: "8px", marginTop: "18px" }}>
          {events.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveEventIndex(idx)}
              style={{
                width: safeIndex === idx ? "24px" : "8px",
                height: "8px",
                borderRadius: "999px",
                background: safeIndex === idx ? "#C5A059" : "rgba(197, 160, 89, 0.3)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-label={`Go to event ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
