import { Instagram, Facebook } from "lucide-react";
import { BusinessData } from "@/data/businessData";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface Props {
  data: BusinessData;
}

const SpaFooter = ({ data }: Props) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-spa-beige py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-card rounded-full p-8 md:p-10 text-center max-w-xs mb-4">
              <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">About Us</p>
              {data.title && (
                <h3 className="font-heading text-xl text-foreground mb-3">{data.title}</h3>
              )}
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Welcome to your nail therapy, where self‑care becomes an unforgettable experience. Indulge in moments of pampering and relaxation with our exclusive services, designed just for you 🤎
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">Contact</p>
            {data.phoneNumber && (
              <div className="mb-4">
                <a href={`tel:${data.phoneNumber}`} className="font-body text-foreground hover:text-accent transition-colors">
                  {data.phoneNumber}
                </a>
              </div>
            )}
            {data.address && (
              <p className="font-body text-sm text-muted-foreground mb-8">{data.address}</p>
            )}

            {/* Social Icons */}
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Follow Us</p>
            <div className="flex gap-3 justify-center md:justify-start">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--spa-instagram-from))] to-[hsl(var(--spa-instagram-to))] flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                    <Instagram size={18} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This button will connect to your Instagram profile</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="w-10 h-10 rounded-lg bg-spa-facebook flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                    <Facebook size={18} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This button will connect to your Facebook page</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Quick Links & Map */}
          <div className="text-center md:text-left">
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">Quick Links</p>
            <div className="space-y-3 mb-8">
              <button onClick={() => scrollTo("services")} className="block font-body text-foreground hover:text-accent transition-colors">Services</button>
              <button onClick={() => scrollTo("gallery")} className="block font-body text-foreground hover:text-accent transition-colors">Gallery</button>
              <button onClick={() => scrollTo("contact")} className="block font-body text-foreground hover:text-accent transition-colors">Contact</button>
            </div>

            {data.placeUrl && (
              <a
                href={data.placeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-accent hover:underline"
              >
                Open in Maps ↗
              </a>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-6 border-t border-foreground/10 text-center">
          <p className="font-body text-sm text-muted-foreground">
            Copyright © {new Date().getFullYear()}{" "}
            {data.title && <span className="font-semibold uppercase tracking-wider">{data.title}</span>}
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SpaFooter;
