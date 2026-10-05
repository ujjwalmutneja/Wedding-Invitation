import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function GallerySection() {
  const { gallery } = weddingData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Touch swipe handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 45;

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const nextLightbox = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevLightbox = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      if (lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev + 1) % gallery.length);
      } else {
        nextPhoto();
      }
    } else if (distance < -minSwipeDistance) {
      if (lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      } else {
        prevPhoto();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        if (lightboxIndex !== null) {
          setLightboxIndex((prev) => (prev + 1) % gallery.length);
        } else {
          nextPhoto();
        }
      } else if (e.key === "ArrowLeft") {
        if (lightboxIndex !== null) {
          setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
        } else {
          prevPhoto();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, gallery.length]);

  return (
    <section
      id="gallery"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "60px 16px 50px",
        background: "radial-gradient(circle at 50% 50%, #FAF5EE 0%, #F5EBE1 70%, #EFE3D5 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "22px" }}>
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
          ✦ CHERISHED MOMENTS ✦
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
          Moments of Love
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            color: "var(--color-text-muted)",
            marginTop: "4px",
          }}
        >
          Swipe or tap any photograph to expand ({gallery.length} Photos)
        </p>
      </div>

      {/* Main Interactive Polaroid / Royal Frame Carousel */}
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          position: "relative",
        }}
      >
        <div
          className="gold-frame gold-corner-accents"
          style={{
            background: "#FFFFFF",
            padding: "16px 16px 22px",
            boxShadow: "var(--shadow-card)",
            borderRadius: "20px",
          }}
        >
          {/* Main Photo Display */}
          <div
            onClick={() => setLightboxIndex(currentIndex)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              position: "relative",
              width: "100%",
              height: "400px",
              borderRadius: "14px",
              overflow: "hidden",
              cursor: "pointer",
              background: "#F5EBE1",
              userSelect: "none",
            }}
          >
            <img
              key={gallery[currentIndex].url}
              src={gallery[currentIndex].url}
              alt={gallery[currentIndex].caption}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "opacity 0.4s ease",
              }}
            />

            {/* Tap to expand hint */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "rgba(0, 0, 0, 0.45)",
                backdropFilter: "blur(6px)",
                color: "#FFFFFF",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              }}
            >
              <Maximize2 size={15} />
            </div>

            {/* Photo Counter Badge */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                background: "rgba(30, 24, 20, 0.65)",
                backdropFilter: "blur(6px)",
                color: "#F4E8DB",
                borderRadius: "12px",
                padding: "3px 9px",
                fontSize: "11px",
                fontFamily: "var(--font-cinzel)",
                letterSpacing: "1px",
              }}
            >
              {currentIndex + 1} / {gallery.length}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(197, 160, 89, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} color="#2D2522" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(197, 160, 89, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
              }}
              aria-label="Next image"
            >
              <ChevronRight size={22} color="#2D2522" />
            </button>
          </div>

          {/* Caption & Subtitle */}
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "20px",
                fontWeight: "600",
                color: "var(--color-text-main)",
                letterSpacing: "1px",
              }}
            >
              {gallery[currentIndex].caption}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "var(--color-gold-dark)",
                marginTop: "3px",
                fontStyle: "italic",
              }}
            >
              {gallery[currentIndex].subtitle}
            </p>
          </div>
        </div>

        {/* Thumbnail Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "16px",
            overflowX: "auto",
            padding: "4px",
          }}
        >
          {gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "10px",
                overflow: "hidden",
                cursor: "pointer",
                border:
                  currentIndex === idx
                    ? "2px solid #C5A059"
                    : "1px solid rgba(197, 160, 89, 0.3)",
                opacity: currentIndex === idx ? 1 : 0.6,
                transition: "all 0.3s ease",
                transform: currentIndex === idx ? "scale(1.08)" : "scale(1)",
                boxShadow:
                  currentIndex === idx
                    ? "0 4px 12px rgba(197, 160, 89, 0.4)"
                    : "none",
                flexShrink: 0,
              }}
            >
              <img
                src={img.url}
                alt={img.caption}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(15, 12, 10, 0.96)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            animation: "fadeIn 0.25s ease",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "50%",
              width: "42px",
              height: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF",
              cursor: "pointer",
              zIndex: 10,
            }}
            aria-label="Close photo"
          >
            <X size={22} />
          </button>

          {/* Lightbox Prev button */}
          <button
            onClick={prevLightbox}
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.25)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF",
              cursor: "pointer",
              zIndex: 10,
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Lightbox Next button */}
          <button
            onClick={nextLightbox}
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.25)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF",
              cursor: "pointer",
              zIndex: 10,
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={26} />
          </button>

          {/* Full Photo */}
          <img
            src={gallery[lightboxIndex].url}
            alt={gallery[lightboxIndex].caption}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "88vw",
              maxHeight: "72vh",
              objectFit: "contain",
              borderRadius: "14px",
              border: "2px solid rgba(197, 160, 89, 0.5)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
            }}
          />

          {/* Caption & Counter in Lightbox */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ textAlign: "center", marginTop: "16px", color: "#FFF" }}
          >
            <p
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "12px",
                letterSpacing: "2px",
                color: "#E6CA85",
                marginBottom: "4px",
              }}
            >
              {lightboxIndex + 1} OF {gallery.length}
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                letterSpacing: "1px",
              }}
            >
              {gallery[lightboxIndex].caption}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.75)",
                marginTop: "4px",
              }}
            >
              {gallery[lightboxIndex].subtitle}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
