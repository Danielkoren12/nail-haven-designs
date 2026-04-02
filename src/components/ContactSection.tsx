import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { BusinessData } from "@/data/businessData";
import { useFadeIn } from "@/hooks/useFadeIn";

interface Props {
  data: BusinessData;
}

const dayOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;
const dayLabels: Record<string, string> = {
  monday: "Mon",
  tuesday: "Tue",
  wednesday: "Wed",
  thursday: "Thu",
  friday: "Fri",
  saturday: "Sat",
  sunday: "Sun",
};

const ContactSection = ({ data }: Props) => {
  const { ref, visible } = useFadeIn();
  const hasHours = dayOrder.some((d) => data.openingHours[d]);

  return (
    <section id="contact" className="py-20 bg-background">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 fade-in-section ${visible ? "visible" : ""}`}>
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">Contact Us</h2>
          <div className="w-8 h-0.5 bg-spa-brown mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {/* Phone */}
          {data.phoneNumber && (
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-spa-beige/50 flex items-center justify-center mx-auto mb-4">
                <Phone size={22} className="text-accent" />
              </div>
              <p className="font-body text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Phone</p>
              <a href={`tel:${data.phoneNumber}`} className="font-body text-foreground hover:text-accent transition-colors">
                {data.phoneNumber}
              </a>
            </div>
          )}

          {/* Address */}
          {data.address && (
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-spa-beige/50 flex items-center justify-center mx-auto mb-4">
                <MapPin size={22} className="text-accent" />
              </div>
              <p className="font-body text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Address</p>
              <p className="font-body text-foreground text-sm">{data.address}</p>
            </div>
          )}

          {/* Directions */}
          {data.placeUrl && (
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-spa-beige/50 flex items-center justify-center mx-auto mb-4">
                <Navigation size={22} className="text-accent" />
              </div>
              <p className="font-body text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Directions</p>
              <a
                href={data.placeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-accent hover:underline text-sm"
              >
                Open in Maps
              </a>
            </div>
          )}
        </div>

        {/* Opening Hours */}
        {hasHours && (
          <div className="mt-14 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock size={18} className="text-accent" />
              <p className="font-body text-xs font-bold uppercase tracking-widest text-muted-foreground">Opening Hours</p>
            </div>
            <div className="space-y-2">
              {dayOrder.map((day) => {
                const hours = data.openingHours[day];
                if (!hours) return null;
                return (
                  <div key={day} className="flex justify-between font-body text-sm">
                    <span className="text-foreground font-semibold">{dayLabels[day]}</span>
                    <span className="text-muted-foreground">{hours}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
