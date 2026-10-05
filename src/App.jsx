import React, { useState, useEffect } from "react";
import PetalsCanvas from "./components/PetalsCanvas";
import AudioToggle from "./components/AudioToggle";
import EnvelopeOpeningExperience from "./components/EnvelopeOpeningExperience";
import WeddingDateSection from "./components/WeddingDateSection";
import FunctionsSection from "./components/FunctionsSection";
import VenueSection from "./components/VenueSection";
import CoupleStorySection from "./components/CoupleStorySection";
import GallerySection from "./components/GallerySection";
import RSVPSection from "./components/RSVPSection";
import FinalScreenSection from "./components/FinalScreenSection";

export default function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);

  useEffect(() => {
    if (!isEnvelopeOpened) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [isEnvelopeOpened]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="invitation-app-wrapper paper-texture"
      style={{
        overflowX: "hidden",
        minHeight: "100vh",
        maxHeight: !isEnvelopeOpened ? "100vh" : "none",
        overflowY: !isEnvelopeOpened ? "hidden" : "visible",
      }}
    >
      {/* Falling Watercolor Rose Petals & Golden Sparkles (STRICTLY ACTIVE ONLY AFTER ENVELOPE IS OPENED) */}
      {isEnvelopeOpened && <PetalsCanvas enabled={true} />}

      {/* Floating Audio Controller (STRICTLY ACTIVE ONLY AFTER ENVELOPE IS OPENED) */}
      {isEnvelopeOpened && <AudioToggle />}

      {/* 1. Realistic Closed Sage Green 3D Gatefold Invitation with Golden Light & Curtain Reveal */}
      <EnvelopeOpeningExperience
        onOpened={() => setIsEnvelopeOpened(true)}
        onReplay={() => {
          setIsEnvelopeOpened(false);
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
        onScrollToNext={() => scrollToSection("wedding-date")}
      />

      {/* Subsequent sections rendered and accessible once unlocked */}
      {isEnvelopeOpened && (
        <>
          {/* 2. Dedicated Wedding Date & Live Countdown Section */}
          <WeddingDateSection />

          {/* 4. Celebration Itinerary / Functions */}
          <FunctionsSection />

          {/* 5. Palace Venue & Directions */}
          <VenueSection />

          {/* 6. Couple Story & Love Journey */}
          <CoupleStorySection />

          {/* 7. Interactive Photo Gallery */}
          <GallerySection />

          {/* 8. Interactive RSVP Form */}
          <RSVPSection />

          {/* 9. Final Wedding Blessing & Quick Actions */}
          <FinalScreenSection
            onScrollToTop={() => scrollToSection("welcome")}
            onScrollToRSVP={() => scrollToSection("rsvp")}
          />
        </>
      )}
    </div>
  );
}
