// Centralized site content. Edit copy and figures here, components read from this file
// so the impact statistics, service list, and process steps stay easy to update later.

export const site = {
  name: "GreenLoop Bio Resources",
  shortName: "GreenLoop",
  tagline: "From Waste Today. To Energy Tomorrow. To A Legacy Forever.",
  description:
    "GreenLoop Bio Resources collects used cooking oil from restaurants, hotels, cloud kitchens, namkeen and sweet manufacturers, caterers, food courts, and institutional cafeterias across Indore district, and supplies it to a partner biodiesel plant.",
  phone: "+91 92326 37874",
  phoneHref: "tel:+919232637874",
  // Leave email or address as "" to hide it from the site until the real one is ready.
  email: "",
  whatsapp: "https://wa.me/919232637874",
  address: "",
  gstin: "23ABFFG0131Q1ZI",
  hours: "Mon – Sat, 9:00 AM – 7:00 PM IST",
};

export const navLinks = [
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why GreenLoop", href: "#why-greenloop" },
  { label: "Impact", href: "#impact" },
  { label: "Service Area", href: "#service-area" },
];

export type ServeSegment = {
  id: string;
  title: string;
  description: string;
  icon: "utensils" | "hotel" | "cooking-pot" | "factory" | "truck" | "store" | "building";
};

export const segments: ServeSegment[] = [
  {
    id: "restaurants",
    title: "Restaurants & Dhabas",
    description:
      "Regular pickups for everyday frying, whether you run a small dhaba or a busy multi-cuisine restaurant.",
    icon: "utensils",
  },
  {
    id: "hotels",
    title: "Hotels",
    description: "Scheduled collection from hotel kitchens and banquet operations.",
    icon: "hotel",
  },
  {
    id: "cloud-kitchens",
    title: "Cloud Kitchens",
    description: "Pickup times planned around busy, high-frequency kitchen operations.",
    icon: "cooking-pot",
  },
  {
    id: "namkeen-sweets",
    title: "Namkeen & Sweet Manufacturers",
    description: "Collection for bulk frying units that produce large volumes of used oil.",
    icon: "factory",
  },
  {
    id: "catering",
    title: "Catering Companies",
    description: "Pickups timed around your events, including large one-time collections.",
    icon: "truck",
  },
  {
    id: "food-courts",
    title: "Food Courts",
    description: "Collection from multiple vendors in one location, arranged through a single contact.",
    icon: "store",
  },
  {
    id: "institutional",
    title: "Institutional Cafeterias",
    description: "Recurring pickups for corporate campuses, hospitals, colleges, and schools.",
    icon: "building",
  },
];

export type ProcessStep = {
  id: string;
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "request",
    index: "01",
    title: "Request a Pickup",
    description:
      "Call, WhatsApp, or fill in the form below. We'll confirm a time that suits your kitchen.",
  },
  {
    id: "collect",
    index: "02",
    title: "We Collect",
    description:
      "Our team arrives at the agreed time and transfers your used oil into sealed containers.",
  },
  {
    id: "weigh-pay",
    index: "03",
    title: "Weighed & Paid",
    description: "The oil is weighed on the spot, and you're paid at the agreed rate.",
  },
  {
    id: "biodiesel",
    index: "04",
    title: "Turned Into Biodiesel",
    description:
      "We deliver the oil to our partner biodiesel plant, where it's refined into renewable fuel.",
  },
];

export type TrustPoint = {
  id: string;
  title: string;
  description: string;
  icon: "shield-check" | "badge-check" | "leaf" | "map";
};

export const trustPoints: TrustPoint[] = [
  {
    id: "fits-your-day",
    title: "Pickup That Fits Your Day",
    description:
      "We come at a time agreed with you, so collection doesn't disrupt your kitchen.",
    icon: "shield-check",
  },
  {
    id: "fair",
    title: "Fair & Transparent",
    description: "Your oil is weighed in front of you and paid for at the agreed rate.",
    icon: "badge-check",
  },
  {
    id: "destination",
    title: "The Right Destination",
    description:
      "Every litre goes to our partner biodiesel plant, keeping used oil out of drains and out of the food chain.",
    icon: "leaf",
  },
  {
    id: "local",
    title: "Local & Growing",
    description:
      "An Indore-based team serving the whole district, with plans to expand across Madhya Pradesh.",
    icon: "map",
  },
];

export type ImpactStat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
};

// Set to true once real figures are entered below to show the numbers row.
export const showImpactStats = false;

export const impactStats: ImpactStat[] = [
  { id: "liters", value: 10000, suffix: "+", label: "Litres Processed" },
  { id: "partners", value: 500, suffix: "+", label: "Business Partners" },
  { id: "responsible", value: 100, suffix: "%", label: "Responsible Collection" },
  { id: "districts", value: 12, suffix: "+", label: "Districts in Expansion Plan" },
];

export type ServiceAreaPhase = {
  id: string;
  phase: string;
  title: string;
  status: "Live" | "Expanding" | "Planned";
  description: string;
};

export const serviceAreaPhases: ServiceAreaPhase[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    title: "Indore",
    status: "Live",
    description: "Collection across the whole Indore district, for every type of food business.",
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    title: "Western Madhya Pradesh",
    status: "Expanding",
    description: "Routes extending toward Ujjain, Dewas, and Dhar as partner volume grows.",
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    title: "Statewide, Madhya Pradesh",
    status: "Planned",
    description: "A state-spanning collection network connecting every major commercial food hub.",
  },
];

export const businessTypes = [
  "Restaurant / Dhaba",
  "Hotel",
  "Cloud Kitchen",
  "Namkeen / Sweet Manufacturer",
  "Catering Company",
  "Food Court",
  "Institutional Cafeteria",
  "Other",
];

export const quantityRanges = [
  "Under 20 litres / month",
  "20 – 100 litres / month",
  "100 – 500 litres / month",
  "500+ litres / month",
];

export const footerLinks = {
  company: [
    { label: "Who We Serve", href: "#who-we-serve" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why GreenLoop", href: "#why-greenloop" },
  ],
  resources: [
    { label: "Sustainability Impact", href: "#impact" },
    { label: "Service Area", href: "#service-area" },
    { label: "Request a Pickup", href: "#pickup" },
  ],
};
