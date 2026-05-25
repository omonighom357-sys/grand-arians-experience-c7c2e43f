import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import hero from "@/assets/hotel-exterior.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.6, ease: [0.2, 0.8, 0.2, 1] }}
          src={hero}
          alt="The Arians Hotel exterior at sunset"
          className="h-full w-full object-cover cinematic-warm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.1_0.012_60/0.55)_100%)]" />
      </motion.div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-drift-1" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-drift-2" />

      {/* Luxury light particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${(i * 7.3) % 100}%`,
              animationDuration: `${12 + (i % 5) * 3}s`,
              animationDelay: `${i * 1.1}s`,
              opacity: 0.5 + (i % 4) * 0.12,
            }}
          />
        ))}
      </div>

      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-6 pt-32 pb-24 min-h-screen flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.4em" }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-primary text-sm md:text-base tracking-[0.4em] uppercase mb-6"
        >
          Arians Hotels &amp; Suites · Udu, Delta State
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display text-[2.6rem] sm:text-5xl md:text-7xl lg:text-8xl text-foreground max-w-4xl leading-[1.02]"
        >
          Experience <span className="text-gradient-gold italic">luxury</span> beyond comfort
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.9 }}
          className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed"
        >
          Where refined hospitality meets timeless elegance — premium suites, exquisite dining and unforgettable moments curated with care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.9 }}
          className="mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="#suites"
            className="btn-shine group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-7 sm:px-8 py-4 text-primary-foreground font-medium shadow-gold hover:scale-105 transition-transform w-full sm:w-auto text-center"
          >
            Book a Room
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-3 rounded-full glass-light px-7 sm:px-8 py-4 text-foreground font-medium hover:bg-foreground/10 transition-colors w-full sm:w-auto text-center"
          >
            Discover More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/60"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}