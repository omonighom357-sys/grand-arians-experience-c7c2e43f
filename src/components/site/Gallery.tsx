import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import exterior from "@/assets/hotel-exterior.png";
import silver from "@/assets/room-silver.jpg";
import gold from "@/assets/room-gold.jpg";
import diamond from "@/assets/room-diamond.jpg";
import presidential from "@/assets/room-presidential.jpg";
import whitehouse from "@/assets/room-whitehouse.jpg";
import bar from "@/assets/amenity-bar.jpg";
import hall from "@/assets/amenity-hall.jpg";
import spa from "@/assets/amenity-spa.jpg";

const images = [
  { src: exterior, span: "row-span-2" },
  { src: whitehouse, span: "" },
  { src: gold, span: "" },
  { src: presidential, span: "row-span-2" },
  { src: bar, span: "" },
  { src: diamond, span: "" },
  { src: hall, span: "" },
  { src: spa, span: "" },
  { src: silver, span: "" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setActive(img.src)}
              className={`relative overflow-hidden rounded-2xl group ${img.span}`}
            >
              <img src={img.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button onClick={() => setActive(null)} className="absolute top-6 right-6 text-foreground/80 hover:text-primary">
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={active} alt="" className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-elegant"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}