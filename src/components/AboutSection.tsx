import { useFadeIn } from "@/hooks/useFadeIn";

const AboutSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="py-20 bg-spa-beige">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 flex justify-center fade-in-section ${visible ? "visible" : ""}`}
      >
        <div className="bg-card rounded-full w-full max-w-xl aspect-square flex flex-col items-center justify-center text-center px-12 lg:px-16 shadow-sm">
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
            About Us
          </p>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
            Your Nail Therapy
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
            Welcome to your nail therapy, where self‑care becomes an experience. Enjoy high‑quality nail services designed for comfort, beauty, and relaxation. 🤎
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
