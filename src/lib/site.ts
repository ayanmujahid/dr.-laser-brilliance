export const CLINIC = {
  name: "Dr. Laser",
  tagline: "Aesthetic Solutions",
  // Placeholders — replace with real clinic details when supplied.
  address: "[Clinic address to be provided]",
  phone: "[Phone number to be provided]",
  email: "[Email address to be provided]",
  instagram: "@yourhandle",
  instagramUrl: "https://instagram.com/",
  hours: [
    { day: "Monday – Friday", time: "[Hours to be confirmed]" },
    { day: "Saturday", time: "[Hours to be confirmed]" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/treatments", label: "Treatments" },
  { to: "/technology", label: "Technology" },
  { to: "/about", label: "About" },
  { to: "/results", label: "Results" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export type Treatment = {
  slug: string;
  name: string;
  category: "Facial Rejuvenation" | "Laser Hair Removal" | "Skin" | "Advanced Aesthetic";
  short: string;
  intro: string;
  forWho: string[];
  how: string;
  experience: string;
  areas: string[];
  downtime: string;
  technology: string;
  faqs: { q: string; a: string }[];
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "Laser Hair Removal",
    short: "Precision light-based hair reduction, tailored to your skin and area.",
    intro:
      "A light-based treatment designed to reduce unwanted hair over a course of sessions, delivered with handpieces selected for the treatment area and your individual assessment.",
    forWho: [
      "Those seeking a long-term reduction in unwanted hair",
      "Anyone tired of frequent shaving or waxing",
      "Patients looking for treatment of small or large areas",
    ],
    how: "Light energy is absorbed by the pigment in the hair and converted to heat, targeting the follicle during its active growth phase. Because hairs cycle at different times, a series of sessions is typically planned during consultation.",
    experience:
      "Most areas are completed quickly. Sensation is often described as a warm snap, with cooling used for comfort. Protective eyewear is worn throughout.",
    areas: ["Full body", "Face", "Underarms", "Bikini", "Legs", "Back", "Custom areas"],
    downtime:
      "Temporary redness or warmth in the treated area is common and usually settles within hours. Sun protection is advised.",
    technology: "Sharplight S4 Omnimax — laser hair removal handpieces",
    faqs: [
      {
        q: "How many sessions will I need?",
        a: "This varies by area, hair type and individual factors. A treatment plan is discussed during your consultation.",
      },
      {
        q: "Should I shave before my appointment?",
        a: "Pre-treatment guidance, including shaving and sun avoidance, is provided ahead of your appointment.",
      },
    ],
  },
  {
    slug: "btl-exion-face",
    name: "BTL EXION Face",
    category: "Advanced Aesthetic",
    short: "A non-invasive facial treatment supporting skin quality and firmness.",
    intro:
      "BTL EXION Face is a non-invasive aesthetic treatment designed to support skin rejuvenation, firmness, texture and overall skin quality.",
    forWho: [
      "Those looking to support skin firmness and texture",
      "Patients seeking a non-invasive facial option",
      "Anyone building a longer-term skin quality plan",
    ],
    how: "The platform combines energy-based technology with a targeted delivery approach intended to support the skin's own renewal processes. Settings and protocol are selected following assessment.",
    experience:
      "Treatments are typically comfortable and performed in-clinic. Most patients describe a warming sensation across the treated area.",
    areas: ["Full face", "Jawline", "Neck", "Décolletage"],
    downtime: "Mild redness or warmth may occur and typically settles shortly after treatment.",
    technology: "BTL EXION",
    faqs: [
      {
        q: "When will I notice a change?",
        a: "Skin responds gradually. Expected timelines are discussed at consultation, and individual results vary.",
      },
    ],
  },
  {
    slug: "fractional-rf",
    name: "Fractional RF",
    category: "Advanced Aesthetic",
    short: "Radiofrequency energy directed to support collagen and skin texture.",
    intro:
      "Advanced radiofrequency technology designed to stimulate collagen and improve the appearance of skin texture and firmness.",
    forWho: [
      "Those concerned with skin texture and laxity",
      "Patients seeking a treatment with a structured course plan",
    ],
    how: "Fractional radiofrequency delivers controlled energy into the skin in a patterned fashion, leaving surrounding tissue to support recovery while the treated zones respond.",
    experience:
      "A topical comfort protocol may be used. Sessions are typically scheduled in a short course discussed with you in advance.",
    areas: ["Face", "Neck", "Décolletage", "Selected body areas"],
    downtime:
      "Redness and a warm sensation are common for a short period after treatment. Aftercare guidance is provided.",
    technology: "BTL EXION — Fractional RF",
    faqs: [
      {
        q: "Is Fractional RF suitable for all skin types?",
        a: "Suitability is determined during your individual assessment.",
      },
    ],
  },
  {
    slug: "rf-face",
    name: "RF Face",
    category: "Facial Rejuvenation",
    short: "Radiofrequency facial treatment focused on firmness and definition.",
    intro:
      "A radiofrequency facial treatment intended to support skin firmness and a refined appearance across the face and jawline.",
    forWho: ["Those seeking a non-invasive facial treatment", "Patients focused on firmness and contour definition"],
    how: "Radiofrequency energy gently heats the skin's deeper layers with the intention of supporting collagen activity over a course of sessions.",
    experience: "Comfortable and relaxing for most patients, with a warm sensation throughout.",
    areas: ["Face", "Jawline", "Neck"],
    downtime: "Typically none to minimal; brief redness may occur.",
    technology: "Sharplight S4 Omnimax — RF Face",
    faqs: [
      { q: "How often are sessions scheduled?", a: "Session spacing is planned individually during consultation." },
    ],
  },
  {
    slug: "vpl-535",
    name: "VPL 535",
    category: "Skin",
    short: "Variable pulsed light for tone, pigmentation and vascular concerns.",
    intro:
      "VPL 535 uses variable pulsed light and is commonly selected where uneven tone, pigmentation or vascular concerns are the focus of a treatment plan.",
    forWho: ["Those with uneven skin tone", "Patients concerned with pigmentation or redness"],
    how: "Filtered light is delivered in controlled pulses so that energy is targeted toward specific concerns identified in your assessment.",
    experience: "Short sessions with protective eyewear worn. A light snapping sensation is common.",
    areas: ["Face", "Neck", "Décolletage", "Hands"],
    downtime: "Temporary redness is common; pigment may darken briefly before fading.",
    technology: "Sharplight S4 Omnimax — VPL 535",
    faqs: [{ q: "Can I wear makeup afterwards?", a: "Aftercare guidance is provided at your appointment." }],
  },
  {
    slug: "635",
    name: "635",
    category: "Advanced Aesthetic",
    short: "A dedicated 635 handpiece applied within personalized protocols.",
    intro:
      "The 635 handpiece forms part of the Sharplight S4 Omnimax platform and is applied within a personalized protocol determined at consultation.",
    forWho: ["Patients following a tailored multi-modality plan"],
    how: "Energy parameters are matched to your assessment and the goals set out in your treatment plan.",
    experience: "Treatment time depends on the area and protocol selected.",
    areas: ["Determined at consultation"],
    downtime: "Discussed as part of your personalized plan.",
    technology: "Sharplight S4 Omnimax — 635",
    faqs: [{ q: "Is this used on its own?", a: "It is typically applied as part of a wider personalized plan." }],
  },
  {
    slug: "skin-rejuvenation",
    name: "Skin Rejuvenation",
    category: "Facial Rejuvenation",
    short: "A tailored approach to overall skin quality, tone and radiance.",
    intro:
      "A personalized approach that may combine energy-based technologies to support overall skin quality, tone and radiance.",
    forWho: ["Those seeking overall skin quality improvement", "Patients wanting a considered, gradual approach"],
    how: "Your plan is built from an individual assessment, combining the technologies most appropriate for your skin.",
    experience: "Sessions are scheduled in a course, with progress reviewed along the way.",
    areas: ["Face", "Neck", "Décolletage"],
    downtime: "Varies by protocol; discussed in advance.",
    technology: "BTL EXION · Sharplight S4 Omnimax",
    faqs: [{ q: "Do I need a consultation first?", a: "Yes — every plan begins with an individual consultation." }],
  },
  {
    slug: "skin-texture",
    name: "Skin Texture",
    category: "Skin",
    short: "Focused protocols addressing roughness, fine lines and refinement.",
    intro:
      "Treatment plans focused on the appearance of skin texture, including roughness and fine lines, using appropriate energy-based technology.",
    forWho: ["Those concerned with uneven or rough texture", "Patients focused on refinement rather than change"],
    how: "Technology and settings are selected to target texture concerns identified during assessment.",
    experience: "Comfortable, in-clinic sessions with aftercare guidance provided.",
    areas: ["Face", "Neck", "Décolletage"],
    downtime: "Typically short-lived redness.",
    technology: "BTL EXION — Fractional RF",
    faqs: [{ q: "How gradual are changes?", a: "Skin responds over time; individual results vary." }],
  },
  {
    slug: "pigmentation",
    name: "Pigmentation",
    category: "Skin",
    short: "Light-based protocols for uneven tone and pigmented concerns.",
    intro:
      "Light-based treatment approaches for the appearance of uneven tone and pigmented concerns, planned around your individual assessment.",
    forWho: ["Those with sun-related uneven tone", "Patients seeking a considered pigmentation plan"],
    how: "Selected wavelengths target pigment within the skin, with parameters chosen for your skin type.",
    experience: "Short sessions; protective eyewear worn throughout.",
    areas: ["Face", "Neck", "Décolletage", "Hands"],
    downtime: "Pigment may darken briefly before fading. Sun protection is essential.",
    technology: "Sharplight S4 Omnimax — VPL 535",
    faqs: [{ q: "Will pigmentation return?", a: "Sun exposure and individual factors influence outcomes over time." }],
  },
  {
    slug: "acne-and-acne-scarring",
    name: "Acne & Acne Scarring",
    category: "Skin",
    short: "Structured plans for active concerns and the appearance of scarring.",
    intro:
      "Structured treatment plans addressing active concerns and the appearance of acne scarring, using appropriate technology and a staged approach.",
    forWho: ["Those with textural scarring", "Patients seeking a longer-term skin plan"],
    how: "A combination of light and radiofrequency technologies may be selected depending on your assessment.",
    experience: "Sessions are scheduled in a course with review points along the way.",
    areas: ["Face", "Back", "Chest"],
    downtime: "Varies by protocol; discussed before you begin.",
    technology: "BTL EXION · Sharplight S4 Omnimax",
    faqs: [{ q: "Can this be combined with skincare?", a: "Your plan will consider your existing routine." }],
  },
];

export const CATEGORIES = [
  {
    name: "Facial Rejuvenation",
    blurb: "Skin rejuvenation, RF facial treatments, collagen stimulation, texture, tone and firmness.",
  },
  { name: "Laser Hair Removal", blurb: "Full body, face, underarms, bikini, legs, back and custom areas." },
  { name: "Skin", blurb: "Pigmentation, acne and acne scarring, uneven tone, fine lines and texture." },
  {
    name: "Advanced Aesthetic",
    blurb: "Fractional RF, RF Face, VPL and customized multi-technology treatment plans.",
  },
] as const;
