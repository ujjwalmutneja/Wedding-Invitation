import { weddingData } from "../data/weddingData.js";

export const INVITATION_TYPES = {
  WEDDING_ONLY: "weddingOnly",
  SANGEET_AND_WEDDING: "sangeetAndWedding",
  ALL: "all",
};

/**
 * Parses query parameters from window.location.search
 * Supported queries:
 * 1. Default (no query) or ?invite=weddingOnly -> Wedding Ceremony only
 * 2. ?invite=sangeetAndWedding -> Sangeet + Wedding
 * 3. ?invite=all -> All 4 functions (Mehendi, Haldi, Sangeet, Wedding)
 * 
 * Also accepts:
 * - ?guest=Guest+Name (or ?name=...) to personalize the guest name
 */
export function getInvitationConfig() {
  if (typeof window === "undefined") {
    return {
      type: INVITATION_TYPES.WEDDING_ONLY,
      typeName: "Wedding Ceremony",
      events: weddingData.events.filter((e) => e.id === "wedding"),
      guestName: "",
    };
  }

  const params = new URLSearchParams(window.location.search);
  
  // Look for invite / type / events / version parameter
  const rawInvite = (
    params.get("invite") ||
    params.get("type") ||
    params.get("events") ||
    params.get("version") ||
    ""
  ).toLowerCase().trim();

  // Guest name parameter
  const guestName = (
    params.get("guest") ||
    params.get("name") ||
    params.get("to") ||
    ""
  ).trim();

  let type = INVITATION_TYPES.WEDDING_ONLY; // DEFAULT

  if (rawInvite === "all" || rawInvite === "complete" || rawInvite === "full") {
    type = INVITATION_TYPES.ALL;
  } else if (
    rawInvite === "sangeetandwedding" ||
    rawInvite === "sangeet-wedding" ||
    rawInvite === "sangeet_wedding" ||
    rawInvite === "sangeet,wedding" ||
    rawInvite === "both"
  ) {
    type = INVITATION_TYPES.SANGEET_AND_WEDDING;
  } else {
    // Default is weddingOnly (also catches "weddingonly", "wedding", or empty string)
    type = INVITATION_TYPES.WEDDING_ONLY;
  }

  // Filter events based on type
  let filteredEvents = [];
  let typeName = "The Wedding Ceremony";

  if (type === INVITATION_TYPES.WEDDING_ONLY) {
    filteredEvents = weddingData.events.filter((e) => e.id === "wedding");
    typeName = "The Wedding Ceremony";
  } else if (type === INVITATION_TYPES.SANGEET_AND_WEDDING) {
    filteredEvents = weddingData.events.filter(
      (e) => e.id === "sangeet" || e.id === "wedding"
    );
    typeName = "Sangeet & Wedding Celebrations";
  } else {
    filteredEvents = [...weddingData.events];
    typeName = "Wedding Celebrations";
  }

  return {
    type,
    typeName,
    events: filteredEvents,
    guestName,
  };
}
