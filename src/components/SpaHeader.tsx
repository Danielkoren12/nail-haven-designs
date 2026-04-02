import { Phone, Menu, X } from "lucide-react";
import { BusinessData } from "@/data/businessData";
import { useState } from "react";

interface Props {
  data: BusinessData;
}

const SpaHeader = ({ data }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-spa-warm flex items-center justify-center p-1.5">
            <span className="text-primary-foreground font-heading text-[0.6rem] font-semibold leading-tight text-center break-words">
              {data.title}
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-body text-sm font-semibold tracking-widest uppercase text-foreground">
          <button onClick={() => scrollTo("hero")} className="hover:text-accent transition-colors">Home</button>
          <button onClick={() => scrollTo("services")} className="hover:text-accent transition-colors">Services</button>
          <button onClick={() => scrollTo("gallery")} className="hover:text-accent transition-colors">Gallery</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-accent transition-colors">Contact Us</button>
        </nav>

        {/* Call Button */}
        {data.phoneNumber && (
          <a
            href={`tel:${data.phoneNumber}`}
            className="hidden md:flex items-center gap-2 bg-spa-warm text-primary-foreground rounded-full px-6 py-2.5 font-body text-sm font-semibold hover:bg-accent transition-colors"
          >
            <Phone size={16} />
            {data.phoneNumber}
          </a>
        )}

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-3">
          <button onClick={() => scrollTo("hero")} className="block w-full text-left font-body text-sm font-semibold uppercase tracking-widest text-foreground">Home</button>
          <button onClick={() => scrollTo("services")} className="block w-full text-left font-body text-sm font-semibold uppercase tracking-widest text-foreground">Services</button>
          <button onClick={() => scrollTo("gallery")} className="block w-full text-left font-body text-sm font-semibold uppercase tracking-widest text-foreground">Gallery</button>
          <button onClick={() => scrollTo("contact")} className="block w-full text-left font-body text-sm font-semibold uppercase tracking-widest text-foreground">Contact Us</button>
          {data.phoneNumber && (
            <a href={`tel:${data.phoneNumber}`} className="block text-center bg-spa-warm text-primary-foreground rounded-full px-6 py-2.5 font-body text-sm font-semibold">
              {data.phoneNumber}
            </a>
          )}
        </div>
      )}
    </header>
  );
};

export default SpaHeader;
