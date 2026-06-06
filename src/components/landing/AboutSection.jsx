import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, TrendingUp, Heart } from 'lucide-react';

const stats = [
  { icon: Target, label: 'Personal Goals', value: 'Tailored' },
  { icon: Users, label: 'Expert Trainers', value: 'Certified' },
  { icon: TrendingUp, label: 'Success Rate', value: '95%+' },
  { icon: Heart, label: 'Community', value: 'Supportive' },
];

export default function AboutSection({ aboutImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background scroll text */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <span className="text-[12vw] font-heading font-black text-foreground/[0.02] tracking-tighter whitespace-nowrap">
          AL RAHA &nbsp; CANAL VIEW &nbsp; ABU DHABI
        </span>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={aboutImage}
                alt="Life Long Fitness Center modern interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs font-heading font-semibold tracking-[0.3em] text-primary uppercase mb-4">
              About Us
            </p>
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Welcome to
              <br />
              <span className="text-primary">Life Long</span> Fitness Center
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed text-base mb-4">
              At Life Long Fitness Center, we believe fitness should be accessible, enjoyable, and effective. Our gym offers modern equipment, functional training areas, cardio facilities, and professional guidance to help you achieve your goals.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed text-base mb-8">
              We welcome beginners, fitness enthusiasts, and athletes looking for a clean, friendly, and results-driven training environment.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-card border border-border/50 hover:border-white/50 transition-colors group"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-heading font-bold text-lg text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="horizon-rule mt-32" />
    </section>
  );
}