import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";
import { CLINIC, NAV } from "@/lib/site";
import { Container, Hairline } from "./Ui";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="grain border-t border-border bg-background">
      <Container className="py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-16" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Advanced aesthetic care delivered with precision technology, medical attention to detail and a
              personalized approach.
            </p>
            <div className="mt-7 flex gap-4">
              <a
                href={CLINIC.instagramUrl}
                aria-label="Instagram"
                className="border border-border p-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={CLINIC.instagramUrl}
                aria-label="Facebook"
                className="border border-border p-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="/contact"
                aria-label="Email the clinic"
                className="border border-border p-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-6 space-y-3">
              {[...NAV.slice(1), { to: "/book", label: "Book Consultation" }].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Clinic</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>{CLINIC.address}</li>
              <li>{CLINIC.phone}</li>
              <li>{CLINIC.email}</li>
              {CLINIC.hours.map((h) => (
                <li key={h.day}>
                  <span className="text-foreground/80">{h.day}</span> — {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Hairline className="my-12" />

        <div className="flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Dr. Laser Aesthetic Solutions. Individual results may vary. Information on
            this website is for general purposes and is not medical advice.
          </p>
          <ul className="flex flex-wrap gap-6">
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Medical Disclaimer</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
