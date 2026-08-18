import { Link } from "@tanstack/react-router";
import logo from "@/assets/dr-laser-logo.jpg.asset.json";
import logo1 from "@/assets/Dr.laser.jpg";

export function Logo({ className = "h-11" }: { className?: string }) {
  return (
    <Link to="/" aria-label="Dr. Laser Aesthetic Solutions — home" className="inline-flex items-center">
      <img
        src={logo1}
        alt="Dr. Laser Aesthetic Solutions"
        className={`${className} w-auto mix-blend-screen`}
        width={1400}
        height={768}
      />
    </Link>
  );
}
