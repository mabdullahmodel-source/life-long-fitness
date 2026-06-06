import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LOGO_URL = 'https://media.base44.com/images/public/6a1d4ba4d051cc043e6e70e6/8ea5704be_LIFELONGFITNESSCENTERpngnotweb1.png';

const highlights = [
  'Canal View Location – Al Raha, Abu Dhabi',
  'Personal Training Available',
  'Flexible Membership Plans',
  'Membership Pause Facility',
  'Clean Showers & Changing Rooms',
];

export default function HeroSection({ heroImage, heroAlt }) {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Split Background Images */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="relative overflow-hidden">
          <img src={heroImage} alt="Gym floor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative overflow-hidden">
          <img src={heroAlt} alt="Cardio area" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

      {/* Velocity Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none">
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="text-[20vw] font-heading font-black text-foreground/[0.03] tracking-tighter whitespace-nowrap"
        >
          TRANSFORM
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <img
              src={LOGO_URL}
              alt="Life Long Fitness Center"
              className="h-28 sm:h-36 w-auto object-contain drop-shadow-[0_0_20px_hsla(0,85%,50%,0.4)]"
            />
          </motion.div>

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-heading font-semibold tracking-wider text-primary uppercase">
              Open Daily 5:00 AM – 1:00 AM
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground mb-4"
          >
            Train Strong.
            <br />
            Stay Healthy.
            <br />
            <span className="text-primary">Live Better.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base text-muted-foreground font-body leading-relaxed mb-8 max-w-lg"
          >
            Located in Al Raha with a beautiful canal-view setting, Life Long Fitness Center provides a comfortable and motivating environment for all fitness levels.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
          >
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm font-body text-foreground/80">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              className="h-14 px-8 bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider uppercase hover:bg-primary/90 group animate-pulse-glow"
            >
              <a href="https://wa.me/971561136685" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              onClick={() => scrollTo('#memberships')}
              variant="outline"
              className="h-14 px-8 border-white text-white font-heading font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-black"
            >
              View Membership Plans
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Horizon */}
      <div className="absolute bottom-0 left-0 right-0 horizon-rule" />
    </section>
  );
}