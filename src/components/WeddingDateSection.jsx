import React, { useState, useEffect } from "react";
import { Calendar, Clock, Download, ExternalLink, Bell } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { generateGoogleCalendarUrl, downloadIcsFile } from "../utils/calendarHelper";

export default function WeddingDateSection() {
  const { date, venue, calendar } = weddingData;

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(date.targetIso).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [date.targetIso]);

  const handleAddToGoogleCalendar = () => {
    const url = generateGoogleCalendarUrl(calendar);
    window.open(url, "_blank");
  };

  const handleDownloadIcs = () => {
    downloadIcsFile(calendar);
  };

  return (
    <section
      id="wedding-date"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        background: "radial-gradient(circle at 50% 50%, #FAF5EE 0%, #F5EBE1 60%, #EFE3D5 100%)",
        textAlign: "center",
      }}
    >
      {/* Decorative Frame */}
      <div
        className="gold-frame gold-corner-accents"
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "40px 24px",
          background: "#FFFFFF",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Top Tagline */}
        <p
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "4px",
            color: "var(--color-gold-dark)",
            marginBottom: "12px",
            textTransform: "uppercase",
          }}
        >
          ✦ SAVE THE DATE ✦
        </p>

        {/* Day of week */}
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            letterSpacing: "4px",
            color: "var(--color-text-muted)",
            textTransform: "uppercase",
            marginBottom: "4px",
          }}
        >
          {date.dayOfWeek}
        </p>

        {/* Big Majestic Number Date */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "2px solid rgba(197, 160, 89, 0.5)",
            background: "linear-gradient(135deg, #FFFDF9 0%, #FAF2E8 100%)",
            boxShadow: "0 8px 24px rgba(197, 160, 89, 0.2)",
            margin: "12px auto",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "64px",
              fontWeight: "600",
              color: "var(--color-text-main)",
              lineHeight: "1",
            }}
          >
            {date.dayNumber}
          </span>
        </div>

        {/* Month & Year */}
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "26px",
            fontWeight: "600",
            letterSpacing: "4px",
            color: "var(--color-text-main)",
            marginTop: "6px",
            textTransform: "uppercase",
          }}
        >
          {date.monthName} {date.year}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "var(--color-text-body)",
            marginTop: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <Clock size={14} color="#C5A059" /> {date.ceremonyTime}
        </p>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            color: "var(--color-text-muted)",
            marginTop: "4px",
          }}
        >
          {venue.name}, {venue.city}
        </p>

        {/* Subtle separator */}
        <div
          style={{
            width: "60px",
            height: "1px",
            background: "var(--color-gold-gradient)",
            margin: "24px auto 20px",
          }}
        />

        {/* Live Countdown Grid */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "10px",
              letterSpacing: "2.5px",
              color: "var(--color-gold-dark)",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            COUNTING DOWN TO FOREVER
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "8px",
              maxWidth: "340px",
              margin: "0 auto",
            }}
          >
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(251, 240, 242, 0.7)",
                  borderRadius: "12px",
                  padding: "10px 4px",
                  border: "1px solid rgba(197, 160, 89, 0.25)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "var(--color-text-main)",
                    lineHeight: "1.1",
                  }}
                >
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "8px",
                    letterSpacing: "1.5px",
                    color: "var(--color-text-muted)",
                    marginTop: "3px",
                  }}
                >
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Action Button */}
        <div
          style={{
            marginTop: "26px",
          }}
        >
          <button
            onClick={handleAddToGoogleCalendar}
            className="btn-gold-primary"
            style={{ width: "100%" }}
          >
            <Calendar size={15} /> Add to Google Calendar
          </button>
        </div>
      </div>
    </section>
  );
}
