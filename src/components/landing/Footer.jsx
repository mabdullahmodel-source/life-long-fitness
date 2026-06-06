const LOGO_URL = 'https://media.base44.com/images/public/6a1d4ba4d051cc043e6e70e6/8ea5704be_LIFELONGFITNESSCENTERpngnotweb1.png';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Memberships', href: '#memberships' },
  { label: 'Personal Training', href: '#training' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={LOGO_URL} alt="Life Long Fitness Center Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_hsla(0,85%,50%,0.4)]" />
            </div>
            <div>
              <p className="font-heading font-extrabold text-xs tracking-widest text-foreground uppercase">
                Life Long
              </p>
              <p className="font-heading text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                Fitness Center
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Life Long Fitness Center
          </p>
        </div>
      </div>
    </footer>
  );
}