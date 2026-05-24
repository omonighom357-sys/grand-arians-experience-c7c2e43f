import { motion } from "motion/react";
import { Check, MessageCircle } from "lucide-react";
import silver from "@/assets/room-silver.jpg";
import gold from "@/assets/room-gold.jpg";
import diamond from "@/assets/room-diamond.jpg";
import whitehouse from "@/assets/room-whitehouse.jpg";
import presidential from "@/assets/room-presidential.jpg";

const WHATSAPP = "2348000000000"; // placeholder — replace with real number

const rooms = [
  {
    name: "Silver Room",
    price: "₦19,800",
    image: silver,
    desc: "Refined comfort with timeless interiors — the perfect first impression of Arians elegance.",
    amenities: ["King bed", "Smart TV", "Free Wi-Fi", "Air conditioning"],
  },
  {
    name: "Gold Room",
    price: "₦28,600",
    image: gold,
    desc: "Warm gilded accents, plush bedding and a serene atmosphere for the discerning traveler.",
    amenities: ["King bed", "Marble bath", "Mini bar", "Premium toiletries"],
  },
  {
    name: "Diamond Room",
    price: "₦38,500",
    image: diamond,
    desc: "An intimate sanctuary of dark sophistication, crystal lighting and panoramic views.",
    amenities: ["King bed", "City view", "Lounge area", "Rain shower"],
  },
  {
    name: "White House Suite",
    price: "₦49,500",
    image: whitehouse,
    desc: "All-white minimalist suite with golden detailing — bright, airy and quietly opulent.",
    amenities: ["Separate lounge", "Work desk", "Marble bath", "Complimentary breakfast"],
  },
  {
    name: "Presidential Suite",
    price: "₦55,000",
    image: presidential,
    desc: "Our crown jewel — sweeping marble floors, velvet seating and unmatched hospitality.",
    amenities: ["Private lounge", "Dining area", "Premium concierge", "Airport pickup"],
  },
];

function whatsappLink(room: string) {
  const msg = `Hello Arians Hotels & Suites, I would like to book the ${room} for [DATE]. Please provide availability and payment details.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

export function Suites() {
  return (
    <section id="suites" className="relative py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.4em] uppercase mb-4"
          >Accommodations</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-foreground leading-tight"
          >Suites crafted for <span className="text-gradient-gold italic">unforgettable</span> stays</motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-6 text-muted-foreground"
          >Every room comes with free cancellation, complimentary Wi-Fi and our signature warm welcome.</motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group glass rounded-3xl overflow-hidden hover-lift flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={r.image} alt={r.name} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-4 left-4 glass-light rounded-full px-3 py-1 text-xs text-foreground/90 flex items-center gap-1.5">
                  <Check className="h-3 w-3 text-primary" /> Free cancellation
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-display text-2xl text-foreground">{r.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{r.desc}</p>

                <ul className="mt-5 grid grid-cols-2 gap-2 text-xs text-foreground/70">
                  {r.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-1.5"><Check className="h-3 w-3 text-primary" />{a}</li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border flex items-end justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">From</div>
                    <div className="font-display text-2xl text-gradient-gold">{r.price}<span className="text-xs text-muted-foreground ml-1">/night</span></div>
                  </div>
                  <a
                    href={whatsappLink(r.name)} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-gold hover:scale-105 transition-transform"
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