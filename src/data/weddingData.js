/**
 * WEDDING INVITATION CONFIGURATION & CONTENT DATA
 * All wedding-specific information is centralized here for easy customization.
 */

export const weddingData = {
  // Couple Information
  couple: {
    bride: {
      firstName: "Divya",
      fullName: "Divya",
      parents: "Mrs. & Mr. Khurana",
      grandparents: "Late Smt. & Shri Khurana",
    },
    groom: {
      firstName: "Jayank",
      fullName: "Jayank",
      parents: "Mrs. & Mr. Malhotra",
      grandparents: "Smt. & Shri Malhotra",
    },
    monogram: "D & J",
    hashtag: "#DivyaAndJayank",
    heroImage: "/images/couple-hero.png",
    storyImage: "/images/two-paths-couple.jpg?v=20261005_1",
    floralArch: "/images/floral-arch.png",
    waxSeal: "/images/wax-seal.png",
  },

  // Wedding Date & Time
  date: {
    dayOfWeek: "FRIDAY",
    dayNumber: "13",
    monthName: "NOVEMBER",
    year: "2026",
    fullDateDisplay: "Friday, 13th November 2026",
    ceremonyTime: "4:30 PM Onwards",
    targetIso: "2026-11-13T16:30:00+05:30",
    auspiciousText: "॥ शुभ विवाह ॥",
    blessingSanskrit: "॥ ॐ श्री गणेशाय नमः ॥",
  },

  // Welcome / Invitation Message
  invitation: {
    leadIn: "Together with their families",
    subLead: "cordially invite you to share in the celebration of their love and union",
    poeticLine: "Two souls, one destined journey, and a lifetime of love to begin...",
    blessingLine: "As we embark on this sacred chapter, your presence, love, and blessings will make our celebration truly complete.",
    hostLine: "Together with our loving families",
  },

  // Wedding Functions / Itinerary
  events: [
    {
      id: "mehendi",
      name: "Mehendi Ki Shaam",
      tabName: "Mehendi",
      tagline: "Henna, Folk Tunes & High Tea",
      dateDisplay: "11th November, 2026 | Wednesday",
      time: "3:00 pm onwards",
      venue: "Residence, G-701, Jaipuria Sunrise Greens, VIP Road, Zirakpur",
      dressCode: "Pastel Florals & Mint Greens",
      image: "/images/event-mehendi-v2.jpg",
      description:
        "An enchanting afternoon of delicate henna artistry, sweet traditional melodies, vibrant treats, and laughter under blossoming floral canopies.",
      icon: "Sparkles",
    },
    {
      id: "haldi",
      name: "Sunkissed Haldi",
      tabName: "Haldi",
      tagline: "Auspicious Hues & Petal Showers",
      dateDisplay: "12th November, 2026 | Thursday",
      time: "10:00 am onwards",
      venue: "The Kleo Hotel, Chandigarh - Ambala Highway, Zirakpur",
      dressCode: "Sunlit Yellows, Ochres & Ivory",
      image: "/images/event-haldi-v2.jpg",
      description:
        "A joyous morning ritual of love and blessings, fresh turmeric paste, marigold showers, traditional dhol beats, and sunny celebrations.",
      icon: "Sun",
    },
    {
      id: "sangeet",
      name: "Promise of Forever",
      tabName: "Sangeet",
      tagline: "Engagement & Sangeet",
      dateDisplay: "12th November, 2026 | Thursday",
      time: "7:00 pm onwards",
      venue: "The Kleo Hotel, Chandigarh - Ambala Highway, Zirakpur",
      dressCode: "Glamorous Royal Indian / Indo-Western",
      image: "/images/event-sangeet-v2.jpg",
      description:
        "A magical evening filled with soulful music, family dance performances, dazzling lights, and an exquisite royal feast under the stars.",
      icon: "Music",
    },
    {
      id: "wedding",
      name: "The Wedding Ceremony",
      tabName: "Wedding",
      tagline: "Sacred Pheras & Auspicious Vows",
      dateDisplay: "13th November, 2026 | Friday",
      time: "4:30 pm onwards",
      venue: "Park Plaza, Next to Cosmo Mall, Chandigarh - Ambala Highway, Zirakpur",
      dressCode: "Royal Pastels & Heritage Finery",
      image: "/images/event-wedding.jpg",
      description:
        "Sacred vows whispered as the sunset bathes the wedding mandap in warm golden light, sealing our eternal bond.",
      icon: "HeartHandshake",
    },
  ],

  // Venue Information
  venue: {
    name: "Park Plaza, Next to Cosmo Mall",
    city: "Zirakpur, Punjab",
    address: "Chandigarh - Ambala Highway, Zirakpur, Punjab 140603",
    description:
      "Conveniently situated on the Chandigarh-Ambala Highway adjacent to Cosmo Mall, Park Plaza Zirakpur embodies timeless elegance, grand banquet halls, and warm hospitality for our wedding celebrations.",
    image: "/images/venue-palace.jpg",
    googleMapsUrl: "https://maps.google.com/?q=Park+Plaza+Zirakpur+Chandigarh+Ambala+Highway",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.5!2d76.82!3d30.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM4JzI0LjAiTiA3NsKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    travelNotes: [
      {
        icon: "Plane",
        title: "By Air",
        desc: "Shaheed Bhagat Singh International Airport, Chandigarh (IXC) — Approx. 20 mins drive to venue.",
      },
      {
        icon: "Train",
        title: "By Train",
        desc: "Chandigarh Railway Station — Approx. 15 mins drive to the venue.",
      },
      {
        icon: "ShieldCheck",
        title: "Guest Hospitality",
        desc: "Complimentary valet parking and dedicated hospitality desk at the main entrance.",
      },
    ],
  },

  // Couple Story / Love Journey
  story: {
    tagline: "OUR STORY",
    title: "How Two Paths Became One Forever",
    quote: "“In you, I found my quiet haven, my favorite laugh, and my greatest adventure.”",
    paragraphs: [
      "What began as a quiet conversation turned into countless shared sunsets, heartfelt laughter over warm cups of chai, and an unspoken knowing that our worlds were always meant to intertwine.",
      "Through adventures and quiet moments, we grew not just in love, but as each other's deepest confidant and dearest friend.",
      "Now, surrounded by the warmth of our families and dearest friends, we step together into a lifetime of endless joy, mutual respect, and unconditional love.",
    ],
    image: "/images/two-paths-couple.jpg?v=20261005_1",
  },

  // Gallery (Moments of Love)
  gallery: [
    {
      url: "/images/gallery-couple-embrace-v2.jpg",
      caption: "Cherished Embrace",
      subtitle: "In your warmth, I found my forever home",
    },
    {
      url: "/images/gallery-archway-walk.jpg",
      caption: "Walking Into Forever",
      subtitle: "Hand in hand towards a lifetime of happiness",
    },
    {
      url: "/images/gallery-festive-smiles.jpg",
      caption: "Joy & Togetherness",
      subtitle: "Every smile begins and ends with you",
    },
    {
      url: "/images/gallery-better-together.jpg",
      caption: "Better Together",
      subtitle: "A lifetime of love & togetherness",
    },
    {
      url: "/images/gallery-bench-crest.jpg",
      caption: "A Love That Blossoms",
      subtitle: "Divya & Jayank's forever journey",
    },
  ],

  // RSVP details
  rsvp: {
    deadline: "Kindly respond by October 31, 2026",
    contactName: "Wedding Hospitality Desk",
    phone: "+91 82648 90587",
    email: "celebrate@divyaandjayank.com",
    whatsappNumber: "918264890587",
    whatsappMessage: "Hello! We are delighted to RSVP for Divya & Jayank's Wedding Celebrations.",
    googleSheetUrl: "https://docs.google.com/spreadsheets/d/1vDmJ93js-TexYU0R7Q8BL7AYjEq4RxHiwQwjdiVw1K0/edit?usp=sharing",
    googleSheetWebhookUrl: "https://script.google.com/macros/s/AKfycbypsFQ0_xqKUxpYdSMlNhcDC0H4XhefgIodtzcz636pS3coivZaUTAMSFk4OOfO4XTa/exec",
  },

  // Final screen
  closing: {
    title: "With Love & Gratitude",
    quote: "“We cannot wait to celebrate the most cherished chapter of our lives in your warm presence.”",
    signature: "Divya & Jayank",
    families: "The Khurana & Malhotra Families",
  },

  // Calendar Event Details
  calendar: {
    title: "Divya & Jayank's Wedding Celebrations",
    description: "Wedding celebrations of Divya & Jayank at Park Plaza, Zirakpur.",
    location: "Park Plaza, Next to Cosmo Mall, Chandigarh - Ambala Highway, Zirakpur",
    startDate: "2026-11-13T16:00:00",
    endDate: "2026-11-14T02:00:00",
  },
};
