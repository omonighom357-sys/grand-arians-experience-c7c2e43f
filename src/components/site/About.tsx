import { motion, animate, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import exterior from "@/assets/exterior-front.jpg";
import room from "@/assets/room-gold.jpg";
import roomAlt from "@/assets/room-diamond.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(to);
      return;
    }

    setValue(0);
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [prefersReducedMotion, to]);

  return <span>{value.toLocaleString() + suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image collage */}
        <div className="relative h-[560px]">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src={exterior}
            alt="Hotel exterior"
            className="absolute top-0 left-0 w-[65%] h-[70%] object-cover rounded-2xl shadow-elegant cinematic-warm"
          />
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            src={roomAlt}
            alt="Diamond suite"
            className="absolute bottom-0 right-0 w-[60%] h-[55%] object-cover rounded-2xl shadow-gold border-4 border-background animate-float cinematic-warm"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            src={room}
            alt="Suite"
            className="absolute top-12 right-8 w-32 h-32 object-cover rounded-xl border-4 border-background shadow-elegant hidden md:block cinematic-warm"
          />
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.4em] uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-foreground mb-8 leading-tight"
          >
            A top-class retreat in the{" "}
            <span className="text-gradient-gold italic">heart of Udu</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              The Arians Hotel and Suites is a top-class hotel located at Arians Crescent off Emuobo
              Ono-Sorhue Road, opposite Williams Street, Udu L.G.A., Delta State.
            </p>
            <p>
              We blend refined comfort with warm hospitality — free Wi-Fi, swimming pool,
              complimentary breakfast, restaurant, a 250-capacity event hall, bar, games, spa &
              massage, and a full menu of delights from shawarma to pastries.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { value: 1300, suffix: "+", label: "Guests Served" },
              { value: 2, suffix: "", label: "Luxury Suites" },
              { value: 3, suffix: "+", label: "Years of Excellence" },
            ].map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <div className="text-3xl md:text-4xl font-display text-gradient-gold">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
