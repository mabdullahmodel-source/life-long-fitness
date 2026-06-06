import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  'Beautiful Canal View Location',
  'Spacious Training Areas',
  'Indoor & Outdoor Workout Spaces',
  'Functional Training Equipment',
  'Flexible Membership Plans',
  'Membership Pause Facility',
  'Professional Personal Training',
  'Clean Washrooms & Showers',
  'Comfortable Lounge Area',
  'Friendly Gym Environment',
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="whyus" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-heading font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            Our Advantages
          </p>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-foreground">
            Why Choose <span className="text-primary">Life Long?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3 bg-card border border-border/50 rounded-xl px-4 py-3 hover:border-white/50 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-body text-foreground/80">{reason}</span>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="font-heading font-black text-3xl lg:text-4xl text-foreground mb-4">
            Ready to Start Your <span className="text-primary">Fitness Journey?</span>
          </h3>
          <p className="text-muted-foreground font-body mb-8">
            Join Life Long Fitness Center Today! Train Strong. Stay Consistent. Achieve Results. 💪🔥
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0561136685"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-primary/90 transition-colors animate-pulse-glow"
            >
              📞 Call: 056 113 6685
            </a>
            <a
              href="https://wa.me/971561136685"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white text-white font-heading font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
          <p className="text-muted-foreground font-body text-sm mt-6">
            📍 Al Raha, C-08 Building, Canal View Side, Abu Dhabi
          </p>
        </motion.div>
      </div>
    </section>
  );
}