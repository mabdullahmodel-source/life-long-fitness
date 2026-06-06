import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const facilities = [
  { emoji: '🏃', title: 'Canal View Walking Area', desc: 'Enjoy your workouts while overlooking the beautiful canal view.' },
  { emoji: '🌅', title: 'Outdoor Canal View Area', desc: 'A refreshing outdoor space for stretching, relaxation, and light workouts.' },
  { emoji: '🚻', title: 'Separate Washrooms', desc: 'Dedicated washrooms for men and women.' },
  { emoji: '🚿', title: 'Shower & Changing Rooms', desc: 'Clean shower facilities and dressing rooms for your convenience.' },
  { emoji: '❤️', title: 'Open Cardio Area', desc: 'Spacious cardio zone equipped for endurance and fat-loss training.' },
  { emoji: '☕', title: 'Relaxation Lounge', desc: 'A comfortable lounge area where members can sit, relax, and recharge.' },
  { emoji: '💪', title: 'Strength Training Area', desc: 'Complete range of equipment for muscle building and strength development.' },
  { emoji: '🔥', title: 'Functional Training Zone', desc: 'Kettlebells, wall balls, plyometric boxes, and bodyweight training space.' },
];

export default function FacilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="facilities" className="relative py-32 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-heading font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-foreground">
            World-Class <span className="text-primary">Facilities</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-2xl bg-card border border-border/50 p-6 hover:border-primary/30 hover:shadow-[0_0_30px_-8px_hsla(0,85%,50%,0.15)] transition-all duration-500"
            >
              <div className="text-3xl mb-4">{item.emoji}</div>
              <h3 className="font-heading font-bold text-sm text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="horizon-rule mt-32" />
    </section>
  );
}