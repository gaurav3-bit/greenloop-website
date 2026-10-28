import Image from "next/image";
import logoMark from "@/assets/logo-mark.png";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

/**
 * GreenLoop logo: the brand emblem (src/assets/logo-mark.png) with the wordmark set in text,
 * so it stays sharp at any size and can switch colors for light or dark backgrounds.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const greenColor = variant === "dark" ? "text-primary" : "text-white";
  const subColor = variant === "dark" ? "text-primary" : "text-white/70";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={logoMark}
        alt=""
        aria-hidden="true"
        priority
        className="h-10 w-auto shrink-0"
      />
      <span className="font-display font-bold tracking-tight text-[1.2rem] leading-none">
        <span className={greenColor}>Green</span>
        <span className="text-secondary">Loop</span>
        <span
          className={`mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.24em] ${subColor}`}
        >
          Bio Resources
        </span>
      </span>
    </span>
  );
}
