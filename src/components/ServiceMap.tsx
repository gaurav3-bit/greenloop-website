"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

type Dir = "top" | "bottom" | "left" | "right";
type Place = { name: string; lat: number; lng: number; phase: 1 | 2 | 3; label?: Dir };

// Edit this list to change the cities shown on the map.
const places: Place[] = [
  { name: "Indore", lat: 22.7196, lng: 75.8577, phase: 1, label: "bottom" },
  { name: "Ujjain", lat: 23.1765, lng: 75.7885, phase: 2, label: "top" },
  { name: "Dewas", lat: 22.9676, lng: 76.0534, phase: 2, label: "right" },
  { name: "Dhar", lat: 22.6013, lng: 75.3025, phase: 2, label: "top" },
  { name: "Bhopal", lat: 23.2599, lng: 77.4126, phase: 3 },
  { name: "Jabalpur", lat: 23.1815, lng: 79.9864, phase: 3, label: "left" },
  { name: "Gwalior", lat: 26.2183, lng: 78.1828, phase: 3 },
  { name: "Sagar", lat: 23.8388, lng: 78.7378, phase: 3 },
];

const phaseStyle = {
  1: { color: "#0E7A3E", fill: "#0E7A3E", radius: 9 },
  2: { color: "#D9A91E", fill: "#F4C542", radius: 7 },
  3: { color: "#8A9488", fill: "#D9E2D2", radius: 6 },
} as const;

const offsets: Record<Dir, [number, number]> = {
  top: [0, -8],
  bottom: [0, 8],
  left: [-8, 0],
  right: [8, 0],
};

export default function ServiceMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !ref.current) return;

      map = L.map(ref.current, {
        scrollWheelZoom: false,
        zoomSnap: 0.25,
        zoomControl: true,
        attributionControl: true,
      });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 12,
        minZoom: 5,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // Approximate Indore district coverage
      L.circle([22.7196, 75.8577], {
        radius: 40000,
        color: "#0E7A3E",
        weight: 1.5,
        fillColor: "#0E7A3E",
        fillOpacity: 0.12,
      }).addTo(map);

      places.forEach((p) => {
        const s = phaseStyle[p.phase];
        L.circleMarker([p.lat, p.lng], {
          radius: s.radius,
          color: s.color,
          weight: 2,
          fillColor: s.fill,
          fillOpacity: 1,
        })
          .bindTooltip(p.name, {
            permanent: true,
            direction: p.label ?? "top",
            offset: offsets[p.label ?? "top"],
            className: `gl-map-label gl-map-label-${p.phase}`,
          })
          .addTo(map!);
      });

      map.fitBounds(
        L.latLngBounds(places.map((p) => [p.lat, p.lng] as [number, number])),
        { paddingTopLeft: [60, 30], paddingBottomRight: [30, 40] },
      );
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div className="w-full">
      <div
        ref={ref}
        className="relative z-0 aspect-square w-full overflow-hidden rounded-2xl border border-line bg-mist"
        role="img"
        aria-label="Map of GreenLoop's service area: live in Indore, expanding to Ujjain, Dewas, and Dhar, then across Madhya Pradesh"
      />
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-primary" /> Phase 1: Live
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border-2 border-gold-dark bg-gold" /> Phase 2: Expanding
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border-2 border-[#8A9488] bg-mist-deep" /> Phase 3: Planned
        </span>
      </div>
    </div>
  );
}
