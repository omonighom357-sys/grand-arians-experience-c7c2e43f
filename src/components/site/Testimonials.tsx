import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Adaeze O.", role: "Lagos, Nigeria", rating: 5, text: "Absolutely breathtaking. The Presidential Suite felt like a private palace. Staff anticipated every need." },
  { name: "Michael T.", role: "London, UK", rating: 5, text: "An oasis in Delta. From the warm welcome to the spa, every detail was world-class." },
  { name: "Chioma N.", role: "Abuja, Nigeria", rating: 5, text: "The Gold Room was stunning, breakfast was divine, and the pool was the perfect retreat." },
  { name: "Ifeanyi K.", role: "Port Harcourt", rating: 5, text: "Hosted a 200-guest event in the hall — flawless. We will definitely be back." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4">Guests Say</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight">
            Voices of our <span className="text-gradient-gold italic">guests</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <Quote className="absolute -top-6 -left-2 h-20 w-20 text-primary/15" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-10 md:p-14 text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed italic">"{r.text}"</p>
              <div className="mt-8">
                <div className="text-foreground font-medium">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, k) => (
              <button
                key={k} onClick={() => setI(k)} aria-label={`Review ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-primary" : "w-2 bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}