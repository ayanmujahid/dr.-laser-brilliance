import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Sparkles, HeartHandshake, ShieldCheck, Gem, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import facial from "@/assets/treatment-facial.jpg";
import laser from "@/assets/treatment-laser.jpg";
import skin from "@/assets/skin-macro.jpg";
import device from "@/assets/tech-device.jpg";
import portrait from "@/assets/portrait-light.jpg";
import { Container, Cta, Eyebrow, Hairline, Section, SectionHeading } from "@/components/site/Ui";
import { ConsultationCta } from "@/components/site/ConsultationCta";
import { CATEGORIES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Laser | Advanced Aesthetics & Laser Clinic" },
      {
        name: "description",
        content:
          "Advanced aesthetics, elevated confidence. Personalized laser and skin treatments powered by BTL EXION and Sharplight S4 Omnimax technology.",
      },
      { property: "og:title", content: "Dr. Laser | Advanced Aesthetics & Laser Clinic" },
      {
        property: "og:description",
        content: "Personalized aesthetic treatments powered by advanced technology and medical expertise.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const TRUST = [
  { icon: Sparkles, title: "Advanced Technology", copy: "Cutting-edge aesthetic platforms" },
  { icon: HeartHandshake, title: "Personalized Care", copy: "Treatments designed around you" },
  { icon: Gem, title: "Natural-Looking Results", copy: "Refined, confidence-enhancing outcomes" },
  { icon: ShieldCheck, title: "Expert Guidance", copy: "Professional aesthetic care" },
];

const CARD_IMAGES: Record<string, { src: string; alt: string; to: string }> = {
  "Facial Rejuvenation": { src: facial, alt: "Radiofrequency facial treatment", to: "/treatments/rf-face" },
  "Laser Hair Removal": { src: laser, alt: "Laser hair removal treatment", to: "/treatments/laser-hair-removal" },
  Skin: { src: skin, alt: "Close-up of natural skin texture", to: "/treatments/pigmentation" },
  "Advanced Aesthetic": { src: device, alt: "Advanced aesthetic laser platform", to: "/treatments/fractional-rf" },
};

const STEPS = [
  { n: "01", t: "Consultation", c: "Understand your goals, concerns and desired outcome." },
  { n: "02", t: "Assessment", c: "Evaluate your skin and determine the most appropriate approach." },
  { n: "03", t: "Personalized Plan", c: "Build a treatment plan around your individual needs." },
  { n: "04", t: "Treatment & Follow-Up", c: "Professional care with guidance throughout your journey." },
];

const TESTIMONIALS = [
  {
    quote:
      "The consultation was thorough and never rushed. I left understanding exactly what was being recommended and why.",
    name: "A. M.",
  },
  {
    quote: "The clinic feels calm and considered. Every appointment has been professional and comfortable.",
    name: "S. K.",
  },
  {
    quote: "I appreciated the honest advice about what was realistic for my skin rather than being sold a package.",
    name: "R. T.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative grain min-h-[92vh] overflow-hidden">
        <img
          src={hero}
          alt="Editorial portrait of a woman with healthy, natural skin"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

        <Container className="relative flex min-h-[92vh] flex-col justify-center py-32">
          <div className="max-w-2xl">
            <div className="animate-rise">
              <Eyebrow>Dr. Laser — Aesthetic Solutions</Eyebrow>
            </div>
            <h1
              className="mt-7 animate-rise text-5xl leading-[1.03] sm:text-6xl lg:text-8xl"
              style={{ animationDelay: "120ms" }}
            >
              Advanced Aesthetics.
              <span className="block text-primary">Elevated Confidence.</span>
            </h1>
            <p
              className="mt-8 max-w-lg animate-rise text-base leading-relaxed text-muted-foreground"
              style={{ animationDelay: "240ms" }}
            >
              Discover personalized aesthetic treatments powered by advanced technology, medical expertise and a
              commitment to natural-looking results.
            </p>
            <div className="mt-11 flex animate-rise flex-wrap gap-4" style={{ animationDelay: "360ms" }}>
              <Cta to="/book">Book a Consultation</Cta>
              <Cta to="/treatments" variant="outline">
                Explore Treatments
              </Cta>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-8 flex justify-center">
            <ChevronDown className="size-5 animate-scroll-hint text-primary" aria-hidden="true" />
          </div>
        </Container>
      </section>

      {/* TRUST BAR */}
      <div className="border-y border-border bg-onyx">
        <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.title} className="flex gap-4">
              <t.icon className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1} aria-hidden="true" />
              <div>
                <h2 className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.22em] text-foreground">
                  {t.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{t.copy}</p>
              </div>
            </div>
          ))}
        </Container>
      </div>

      {/* TREATMENTS */}
      <Section>
        <SectionHeading
          eyebrow="Treatments"
          title={
            <>
              Aesthetic treatments,
              <span className="block italic text-primary">reimagined.</span>
            </>
          }
          subtitle="Personalized solutions designed to enhance your skin, confidence and natural beauty."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => {
            const img = CARD_IMAGES[c.name]!;
            return (
              <Link
                key={c.name}
                to={img.to}
                className="group block border border-border/70 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl">{c.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-primary">
                    Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* TECHNOLOGY */}
      <section className="grain border-y border-border bg-onyx py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Technology"
            title="Powered by advanced technology"
            subtitle="Precision technology. Personalized treatment. Exceptional care."
          />

          <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
            <div className="relative overflow-hidden border border-border">
              <img
                src={device}
                alt="Advanced aesthetic treatment platform"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <Eyebrow>Platform 01</Eyebrow>
              <h3 className="mt-5 text-4xl md:text-5xl">BTL EXION</h3>
              <Hairline className="my-8" />
              <div className="space-y-7">
                <div>
                  <h4 className="text-xl text-primary">EXION Face</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    A non-invasive aesthetic treatment designed to support skin rejuvenation, firmness, texture and
                    overall skin quality.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl text-primary">Fractional RF</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Advanced radiofrequency technology designed to stimulate collagen and improve the appearance of
                    skin texture and firmness.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <Cta to="/technology" variant="outline">
                  Explore EXION <ArrowRight className="size-3.5" />
                </Cta>
              </div>
            </div>
          </div>

          <div className="mt-24 grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Eyebrow>Platform 02</Eyebrow>
              <h3 className="mt-5 text-4xl md:text-5xl">Sharplight S4 Omnimax</h3>
              <Hairline className="my-8" />
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { t: "Laser Hair Removal", c: "Dedicated handpieces selected for the treatment area." },
                  { t: "VPL 535", c: "Variable pulsed light for tone and pigmented concerns." },
                  { t: "635", c: "Applied within a personalized, assessment-led protocol." },
                  { t: "RF Face", c: "Radiofrequency focused on firmness and definition." },
                ].map((i) => (
                  <div key={i.t} className="border border-border p-5 transition-colors hover:border-primary/60">
                    <h4 className="text-lg text-primary">{i.t}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.c}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Cta to="/technology" variant="outline">
                  Discover the platform <ArrowRight className="size-3.5" />
                </Cta>
              </div>
            </div>
            <div className="order-1 overflow-hidden border border-border lg:order-2">
              <img
                src={laser}
                alt="Laser hair removal treatment in a luxury clinic"
                loading="lazy"
                width={1200}
                height={1504}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* WHY DR LASER */}
      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="overflow-hidden border border-border">
            <img
              src={portrait}
              alt="Portrait of a person with radiant natural skin"
              loading="lazy"
              width={1200}
              height={1504}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Eyebrow>Why Dr. Laser</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.1] md:text-6xl">
              Precision care.
              <span className="block italic text-primary">Personalized to you.</span>
            </h2>
            <Hairline className="my-9" />
            <ul className="space-y-6">
              {[
                ["Individual consultation", "Every plan begins with understanding your goals and your skin."],
                ["Advanced technology", "Treatments delivered on modern, well-maintained aesthetic platforms."],
                ["Comfortable experience", "A calm, private environment with care taken at every stage."],
                ["Natural-looking philosophy", "Refinement over transformation — results that still look like you."],
              ].map(([t, c]) => (
                <li key={t} className="border-l border-primary/40 pl-6">
                  <h3 className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.22em] text-foreground">
                    {t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c}</p>
                </li>
              ))}
            </ul>
            <div className="mt-11">
              <Cta to="/about" variant="outline">
                Our approach
              </Cta>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <section className="surface-light py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">The Experience</p>
            <h2 className="mt-5 text-4xl leading-[1.1] md:text-6xl">A considered journey, not a transaction.</h2>
          </div>
          <div className="mt-16 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="surface-light group p-8 transition-colors duration-500 hover:bg-gold-soft/40">
                <span className="font-display text-5xl text-ink/25">{s.n}</span>
                <h3 className="mt-6 font-sans text-[0.72rem] font-medium uppercase tracking-[0.22em]">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.c}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* RESULTS TEASER */}
      <Section>
        <SectionHeading
          eyebrow="Results"
          title="Real results. Refined beauty."
          subtitle="Before and after imagery is added as clinic-approved patient photography becomes available."
        />
        <div className="mt-14 text-center">
          <Cta to="/results" variant="outline">
            See our results
          </Cta>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <section className="grain border-y border-border bg-onyx py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Patients" title="What our patients say" />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border border-border p-8 transition-colors hover:border-primary/50">
                <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-xl leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCta />
    </>
  );
}
