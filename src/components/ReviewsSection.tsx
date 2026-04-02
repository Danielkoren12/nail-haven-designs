import { Star } from "lucide-react";
import { BusinessData } from "@/data/businessData";
import { useFadeIn } from "@/hooks/useFadeIn";

interface Props {
  data: BusinessData;
}

const testimonials = [
  { name: "Sarah M.", text: "Absolutely love the attention to detail. My nails always look stunning after every visit!" },
  { name: "Jessica L.", text: "The most relaxing experience. The staff is so friendly and professional. Highly recommend!" },
  { name: "Emily R.", text: "Beautiful nail art and amazing gel work. This is my go‑to spot for self‑care days." },
];

const ReviewsSection = ({ data }: Props) => {
  const { ref, visible } = useFadeIn();
  const rating = parseFloat(data.rating);
  const hasReviews = data.rating && data.reviewCount;

  if (!hasReviews) return null;

  return (
    <section className="py-20 bg-spa-beige/50">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 fade-in-section ${visible ? "visible" : ""}`}>
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className={i < Math.round(rating) ? "text-spa-gold fill-spa-gold" : "text-border"}
              />
            ))}
          </div>
          <p className="font-body text-muted-foreground">
            Rated <span className="font-semibold text-foreground">{data.rating}</span> from{" "}
            <span className="font-semibold text-foreground">{data.reviewCount}</span> customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-lg p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-spa-gold fill-spa-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
              <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
