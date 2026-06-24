// Centralized site content. Edit copy and figures here, components read from this file
// so the impact statistics, service list, and process steps stay easy to update later.

export const site = {
  name: "GreenLoop Bio Resources",
  shortName: "GreenLoop",
  tagline: "From Waste Today. To Energy Tomorrow. To A Legacy Forever.",
  description:
    "GreenLoop Bio Resources collects used cooking oil from hotels, cloud kitchens, food courts, caterers, and institutional cafeterias across Indore, and channels it into authorized renewable energy production.",
  phone: "+91 731 400 2210",
  phoneHref: "tel:+917314002210",
  email: "pickups@greenloopbio.in",
  whatsapp: "https://wa.me/917314002210",
  address: "AB Road Industrial Belt, Indore, Madhya Pradesh 452001",
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
  icon: "hotel" | "cooking-pot" | "store" | "truck" | "building";
};

export const segments: ServeSegment[] = [
  {
    id: "hotels",
    title: "Hotels",
    description:
      "Scheduled collection from kitchens and banquet operations, with documentation suited for sustainability and ESG reporting.",
    icon: "hotel",
  },
  {
    id: "cloud-kitchens",
    title: "Cloud Kitchens",
    description:
      "Flexible pickup windows built around high-frequency, multi-brand kitchen operations and tight turnaround times.",
    icon: "cooking-pot",
  },
  {
    id: "food-courts",
    title: "Food Courts",
    description:
      "Centralized collection across multiple vendors in a single facility, coordinated through one point of contact.",
    icon: "store",
  },
  {
    id: "catering",
    title: "Catering Companies",
    description:
      "On-demand pickups aligned to event cycles and banquet schedules, including large-volume single collections.",
    icon: "truck",
  },
  {
    id: "institutional",
    title: "Institutional Cafeterias",
    description:
      "Reliable recurring service for corporate campuses, hospitals, and educational institutions with high daily output.",
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
    id: "generated",
    index: "01",
    title: "Used Cooking Oil Generated",
    description:
      "Your kitchen produces used cooking oil through everyday frying and cooking operations, the starting point of the loop.",
  },
  {
    id: "schedule",
    index: "02",
    title: "Schedule Pickup",
    description:
      "Submit a pickup request online or by phone. Our team confirms a collection window that fits your kitchen's schedule.",
  },
  {
    id: "collection",
    index: "03",
    title: "Collection & Safe Handling",
    description:
      "A trained collection crew arrives with sealed, leak-proof containers and handles transfer without disrupting service.",
  },
  {
    id: "conversion",
    index: "04",
    title: "Conversion Into Renewable Energy",
    description:
      "Oil is supplied to authorized processing facilities, where it is converted into biodiesel and renewable energy feedstock.",
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
    id: "reliable",
    title: "Reliable Collection",
    description:
      "Fixed pickup schedules and route planning mean your kitchen is never left storing oil longer than necessary.",
    icon: "shield-check",
  },
  {
    id: "professional",
    title: "Professional Service",
    description:
      "Uniformed crews, sealed containers, and digital pickup records bring industrial-grade discipline to every collection.",
    icon: "badge-check",
  },
  {
    id: "responsible",
    title: "Environmental Responsibility",
    description:
      "Every litre is routed to authorized processing facilities, keeping used oil out of drains, landfills, and the food chain.",
    icon: "leaf",
  },
  {
    id: "growing",
    title: "Growing Across Madhya Pradesh",
    description:
      "Live in Indore today, with collection routes expanding into neighboring districts across the state.",
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
    description: "Full collection coverage across hotels, cloud kitchens, food courts, and institutions.",
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
  "Hotel",
  "Cloud Kitchen",
  "Food Court",
  "Catering Company",
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
