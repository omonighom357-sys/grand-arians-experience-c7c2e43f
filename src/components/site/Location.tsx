import { motion } from "motion/react";
import { MapPin, Navigation, Building } from "lucide-react";

export function Location() {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4">Find Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
            In the heart of <span className="text-gradient-gold italic">Udu, Delta</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Arians Crescent, Off Emuobo Ono-Sorhue Road, Opp. Williams Street, Udu L.G.A., Delta State.
            Two main entrances — from UDU Tax Office and from NEO PEES Filling Station.
          </p>

          <ul className="space-y-4">
            {[
              { icon: MapPin, title: "Address", text: "Arians Crescent, Off Emuobo Ono-Sorhue Road, Udu, Delta State" },
              { icon: Navigation, title: "Landmark", text: "Behind UDU Tax Office, same street as Kel's Voltage Lounge" },
              { icon: Building, title: "Entrances", text: "Via UDU Tax Office & via NEO PEES Filling Station" },
            ].map((it) => (
              <motion.li
                key={it.title}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="flex gap-4 glass rounded-2xl p-5"
              >
                <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <it.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-foreground font-medium">{it.title}</div>
                  <div className="text-sm text-muted-foreground">{it.text}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-elegant border border-border h-[460px]"
        >
          <iframe
            title="Arians Hotel Map"
            src="https://www.google.com/maps?q=Udu+Delta+State+Nigeria&output=embed"
            className="w-full h-full grayscale-[40%] contrast-110"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}