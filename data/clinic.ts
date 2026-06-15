// ============================================================================
//  CLINIC CONFIG  ·  This is the ONLY file you edit to spin up a new demo.
//  Change the values below, drop new images in /public/images, and the whole
//  site updates. Target: a personalised demo in under 90 minutes.
// ============================================================================

export const clinic = {
  // --- Identity -------------------------------------------------------------
  name: "Dr. Garima Sharma's Dental Clinic",
  shortName: "Dr. Garima's Dental",
  tagline: "Painless dentistry with a gentle touch, in Goyal Nagar, Indore",
  establishedYear: 2016,
  logo: "/images/dental-logo.png",

  // --- Theme (recolours the entire site) ------------------------------------
  // Use "R G B" space-separated values (no commas, no #).
  theme: {
    brand: "13 92 99", // deep clinical teal
    brandDark: "8 58 64",
    brandTint: "224 242 241", // soft seafoam for section backgrounds
    accent: "230 126 79", // warm coral for CTAs (conversion pop)
    ink: "23 37 42", // near-black body text
    paper: "250 251 250", // warm off-white page background
  },

  // --- Contact --------------------------------------------------------------
  phone: "+917828718388", // tel: link (no spaces)
  phoneDisplay: "+91 78287 18388",
  whatsapp: "917828718388", // wa.me number (country code, no +)
  email: "info@drgarimasharma.in",

  address: {
    line1: "G1, 285A, Healthcare Ganga Apartment",
    line2: "Bengali Square, Goyal Nagar, Indore, MP 452010",
    // Paste the clinic's embed src from Google Maps > Share > Embed a map.
    mapEmbedSrc:
      "https://www.google.com/maps?q=G1+285A+Healthcare+Ganga+Apartment+Bengali+Square+Goyal+Nagar+Indore+452010&output=embed",
    googleMapsUrl:
      "https://maps.google.com/?q=G1+285A+Healthcare+Ganga+Apartment+Bengali+Square+Goyal+Nagar+Indore+452010",
  },

  hours: [
    { days: "Mon – Sat", time: "10:00 AM – 8:00 PM" },
    { days: "Sunday", time: "10:00 AM – 1:00 PM" },
  ],

  social: {
    instagram: "#",
    facebook: "https://www.facebook.com/profile.php?id=61567060453645",
    youtube: "#",
  },

  // --- Hero -----------------------------------------------------------------
  hero: {
    eyebrow: "Trusted Dentist in Goyal Nagar, Indore",
    headline: "A confident smile, in caring and gentle hands.",
    sub: "Virtually painless treatments by Dr. Garima Sharma — skilled, reassuring, and committed to the highest hygiene standards.",
    image: "/images/dentist-operation.png",
    trustChips: ["Painless Procedures", "5-Star Rated", "Hygienic & Safe"],
  },

  // --- Clinic photo (used in the About section) ----------------------------
  clinicImage: "/images/clinic-outside.png",

  // --- Stats (animated counters) -------------------------------------------
  stats: [
    { value: 71, suffix: "+", label: "5-Star reviews" },
    { value: 2000, suffix: "+", label: "Happy patients" },
    { value: 98, suffix: "%", label: "Painless procedures" },
    { value: 5.0, suffix: "★", label: "Google rating", decimals: 1 },
  ],

  // --- Services (icon keys must match the map in components/Services.tsx) ----
  services: [
    {
      icon: "implant",
      title: "Dental Implants",
      desc: "Permanent, natural-looking replacements for missing teeth using titanium implants.",
      image: "/images/dental-implant.jpeg",
    },
    {
      icon: "root",
      title: "Painless Root Canal",
      desc: "Single-sitting RCT that saves infected teeth with minimal discomfort.",
      image: "/images/root-canal.jpg",
    },
    {
      icon: "braces",
      title: "Braces & Aligners",
      desc: "Metal, ceramic and invisible aligners to straighten teeth at any age.",
      image: "/images/braces.jpg",
    },
    {
      icon: "whitening",
      title: "Teeth Whitening",
      desc: "Professional cleaning, polishing and bleaching for a brighter smile.",
      image: "/images/teeth-whitening.jpg",
    },
    {
      icon: "crown",
      title: "Crowns & Bridges",
      desc: "Durable zirconia caps and bridges that restore strength and shape.",
      image: "/images/cowns-bridges.jpg",
    },
    {
      icon: "denture",
      title: "Dentures",
      desc: "Comfortable complete and partial dentures custom-fitted to your mouth.",
      image: "/images/dentures.jpg",
    },
    {
      icon: "smile",
      title: "Smile Makeover",
      desc: "Veneers and cosmetic dentistry to redesign your smile completely.",
      image: "/images/smile-makeover.png",
    },
    {
      icon: "kids",
      title: "Kids Dentistry",
      desc: "Gentle, friendly care that makes children look forward to the dentist.",
      image: "/images/kids-dentist.jpeg",
    },
    {
      icon: "surgery",
      title: "Wisdom Tooth & Surgery",
      desc: "Safe extractions and minor oral surgeries by experienced surgeons.",
      image: "/images/wisdom.png",
    },
  ],

  whyChooseUs: [
    {
      icon: "shield",
      title: "Strict Sterilisation",
      desc: "Instruments cleaned, sealed and sterilised before every single use.",
    },
    {
      icon: "feather",
      title: "Virtually Painless",
      desc: "Modern techniques and gentle hands keep treatments comfortable.",
    },
    {
      icon: "cpu",
      title: "Advanced Technology",
      desc: "Digital scans, CBCT imaging and single-sitting solutions.",
    },
    {
      icon: "badge",
      title: "Implant Certified",
      desc: "Dr. Garima holds an Osstem-certified qualification in oral implantology.",
    },
  ],

  doctors: [
    {
      name: "Dr. Garima Sharma",
      role: "Founder & Dental Surgeon",
      creds: "BDS (RUHS, 2015) · Certified Oral Implantologist",
      photo: "/images/dr-image.png",
    },
  ],

  // Before/after smile transformations.
  // Use { combined } for a single side-by-side image, or { before, after } for the interactive slider.
  gallery: [
    { combined: "/images/before-after-1.png", label: "Smile makeover" },
    { combined: "/images/before-after-2.png", label: "Aligners" },
    { combined: "/images/before-after-3.png", label: "Implants" },
  ],

  // Paste real Google reviews here — this is the highest-trust section.
  testimonials: [
    {
      name: "Verified Patient",
      text: "Overall a very good experience with root canal treatment. The doctor and staff made me feel comfortable and guided me properly. Treatment is going well and results are visible. Would definitely recommend to others dealing with any dental problem.",
      rating: 5,
    },
    {
      name: "Verified Patient",
      text: "Very happy with my visit. The dentist took time to explain the procedure and ensured I was comfortable the entire time. Treatment was painless and professional. I would definitely recommend this clinic to family and friends.",
      rating: 5,
    },
    {
      name: "Verified Patient",
      text: "Had a really smooth experience at Dr. Garima Sharma's Dental Clinic. I went for a root canal treatment and the doctor made the whole procedure painless and comfortable. She is patient, skilled, and very reassuring. The clinic maintains high hygiene standards and the staff is also very polite. Definitely recommend!",
      rating: 5,
    },
  ],

  faqs: [
    {
      q: "What is the consultation fee?",
      a: "The consultation fee is ₹200. Treatment costs are shared upfront after the consultation so there are no surprises.",
    },
    {
      q: "Do you offer painless treatments?",
      a: "Yes. We use modern anaesthetic techniques and gentle procedures so that most treatments, including root canals, are virtually painless.",
    },
    {
      q: "Are walk-ins accepted or do I need an appointment?",
      a: "Walk-ins are welcome, but we recommend booking an appointment so you spend less time waiting.",
    },
    {
      q: "Do you provide a cost estimate before treatment?",
      a: "Always. After your consultation we share a clear, written treatment plan and transparent pricing with no hidden charges.",
    },
    {
      q: "Is the clinic properly sterilised?",
      a: "We follow strict sterilisation protocols. Every instrument is cleaned, sealed and sterilised before each use for your safety.",
    },
  ],
};

export type Clinic = typeof clinic;
