import React, { useState, useEffect } from "react";
import { Check, Heart, Send, MessageCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { weddingData } from "../data/weddingData";
import { useInvitation } from "../context/InvitationContext";

export default function RSVPSection() {
  const { rsvp, couple } = weddingData;
  const { events, guestName, typeName } = useInvitation();

  const [formData, setFormData] = useState(() => ({
    name: guestName || "",
    attending: "yes",
    guestCount: "2",
    selectedEvents: events.map((e) => e.id),
    dietary: "",
    message: "",
  }));

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("wedding_rsvp_data");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({
          ...parsed,
          name: parsed.name || guestName || "",
        }));
        setIsSubmitted(true);
      } catch (e) {}
    } else if (guestName) {
      setFormData((prev) => ({ ...prev, name: guestName }));
    }
  }, [guestName]);

  useEffect(() => {
    // Keep selected events aligned with current invitation tier
    setFormData((prev) => {
      const validIds = events.map((e) => e.id);
      const filtered = prev.selectedEvents.filter((id) => validIds.includes(id));
      return {
        ...prev,
        selectedEvents: filtered.length > 0 ? filtered : validIds,
      };
    });
  }, [events]);

  const handleEventToggle = (eventId) => {
    setFormData((prev) => {
      const exists = prev.selectedEvents.includes(eventId);
      const updated = exists
        ? prev.selectedEvents.filter((id) => id !== eventId)
        : [...prev.selectedEvents, eventId];
      return { ...prev, selectedEvents: updated };
    });
  };

  const logRsvpToGoogleSheet = async (data) => {
    if (!rsvp.googleSheetWebhookUrl) return;
    try {
      const eventNameMap = {
        mehendi: "Mehendi Ki Shaam (11 Nov)",
        haldi: "Sunkissed Haldi (12 Nov)",
        sangeet: "Promise of Forever / Sangeet (12 Nov)",
        wedding: "The Wedding Ceremony (13 Nov)",
      };

      const selectedEventNames = (data.selectedEvents || [])
        .map((id) => eventNameMap[id] || id)
        .join(", ");

      const payload = {
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        name: data.name,
        attending: data.attending === "yes" ? "Joyfully Attending" : "Declined",
        guestCount: data.attending === "yes" ? data.guestCount : "0",
        events: data.attending === "yes" ? selectedEventNames : "None",
        dietary: data.dietary || "",
        message: data.message || "",
      };

      await fetch(rsvp.googleSheetWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("Google Sheet log:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    localStorage.setItem("wedding_rsvp_data", JSON.stringify(formData));
    setIsSubmitted(true);
    logRsvpToGoogleSheet(formData);

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C5A059", "#D98997", "#FAF6F0", "#BA5C6E", "#E6CA85"],
      });
    } catch (err) {}
  };

  const handleWhatsAppSend = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please enter your name before sending WhatsApp RSVP.");
      return;
    }

    localStorage.setItem("wedding_rsvp_data", JSON.stringify(formData));
    setIsSubmitted(true);
    logRsvpToGoogleSheet(formData);

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C5A059", "#D98997", "#FAF6F0", "#BA5C6E", "#E6CA85"],
      });
    } catch (err) {}

    const eventNameMap = {
      mehendi: "🌸 Mehendi Ki Shaam (11 Nov)",
      haldi: "🌼 Sunkissed Haldi (12 Nov)",
      sangeet: "💃 Promise of Forever / Sangeet (12 Nov)",
      wedding: "💍 The Wedding Ceremony (13 Nov)",
    };

    const selectedEventNames = formData.selectedEvents
      .map((id) => eventNameMap[id] || id)
      .join("\n• ");

    const statusText =
      formData.attending === "yes" ? "✨ Joyfully Attending" : "🙏 Regretfully Declining";

    let text =
      `*✦ WEDDING RSVP: Divya & Jayank ✦*\n\n` +
      `*Guest Name:* ${formData.name}\n` +
      `*Status:* ${statusText}\n` +
      (formData.attending === "yes"
        ? `*Number of Guests:* ${formData.guestCount}\n` +
          `*Attending Functions:*\n• ${selectedEventNames}\n`
        : "") +
      (formData.message ? `*Blessings & Notes:* ${formData.message}\n` : "");

    const url = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="rsvp"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "60px 16px 50px",
        background: "linear-gradient(180deg, #F5EDE4 0%, #FAF6F0 45%, #F5EBE1 100%)",
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
          ✦ PLEASE JOIN US ✦
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
          RSVP
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            color: "var(--color-text-muted)",
            marginTop: "4px",
          }}
        >
          {rsvp.deadline}
        </p>
      </div>

      {/* Main RSVP Card */}
      <div
        className="gold-frame gold-corner-accents"
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#FFFFFF",
          padding: "32px 22px",
          boxShadow: "var(--shadow-card)",
          borderRadius: "20px",
        }}
      >
        {isSubmitted ? (
          /* Confirmation State */
          <div style={{ textAlign: "center", padding: "10px 0" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #C5A059 0%, #D8B775 100%)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                boxShadow: "0 8px 20px rgba(197, 160, 89, 0.4)",
                marginBottom: "16px",
              }}
            >
              <Heart size={30} fill="#FFFFFF" />
            </div>

            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "26px",
                color: "var(--color-text-main)",
                letterSpacing: "1px",
                marginBottom: "6px",
              }}
            >
              Thank You, {formData.name}!
            </h3>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "var(--color-text-body)",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              {formData.attending === "yes"
                ? `Your RSVP has been joyfully received. We eagerly look forward to celebrating together in Zirakpur!`
                : "Thank you for letting us know. You will be dearly missed in our celebrations."}
            </p>

            <div
              style={{
                background: "rgba(251, 240, 242, 0.7)",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "20px",
                border: "1px solid rgba(197, 160, 89, 0.25)",
                textAlign: "left",
              }}
            >
              <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
                <strong>Attendance:</strong>{" "}
                {formData.attending === "yes" ? "Joyfully Attending" : "Declined"}
              </p>
              {formData.attending === "yes" && (
                <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "4px" }}>
                  <strong>Guest Count:</strong> {formData.guestCount}
                </p>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button
                onClick={handleWhatsAppSend}
                className="btn-gold-primary"
                style={{ width: "100%", background: "#25D366" }}
              >
                <MessageCircle size={16} /> Confirm on WhatsApp
              </button>

              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-gold-outline"
                style={{ width: "100%" }}
              >
                Edit Response
              </button>
            </div>
          </div>
        ) : (
          /* RSVP Form */
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {/* Guest Name */}
            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  color: "var(--color-text-main)",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                }}
              >
                YOUR FULL NAME *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anand & Sunita Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(197, 160, 89, 0.4)",
                  background: "rgba(250, 246, 240, 0.5)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--color-text-main)",
                  outline: "none",
                }}
              />
            </div>

            {/* Attendance Radios */}
            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  color: "var(--color-text-main)",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                WILL YOU BE ATTENDING? *
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: "yes" })}
                  style={{
                    padding: "10px 8px",
                    borderRadius: "10px",
                    border:
                      formData.attending === "yes"
                        ? "1px solid #C5A059"
                        : "1px solid rgba(197, 160, 89, 0.25)",
                    background:
                      formData.attending === "yes"
                        ? "rgba(251, 240, 242, 0.9)"
                        : "#FFFFFF",
                    color:
                      formData.attending === "yes"
                        ? "var(--color-rose-deep)"
                        : "var(--color-text-body)",
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "10px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  ✓ Joyfully Accepts
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: "no" })}
                  style={{
                    padding: "10px 8px",
                    borderRadius: "10px",
                    border:
                      formData.attending === "no"
                        ? "1px solid #C5A059"
                        : "1px solid rgba(197, 160, 89, 0.25)",
                    background:
                      formData.attending === "no"
                        ? "rgba(250, 246, 240, 0.9)"
                        : "#FFFFFF",
                    color:
                      formData.attending === "no"
                        ? "var(--color-text-main)"
                        : "var(--color-text-body)",
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "10px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  ✕ Regretfully Declines
                </button>
              </div>
            </div>

            {formData.attending === "yes" && (
              <>
                {/* Guest Count */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-cinzel)",
                      fontSize: "10px",
                      fontWeight: "700",
                      letterSpacing: "1.5px",
                      color: "var(--color-text-main)",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    NUMBER OF GUESTS ATTENDING
                  </label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {["1", "2", "3", "4", "5+"].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setFormData({ ...formData, guestCount: num })}
                        style={{
                          flex: 1,
                          padding: "8px 0",
                          borderRadius: "8px",
                          border:
                            formData.guestCount === num
                              ? "1px solid #C5A059"
                              : "1px solid rgba(197, 160, 89, 0.25)",
                          background:
                            formData.guestCount === num
                              ? "var(--color-gold-gradient)"
                              : "#FFFFFF",
                          color: formData.guestCount === num ? "#FFFFFF" : "#594E48",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Functions Attending */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-cinzel)",
                      fontSize: "10px",
                      fontWeight: "700",
                      letterSpacing: "1.5px",
                      color: "var(--color-text-main)",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                    }}
                  >
                    {events.length === 1 ? "FUNCTION ATTENDING" : "EVENTS YOU WILL ATTEND"}
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {events.map((ev) => {
                      const checked = formData.selectedEvents.includes(ev.id);
                      return (
                        <div
                          key={ev.id}
                          onClick={() => handleEventToggle(ev.id)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            background: checked
                              ? "rgba(251, 240, 242, 0.7)"
                              : "rgba(250, 246, 240, 0.5)",
                            border: checked
                              ? "1px solid rgba(197, 160, 89, 0.5)"
                              : "1px solid rgba(197, 160, 89, 0.2)",
                            cursor: "pointer",
                          }}
                        >
                          <span style={{ fontSize: "12px", color: "var(--color-text-main)" }}>
                            {ev.name}
                          </span>
                          <span
                            style={{
                              width: "18px",
                              height: "18px",
                              borderRadius: "4px",
                              border: "1px solid #C5A059",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: checked ? "#C5A059" : "transparent",
                            }}
                          >
                            {checked && <Check size={12} color="#FFF" />}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* Wishes / Dietary */}
            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  color: "var(--color-text-main)",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                }}
              >
                BLESSINGS / DIETARY NOTES (OPTIONAL)
              </label>
              <textarea
                rows={3}
                placeholder="Warm wishes for Divya & Jayank, or dietary requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(197, 160, 89, 0.4)",
                  background: "rgba(250, 246, 240, 0.5)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--color-text-main)",
                  outline: "none",
                  resize: "none",
                }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
              <button
                type="button"
                onClick={handleWhatsAppSend}
                style={{
                  width: "100%",
                  padding: "14px 20px",
                  borderRadius: "999px",
                  background: "#25D366",
                  color: "#FFFFFF",
                  border: "none",
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(37, 211, 102, 0.35)",
                  transition: "all 0.3s ease",
                }}
              >
                <MessageCircle size={16} /> SEND RSVP VIA WHATSAPP
              </button>

              <button
                type="submit"
                className="btn-gold-primary"
                style={{ width: "100%" }}
              >
                <Send size={15} /> SUBMIT RSVP ON WEBSITE
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
