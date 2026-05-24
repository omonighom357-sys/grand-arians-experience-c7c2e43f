import { motion } from "motion/react";
import { Phone, Mail, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Arians Hotels & Suites,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(`https://wa.me/2348000000000?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4">Get in touch</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight mb-6">
            We'd love to <span className="text-gradient-gold italic">host you</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Reach out for reservations, events or any inquiry. Our concierge replies within minutes.
          </p>

          <ul className="space-y-5">
            {[
              { icon: Phone, label: "Call us", value: "+234 800 000 0000", href: "tel:+2348000000000" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: "https://wa.me/2348000000000" },
              { icon: Mail, label: "Email", value: "hello@arianshotel.com", href: "mailto:hello@arianshotel.com" },
            ].map((c) => (
              <motion.li key={c.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <a href={c.href} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-xl glass flex items-center justify-center group-hover:bg-gradient-gold transition-all duration-500">
                    <c.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="text-foreground group-hover:text-primary transition-colors">{c.value}</div>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="flex gap-3 mt-10">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-gradient-gold hover:scale-110 transition-all">
                <Icon className="h-4 w-4 text-foreground" />
              </a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-10 space-y-5"
        >
          {[
            { key: "name", label: "Your name", type: "text" },
            { key: "email", label: "Email address", type: "email" },
          ].map((f) => (
            <div key={f.key} className="relative">
              <input
                required type={f.type} id={f.key}
                value={form[f.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className="peer w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder-transparent transition-colors"
                placeholder={f.label}
              />
              <label htmlFor={f.key} className="absolute left-0 -top-2 text-xs text-muted-foreground tracking-wider uppercase peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:text-primary transition-all">
                {f.label}
              </label>
            </div>
          ))}
          <div className="relative">
            <textarea
              required id="msg" rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="peer w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder-transparent transition-colors resize-none"
              placeholder="Message"
            />
            <label htmlFor="msg" className="absolute left-0 -top-2 text-xs text-muted-foreground tracking-wider uppercase peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:text-primary transition-all">
              Your message
            </label>
          </div>
          <button type="submit" className="w-full rounded-full bg-gradient-gold py-4 text-primary-foreground font-medium shadow-gold hover:scale-[1.02] transition-transform">
            Send Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}