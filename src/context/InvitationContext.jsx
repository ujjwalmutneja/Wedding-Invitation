import React, { createContext, useContext, useState, useEffect } from "react";
import { getInvitationConfig } from "../utils/invitationConfig";

const InvitationContext = createContext({
  type: "weddingOnly",
  typeName: "The Wedding Ceremony",
  events: [],
  guestName: "",
});

export function InvitationProvider({ children }) {
  const [config, setConfig] = useState(() => getInvitationConfig());

  useEffect(() => {
    const handleUrlChange = () => {
      setConfig(getInvitationConfig());
    };

    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  return (
    <InvitationContext.Provider value={config}>
      {children}
    </InvitationContext.Provider>
  );
}

export function useInvitation() {
  return useContext(InvitationContext);
}
