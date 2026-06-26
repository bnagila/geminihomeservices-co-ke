import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { openBookingWizard } from "./BookingWizard";


const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#lifestyle", label: "Lifestyle" },
  { href: "#housekeeping", label: "Housekeeping" },
  { href: "#nanny", label: "Nanny" },
  { href: "#staffing", label: "Staffing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#home" className="font-display text-lg tracking-tight text-charcoal md:text-xl">
          Gemini <span className="text-eucalyptus">Home Services</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => openBookingWizard()}
          className="hidden rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-charcoal/90 hover:shadow-lg md:inline-flex"
        >
          Book a Slot
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-border/60 md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); openBookingWizard(); }}
              className="mt-2 inline-flex justify-center rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-white"
            >
              Book a Slot
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
