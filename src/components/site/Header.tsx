import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import { Logo } from "./Logo";
import { Container, Cta } from "./Ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/92 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Logo className={scrolled ? "h-9 md:h-10" : "h-11 md:h-14"} />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="link-underline text-[0.7rem] font-medium uppercase tracking-[0.2em] text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <Cta to="/book" variant="outline" className="px-5 py-3">
            Book a Consultation
          </Cta>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-primary lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open ? (
        <div className="fixed inset-0 top-[72px] z-40 grain bg-background lg:hidden">
          <nav aria-label="Mobile" className="flex h-full flex-col gap-1 overflow-y-auto px-8 pt-10 pb-24">
            {NAV.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="animate-rise border-b border-border/60 py-5 font-display text-3xl text-foreground"
                style={{ animationDelay: `${i * 45}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Cta to="/book" className="mt-10 w-full">
              Book a Consultation
            </Cta>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
