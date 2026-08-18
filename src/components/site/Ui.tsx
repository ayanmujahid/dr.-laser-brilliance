import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Hairline({ className = "" }: { className?: string }) {
  return <div className={`hairline ${className}`} aria-hidden="true" />;
}

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "gold" | "outline" | "ghost";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.24em] transition-all duration-500";

const styles = {
  gold: "bg-primary text-primary-foreground hover:bg-gold-soft",
  outline: "border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground",
  ghost: "border border-current/25 text-current hover:border-current/70",
};

export function Cta({ children, to, href, variant = "gold", type = "button", className = "", onClick, disabled }: ButtonProps) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 text-4xl leading-[1.1] md:text-5xl lg:text-6xl">{title}</h2>
      {subtitle ? <p className="mt-6 text-base leading-relaxed text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}) {
  return (
    <header className="relative grain overflow-hidden border-b border-border">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        width={1600}
        height={900}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      <Container className="relative py-28 md:py-40">
        <div className="max-w-3xl animate-rise">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">{title}</h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">{subtitle}</p>
        </div>
      </Container>
    </header>
  );
}
