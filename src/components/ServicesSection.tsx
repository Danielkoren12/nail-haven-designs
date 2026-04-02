import { useFadeIn } from "@/hooks/useFadeIn";
import { Sparkles, Droplets, Palette, Hand } from "lucide-react";

const services = [
  {
    icon: Hand,
    title: "Manicure",
    description: "Classic and luxury manicure treatments to keep your nails looking flawless and healthy.",
  },
  {
    icon: Droplets,
    title: "Pedicure",
    description: "Relaxing pedicure services with premium products for smooth, beautiful feet.",
  },
  {
    icon: Sparkles,
    title: "Gel",
    description: "Long‑lasting gel polish applications with a wide range of colors and finishes.",
  },
  {
    icon: Palette,
    title: "Nail Art",
    description: "Custom nail art designs from minimalist elegance to bold creative expressions.",
  },
];

const ServicesSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section id="services" className="py-20 bg-background">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 fade-in-section ${visible ? "visible" : ""}`}>
        <div className="text-center mb-14">
          <div className="inline-block bg-spa-beige px-6 py-2 mb-4">
            <p className="font-heading text-foreground italic text-lg">Our Services</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">SERVICES</h2>
          <div className="w-8 h-0.5 bg-spa-brown mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-full bg-spa-beige/50 flex items-center justify-center mx-auto mb-6 group-hover:bg-spa-warm/30 transition-colors">
                <service.icon size={28} className="text-accent" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
