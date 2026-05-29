import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Suites", href: "#suites" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3 group">
          <img src={logo} alt="Arians Hotel logo" className="h-14 w-14 md:h-16 md:w-16 drop-shadow-[0_2px_12px_oklch(0.78_0.16_85/0.4)] transition-transform duration-500 group-hover:rotate-6" />
          <div className="leading-tight">
            <div className="font-display text-xl md:text-2xl tracking-wide text-foreground">The Arians</div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-primary">Citadel for Comfort</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#suites"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-gold hover:scale-105 transition-transform"
        >
          Book Now
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass mx-6 mt-3 rounded-2xl p-6"
        >
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block text-foreground/90 hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}