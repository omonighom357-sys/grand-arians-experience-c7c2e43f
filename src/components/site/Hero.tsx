import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import hero from "@/assets/hotel-exterior.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img src={hero} alt="The Arians Hotel exterior at sunset" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30" />
      </motion.div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 container mx-auto px-6 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-primary text-sm md:text-base tracking-[0.4em] uppercase mb-6"
        >
          Udu · Delta State, Nigeria
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground max-w-4xl leading-[1.05]"
        >
          Experience <span className="text-gradient-gold italic">luxury</span> beyond comfort
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg text-foreground/80 leading-relaxed"
        >
          Premium hospitality, elegant suites and unforgettable experiences in the heart of Udu, Delta State.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#suites"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-primary-foreground font-medium shadow-gold hover:scale-105 transition-transform"
          >
            Book a Room
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#suites"
            className="inline-flex items-center gap-3 rounded-full glass-light px-8 py-4 text-foreground font-medium hover:bg-foreground/10 transition-colors"
          >
            Explore Suites
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/60"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}