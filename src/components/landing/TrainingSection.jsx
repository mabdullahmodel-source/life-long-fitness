import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardList, Flame, Dumbbell, Zap, TrendingUp, Target } from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    title: 'Monthly PT Packages',
    desc: 'Dedicated monthly training programs with your personal trainer, tracking progress every step of the way.',
  },
  {
    icon: Flame,
    title: 'Weight Loss Programs',
    desc: 'Science-backed fat burning protocols designed for sustainable, lasting transformation results.',
  },
  {
    icon: Dumbbell,
    title: 'Muscle Building Programs',
    desc: 'Progressive overload training systems to maximize hypertrophy and strength gains.',
  },
  {
    icon: Zap,
    title: 'Strength & Conditioning',
    desc: 'Build explosive power, endurance, and functional strength through structured conditioning.',
  },
  {
    icon: TrendingUp,
    title: 'Functional Training',
    desc: 'Kettlebells, plyometrics, wall balls, and bodyweight training for athletic performance.',
  },
  {
    icon: Target,
    title: 'Personalized Workout Plans',
    desc: 'Custom plans tailored to your unique body type, schedule, and personal fitness objectives.',
  },
];

export default function TrainingSection({ trainingImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="training" className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={trainingImage}
          alt="Personal training at Life Long Fitness"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-heading font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            Personal Training
          </p>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-foreground mb-4">
            Get Faster Results with{' '}
            <span className="text-primary">Expert Guidance</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Our certified trainers will guide, motivate, and support you every step of the way toward your goals.
          </p>
        </motion.div>

        {/* Feature Grid - 2x3 Bento */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-card border border-border/50 p-8 lg:p-10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Cut corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-[140%] h-[2px] bg-primary/20 origin-top-right rotate-45 translate-y-[22px]" />
              </div>

              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground font-body mb-4">
            Session-based or monthly packages available.
          </p>
          <a
            href="https://wa.me/971561136685"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white text-white font-heading font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            Enquire About Personal Training
          </a>
        </motion.div>
      </div>

      <div className="horizon-rule mt-32" />
    </section>
  );
}