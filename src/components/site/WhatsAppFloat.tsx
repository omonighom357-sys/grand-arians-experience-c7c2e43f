import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP = "2348165879354";
const message = encodeURIComponent(
  "Hello Arians Hotels & Suites, I would like to make a booking. Please share availability and rates.",
);

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    const t2 = setTimeout(() => setTip(false), 8000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[90] flex items-end gap-2"
        >
          <AnimatePresence>
            {tip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="hidden sm:flex glass rounded-2xl px-4 py-3 max-w-[230px] items-start gap-3 mb-1 shadow-elegant"
              >
                <div className="text-xs leading-relaxed text-foreground/90">
                  <div className="font-medium text-primary mb-0.5">Concierge online</div>
                  Need help booking your luxury stay? Chat with us now.
                </div>
                <button onClick={() => setTip(false)} aria-label="Dismiss" className="text-foreground/50 hover:text-foreground">
                  <X className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={`https://wa.me/${WHATSAPP}?text=${message}`}
            target="_blank" rel="noreferrer"
            aria-label="Chat with Arians on WhatsApp"
            className="relative h-14 w-14 rounded-full bg-[oklch(0.72_0.18_145)] text-white flex items-center justify-center shadow-elegant animate-glow-pulse hover:scale-110 transition-transform"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}