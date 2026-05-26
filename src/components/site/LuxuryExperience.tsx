import { motion } from "motion/react";
import { Sparkles, UtensilsCrossed, Wine, Briefcase, Flower2 } from "lucide-react";

const experiences = [
  {
    icon: Flower2,
    title: "Signature Spa",
    text: "Restorative rituals, hot stone therapy and bespoke massages performed by trained therapists in our serene wellness lounge.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    text: "A curated menu of continental and Nigerian classics — from prime cuts to handmade pastries — served with quiet sophistication.",
  },
  {
    icon: Briefcase,
    title: "Executive Lifestyle",
    text: "Private concierge, executive lounge access and a 250-capacity hall for boardrooms, summits and weddings.",
  },
  {
    icon: Wine,
    title: "Evenings at Arians",
    text: "An intimate bar with a curated selection of premium spirits, signature cocktails and ambient music until late.",
  },
];

export function LuxuryExperience() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-drift-1" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-drift-2" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-light rounded-full px-4 py-1.5 mb-5"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary">The Arians Experience</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display text-4xl md:text-6xl text-foreground leading-[1.05]"
          >
            Luxury, lived in <span className="text-gradient-gold italic">every moment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-6 text-muted-foreground"
          >
            Beyond the suite — a curated world of wellness, dining, leisure and executive hospitality.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-7 max-w-5xl mx-auto">
          {experiences.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative glass rounded-3xl p-7 md:p-9 hover-lift overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex gap-5 items-start">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:rotate-[8deg] transition-transform duration-700">
                  <e.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-2">{e.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}