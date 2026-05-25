import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import exterior from "@/assets/hotel-exterior.png";
import silver from "@/assets/room-silver.jpg";
import gold from "@/assets/room-gold.jpg";
import diamond from "@/assets/room-diamond.jpg";

const images = [
  { src: exterior, span: "col-span-2 row-span-2", label: "The Arians Exterior" },
  { src: gold, span: "", label: "Gold Room" },
  { src: silver, span: "", label: "Silver Room" },
  { src: diamond, span: "col-span-2", label: "Diamond Room" },
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight">
            A glimpse of <span className="text-gradient-gold italic">Arians</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={() => setActive(img.src)}
              className={`relative overflow-hidden rounded-2xl group hover-lift ${img.span}`}
            >
              <img src={img.src} alt={img.label} loading="lazy" className="h-full w-full object-cover cinematic-warm transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-4 text-left opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">View</div>
                <div className="font-display text-lg text-foreground">{img.label}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button onClick={() => setActive(null)} className="absolute top-6 right-6 text-foreground/80 hover:text-primary">
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              src={active} alt="" className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-elegant cinematic-warm"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}