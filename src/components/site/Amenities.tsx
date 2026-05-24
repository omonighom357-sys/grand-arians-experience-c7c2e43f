import { motion } from "motion/react";
import { Waves, Wifi, UtensilsCrossed, Tv, Zap, Dumbbell, Plane, Building2 } from "lucide-react";

const items = [
  { icon: Waves, label: "Swimming Pool", desc: "Crystal-clear outdoor pool with poolside service." },
  { icon: Wifi, label: "Free Wi-Fi", desc: "High-speed internet across the entire property." },
  { icon: UtensilsCrossed, label: "Restaurant & Bar", desc: "Fine dining, shawarma, suya, pastries and more." },
  { icon: Tv, label: "Smart Rooms", desc: "Smart TVs, climate control and premium bedding." },
  { icon: Zap, label: "24/7 Power", desc: "Uninterrupted power supply, day and night." },
  { icon: Dumbbell, label: "Gym & Spa", desc: "Massage, wellness and energizing workouts." },
  { icon: Plane, label: "Airport Pickup", desc: "Premium chauffeur on request, hassle-free." },
  { icon: Building2, label: "Conference Hall", desc: "250-capacity hall for events and weddings." },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4">Amenities</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight">
            Every <span className="text-gradient-gold italic">detail</span>, perfected
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass rounded-2xl p-7 hover-lift cursor-default"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold mb-5 group-hover:rotate-6 transition-transform duration-500">
                <it.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{it.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}