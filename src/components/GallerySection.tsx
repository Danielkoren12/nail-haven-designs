import { useFadeIn } from "@/hooks/useFadeIn";
import { ImageIcon } from "lucide-react";

const GallerySection = () => {
  const { ref, visible } = useFadeIn();
  const placeholders = Array.from({ length: 6 });

  return (
    <section id="gallery" className="py-20 bg-background">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 fade-in-section ${visible ? "visible" : ""}`}>
        <div className="text-center mb-14">
          <div className="inline-block bg-spa-beige px-6 py-2 mb-4">
            <p className="font-heading text-foreground italic text-lg">Nail Collection &amp; Beauty</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">GALLERY</h2>
          <div className="w-8 h-0.5 bg-spa-brown mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-muted rounded-lg flex flex-col items-center justify-center text-center p-6 border border-border hover:border-spa-warm/50 transition-colors"
            >
              <ImageIcon size={32} className="text-muted-foreground/40 mb-3" />
              <p className="font-body text-xs text-muted-foreground">
                Images of the business will appear here
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
