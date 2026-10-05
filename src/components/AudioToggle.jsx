import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { audioEngine } from "../utils/audioEngine";

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const unsubscribe = audioEngine.addListener((playing) => {
      setIsPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  const toggleMusic = () => {
    audioEngine.toggle();
  };

  return (
    <button
      onClick={toggleMusic}
      className={`fixed top-5 right-5 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-md border transition-all duration-300 shadow-md ${
        isPlaying
          ? "bg-white/90 border-[#C5A059] text-[#916E2E] shadow-[#C5A059]/30"
          : "bg-white/80 border-[#C5A059]/40 text-[#736862] hover:border-[#C5A059]"
      }`}
      style={{
        position: "fixed",
        top: "18px",
        right: "18px",
        zIndex: 50,
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "8px 14px",
        borderRadius: "999px",
        background: isPlaying ? "rgba(255, 255, 255, 0.94)" : "rgba(255, 255, 255, 0.82)",
        backdropFilter: "blur(10px)",
        border: isPlaying ? "1px solid #C5A059" : "1px solid rgba(197, 160, 89, 0.4)",
        color: isPlaying ? "#916E2E" : "#736862",
        cursor: "pointer",
        boxShadow: isPlaying ? "0 4px 16px rgba(197, 160, 89, 0.3)" : "0 2px 8px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
      }}
      aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
      title={isPlaying ? "Mute Royal Ambience" : "Play Royal Ambience"}
    >
      {isPlaying ? (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: "2px", height: "14px" }}>
            <span style={{ width: "2px", height: "12px", background: "#C5A059", animation: "soundWave 1.2s infinite ease-in-out" }} />
            <span style={{ width: "2px", height: "16px", background: "#C5A059", animation: "soundWave 1.2s infinite ease-in-out 0.2s" }} />
            <span style={{ width: "2px", height: "8px", background: "#C5A059", animation: "soundWave 1.2s infinite ease-in-out 0.4s" }} />
          </div>
          <span style={{ fontFamily: "var(--font-cinzel)", fontSize: "10px", fontWeight: "600", letterSpacing: "1px" }}>
            MUSIC ON
          </span>
        </>
      ) : (
        <>
          <Music size={14} color="#C5A059" />
          <span style={{ fontFamily: "var(--font-cinzel)", fontSize: "10px", fontWeight: "600", letterSpacing: "1px" }}>
            MUSIC
          </span>
        </>
      )}

      <style>{`
        @keyframes soundWave {
          0%, 100% { height: 4px; }
          50% { height: 14px; }
        }
      `}</style>
    </button>
  );
}
