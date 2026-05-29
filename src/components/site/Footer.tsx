import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="logo" className="h-10 w-10" />
            <div>
              <div className="font-display text-lg text-foreground">The Arians</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Hotel & Suites</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            A Citadel for Comfort — a top-class luxury retreat in Udu, Delta State where every stay feels like coming home.
          </p>
          <div className="mt-5 space-y-1 text-sm text-muted-foreground">
            <div><a href="mailto:thearians.h@gmail.com" className="hover:text-primary transition-colors">thearians.h@gmail.com</a></div>
            <div><a href="tel:+2347075748942" className="hover:text-primary transition-colors">0707 574 8942</a></div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["About", "Suites", "Amenities", "Gallery", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Newsletter</div>
          <p className="text-sm text-muted-foreground mb-3">Be first to know about offers and events.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email" required placeholder="Email"
              className="flex-1 bg-input/50 border border-border rounded-full px-4 py-2 text-sm text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary"
            />
            <button className="rounded-full bg-gradient-gold px-4 text-sm text-primary-foreground hover:scale-105 transition-transform">Join</button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} The Arians Hotel & Suites. All rights reserved.</div>
        <div>Crafted with care in Udu, Delta State.</div>
      </div>
    </footer>
  );
}