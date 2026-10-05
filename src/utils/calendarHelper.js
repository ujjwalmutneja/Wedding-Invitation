/**
 * Helper to generate Google Calendar links and downloadable .ics files
 */

export function generateGoogleCalendarUrl({ title, description, location, startDate, endDate }) {
  // Format: YYYYMMDDTHHmmSSZ
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toISOString().replace(/-|:|\.\d\d\d/g, "");
  };

  const start = formatDate(startDate);
  const end = formatDate(endDate);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${start}/${end}`,
    details: description,
    location: location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile({ title, description, location, startDate, endDate }) {
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toISOString().replace(/-|:|\.\d\d\d/g, "");
  };

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Divya and Jayank//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `DTSTART:${formatDate(startDate)}`,
    `DTEND:${formatDate(endDate)}`,
    `STATUS:CONFIRMED`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "Divya_Jayank_Wedding_Celebration.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
