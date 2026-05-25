import { motion } from "motion/react";
import { Check, MessageCircle } from "lucide-react";
import silver from "@/assets/room-silver.jpg";
import gold from "@/assets/room-gold.jpg";
import diamond from "@/assets/room-diamond.jpg";

const WHATSAPP = "2348165879354";

const rooms = [
  {
    name: "Silver Room",
    price: "₦19,800",
    image: silver,
    desc: "Refined comfort, timeless interiors and a serene atmosphere — the perfect introduction to Arians elegance.",
    amenities: ["King bed", "Smart TV", "Free Wi-Fi", "Air conditioning"],
  },
  {
    name: "Gold Room",
    price: "₦28,600",
    image: gold,
    desc: "Warm gilded accents, plush bedding and curated finishes for the discerning traveler.",
    amenities: ["King bed", "Marble bath", "Mini bar", "Premium toiletries"],
  },
  {
    name: "Diamond Room",
    price: "₦38,500",
    image: diamond,
    desc: "An intimate sanctuary of dark sophistication, crystal lighting and uncompromising comfort.",
    amenities: ["King bed", "City view", "Lounge area", "Rain shower"],
  },
];

function whatsappLink(room: string) {
  const msg = `Hello Arians Hotels & Suites, I would like to book the ${room} for [DATE]. Please provide availability and payment details.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

export function Suites() {
  return (
    <section id="suites" className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.4em] uppercase mb-4"
          >Accommodations</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display text-4xl md:text-6xl text-foreground leading-[1.05]"
          >Suites crafted for <span className="text-gradient-gold italic">unforgettable</span> stays</motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-6 text-muted-foreground"
          >Every room comes with free cancellation, complimentary Wi-Fi and our signature warm welcome.</motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {rooms.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative glass rounded-3xl overflow-hidden hover-lift flex flex-col"
            >
              <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-primary/30 via-transparent to-primary/20 blur-xl" />
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={r.image} alt={r.name} loading="lazy"
                  className="h-full w-full object-cover cinematic-warm transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.12]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-4 left-4 glass-light rounded-full px-3 py-1 text-xs text-foreground/90 flex items-center gap-1.5">
                  <Check className="h-3 w-3 text-primary" /> Free cancellation
                </div>
              </div>

              <div className="relative p-6 sm:p-7 flex-1 flex flex-col">
                <h3 className="font-display text-2xl text-foreground">{r.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{r.desc}</p>

                <ul className="mt-5 grid grid-cols-2 gap-2 text-xs text-foreground/70">
                  {r.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-1.5"><Check className="h-3 w-3 text-primary" />{a}</li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div className="shrink-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">From</div>
                    <div className="font-display text-2xl text-gradient-gold">{r.price}<span className="text-xs text-muted-foreground ml-1">/night</span></div>
                  </div>
                  <a
                    href={whatsappLink(r.name)} target="_blank" rel="noreferrer"
                    className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-4 py-3 text-sm font-medium text-primary-foreground shadow-gold hover:scale-105 transition-transform w-full sm:w-auto"
                  >
                    <MessageCircle className="h-4 w-4" /> Book on WhatsApp
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}