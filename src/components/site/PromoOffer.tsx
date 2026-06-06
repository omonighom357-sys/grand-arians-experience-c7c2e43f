import { motion } from "motion/react";
import { Sparkles, MessageCircle, Calendar } from "lucide-react";
import { BookingDialog } from "./BookingDialog";

export function PromoOffer() {
  return (
    <section id="promo" className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Gilded frame */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-gold opacity-80 blur-[2px]" />
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-primary/20 blur-3xl opacity-60" />

          <div className="relative glass rounded-3xl overflow-hidden">
            {/* Shimmering sweep */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-primary/20 to-transparent skew-x-12"
              animate={{ x: ["0%", "450%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
            />

            <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 p-8 sm:p-12 md:p-16 items-center">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="inline-flex items-center gap-2 rounded-full glass-light px-4 py-1.5 mb-6"
                >
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="text-[11px] tracking-[0.35em] uppercase text-primary">
                    Limited Offer
                  </span>
                </motion.div>

                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.05]">
                  Stay <span className="text-gradient-gold italic">two nights</span>,
                  <br />
                  the <span className="text-gradient-gold italic">third</span> is on us.
                </h2>

                <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
                  Indulge in an extended escape at The Arians. Book any two consecutive
                  nights and enjoy a complimentary third — same suite, same serenity, none
                  of the extra cost.
                </p>

                <ul className="mt-6 space-y-2 text-sm text-foreground/80">
                  {[
                    "Valid across all rooms and suites",
                    "Mention the offer when booking",
                    "Subject to availability",
                  ].map((t, i) => (
                    <motion.li
                      key={t}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-gold" />
                      {t}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <BookingDialog
                    trigger={
                      <button
                        type="button"
                        className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold hover:scale-[1.03] transition-transform"
                      >
                        <MessageCircle className="h-4 w-4" /> Claim Offer
                      </button>
                    }
                  />
                  <a
                    href="#suites"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary/60 transition-colors"
                  >
                    <Calendar className="h-4 w-4" /> View Suites
                  </a>
                </div>
              </div>

              {/* Decorative offer card */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative mx-auto aspect-[4/5] max-w-sm rounded-2xl overflow-hidden glass-light border border-primary/30 shadow-gold"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/5" />
                  <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                    <p className="text-[10px] tracking-[0.5em] uppercase text-primary mb-4">
                      The Arians
                    </p>
                    <div className="font-display text-7xl sm:text-8xl text-gradient-gold leading-none">
                      3<span className="text-3xl align-top">rd</span>
                    </div>
                    <p className="font-display text-2xl text-foreground mt-2">Night Free</p>
                    <div className="my-6 h-px w-16 bg-gradient-gold" />
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                      Stay 2 · Get 1
                    </p>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-6 -right-6 h-24 w-24 rounded-full border border-primary/40"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-primary/20"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}