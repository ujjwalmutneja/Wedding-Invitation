import React from "react";
import NightReceptionScene from "./NightReceptionScene";

export default function InvitationCardSection() {
  return (
    <section
      id="invitation-card"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#070B16",
        overflow: "hidden",
      }}
    >
      <NightReceptionScene isRevealed={true} />
    </section>
  );
}
