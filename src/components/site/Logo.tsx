import { Link } from "@tanstack/react-router";
import logo from "@/assets/dr-laser-logo.jpg.asset.json";

export function Logo({ className = "h-11" }: { className?: string }) {
  return (
    <Link to="/" aria-label="Dr. Laser Aesthetic Solutions — home" className="inline-flex items-center">
      <img
        src={logo.url}
        alt="Dr. Laser Aesthetic Solutions"
        className={`${className} w-auto mix-blend-screen`}
        width={1400}
        height={768}
      />
    </Link>
  );
}
