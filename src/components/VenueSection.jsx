import React from "react";
import { MapPin, Navigation, Plane, Train, ShieldCheck, ExternalLink } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function VenueSection() {
  const { venue } = weddingData;

  const renderTravelIcon = (iconName) => {
    switch (iconName) {
      case "Plane":
        return <Plane size={16} color="#C5A059" />;
      case "Train":
        return <Train size={16} color="#C5A059" />;
      case "ShieldCheck":
      default:
        return <ShieldCheck size={16} color="#C5A059" />;
    }
  };

  return (
    <section
      id="venue"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "60px 16px 50px",
        background: "radial-gradient(circle at 50% 30%, #FFFDF9 0%, #FAF6F0 70%, #F5EBE1 100%)",
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
          ✦ CELEBRATION DESTINATION ✦
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
          The Wedding Venue
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            color: "var(--color-text-muted)",
            marginTop: "4px",
          }}
        >
          {venue.city}
        </p>
      </div>

      {/* Main Palace Card */}
      <div
        className="gold-frame"
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#FFFFFF",
          overflow: "hidden",
          boxShadow: "var(--shadow-card)",
          position: "relative",
        }}
      >
        {/* Hand-painted Venue Illustration */}
        <div style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden" }}>
          <img
            src={venue.image}
            alt={venue.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "70px",
              background: "linear-gradient(to top, rgba(255, 255, 255, 1), transparent)",
            }}
          />
        </div>

        {/* Venue Info */}
        <div style={{ padding: "20px 22px 28px", textAlign: "center" }}>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "26px",
              fontWeight: "600",
              color: "var(--color-text-main)",
              letterSpacing: "1.5px",
              marginBottom: "4px",
            }}
          >
            {venue.name}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "22px",
              color: "var(--color-gold-dark)",
              marginBottom: "12px",
            }}
          >
            {venue.tagline}
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              color: "var(--color-text-body)",
              lineHeight: "1.6",
              marginBottom: "18px",
            }}
          >
            {venue.description}
          </p>

          {/* Address Box */}
          <div
            style={{
              background: "rgba(251, 240, 242, 0.7)",
              borderRadius: "14px",
              padding: "16px",
              border: "1px solid rgba(197, 160, 89, 0.3)",
              marginBottom: "20px",
              textAlign: "left",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <MapPin size={18} color="#C5A059" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <span
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "10px",
                  letterSpacing: "1px",
                  color: "var(--color-text-muted)",
                }}
              >
                LOCATION ADDRESS:
              </span>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  color: "var(--color-text-main)",
                  marginTop: "2px",
                  lineHeight: "1.5",
                }}
              >
                {venue.address}
              </p>
            </div>
          </div>

          {/* Clear "VIEW ON GOOGLE MAPS" Button */}
          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-primary"
            style={{ width: "100%", textDecoration: "none" }}
          >
            <Navigation size={15} /> VIEW ON GOOGLE MAPS
          </a>

          {/* Travel & Hospitality Notes */}
          <div style={{ marginTop: "24px", textAlign: "left" }}>
            <p
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "var(--color-gold-dark)",
                textTransform: "uppercase",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              TRAVEL &amp; HOSPITALITY
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {venue.travelNotes.map((note, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    background: "rgba(250, 246, 240, 0.6)",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    border: "1px solid rgba(197, 160, 89, 0.18)",
                  }}
                >
                  <div style={{ marginTop: "2px", flexShrink: 0 }}>
                    {renderTravelIcon(note.icon)}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        fontSize: "11px",
                        fontWeight: "600",
                        color: "var(--color-text-main)",
                      }}
                    >
                      {note.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "11px",
                        color: "var(--color-text-muted)",
                        marginTop: "2px",
                        lineHeight: "1.4",
                      }}
                    >
                      {note.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
