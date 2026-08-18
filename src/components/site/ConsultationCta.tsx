import clinic from "@/assets/clinic.jpg";
import { Container, Cta, Eyebrow } from "./Ui";

export function ConsultationCta({
  title = "Your aesthetic journey starts here.",
  eyebrow = "Consultation",
}: {
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative grain overflow-hidden border-y border-border">
      <img
        src={clinic}
        alt="Interior of a modern aesthetic clinic"
        loading="lazy"
        width={1600}
        height={1104}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-background/75" />
      <Container className="relative py-24 text-center md:py-32">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl leading-[1.1] md:text-6xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Every plan begins with an individual consultation — an honest conversation about your goals, your skin and
          the most appropriate approach.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Cta to="/book">Book a Consultation</Cta>
          <Cta to="/treatments" variant="outline">
            Explore Treatments
          </Cta>
        </div>
      </Container>
    </section>
  );
}
