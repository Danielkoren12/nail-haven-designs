import { Phone, MapPin } from "lucide-react";
import { BusinessData } from "@/data/businessData";

interface Props {
  data: BusinessData;
}

const HeroSection = ({ data }: Props) => {
  return (
    <section id="hero" className="relative">
      <div className="flex flex-col lg:flex-row min-h-[70vh]">
        {/* Left Content */}
        <div className="lg:w-[55%] bg-spa-beige flex items-center">
          <div className="px-8 lg:px-16 py-16 lg:py-24 max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 italic">
              Giving you the me‑time you deserve
            </h1>
            <p className="font-body text-lg text-foreground/80 mb-10">
              Premium nail care and self‑care experience
            </p>

            {/* Info Rows */}
            <div className="space-y-6 mb-10">
              {data.phoneNumber && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-background/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-widest text-foreground mb-1">Phone</p>
                    <p className="font-body text-foreground">{data.phoneNumber}</p>
                  </div>
                </div>
              )}

              {data.address && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-background/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-widest text-foreground mb-1">Address</p>
                    <p className="font-body text-foreground">{data.address}</p>
                  </div>
                </div>
              )}
            </div>

            {data.phoneNumber && (
              <a
                href={`tel:${data.phoneNumber}`}
                className="inline-flex items-center gap-2 bg-spa-warm text-primary-foreground rounded-full px-8 py-3 font-body font-semibold text-sm hover:bg-accent transition-colors"
              >
                <Phone size={16} />
                Call Now
              </a>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-[45%] relative overflow-hidden min-h-[400px] lg:min-h-0">
          {data.imgUrl ? (
            <img
              src={data.imgUrl}
              alt="Nail spa experience"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 bg-spa-warm/30 flex items-center justify-center">
              <p className="font-body text-muted-foreground">Business image</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
