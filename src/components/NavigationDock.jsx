import React, { useState, useEffect } from "react";
import {
  Heart,
  Calendar,
  Sparkles,
  MapPin,
  Image,
  CheckCircle,
  Home,
  BookOpen,
} from "lucide-react";

export default function NavigationDock({ activeSection, onNavigate }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "welcome", label: "Home", icon: <Home size={15} /> },
    { id: "wedding-date", label: "Date", icon: <Calendar size={15} /> },
    { id: "functions", label: "Events", icon: <BookOpen size={15} /> },
    { id: "venue", label: "Venue", icon: <MapPin size={15} /> },
    { id: "story", label: "Story", icon: <Heart size={15} /> },
    { id: "gallery", label: "Photos", icon: <Image size={15} /> },
    { id: "rsvp", label: "RSVP", icon: <CheckCircle size={15} /> },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 45,
        width: "calc(100% - 32px)",
        maxWidth: "440px",
      }}
    >
      {/* Mini Progress Bar Line on Top of dock */}
      <div
        style={{
          width: "100%",
          height: "3px",
          background: "rgba(197, 160, 89, 0.2)",
          borderRadius: "999px",
          overflow: "hidden",
          marginBottom: "6px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${scrollProgress}%`,
            background: "var(--color-gold-gradient)",
            transition: "width 0.15s ease-out",
          }}
        />
      </div>

      {/* Glassmorphic Nav Pill */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          background: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(16px)",
          borderRadius: "999px",
          padding: "6px 8px",
          border: "1px solid rgba(197, 160, 89, 0.4)",
          boxShadow: "0 10px 30px rgba(45, 37, 34, 0.18), 0 0 16px rgba(197, 160, 89, 0.15)",
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                padding: "6px 8px",
                borderRadius: "999px",
                background: isActive ? "rgba(251, 240, 242, 0.9)" : "transparent",
                border: isActive ? "1px solid rgba(197, 160, 89, 0.4)" : "1px solid transparent",
                color: isActive ? "var(--color-gold-dark)" : "#736862",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              title={item.label}
              aria-label={item.label}
            >
              {item.icon}
              <span
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "8px",
                  fontWeight: isActive ? "700" : "500",
                  letterSpacing: "0.5px",
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
