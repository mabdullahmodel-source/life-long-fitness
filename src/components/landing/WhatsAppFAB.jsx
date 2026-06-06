import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/9710561136685"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_-4px_hsla(0,85%,50%,0.6)] hover:shadow-[0_0_45px_-2px_hsla(0,85%,50%,0.8)] hover:scale-110 transition-all duration-300 group"
    >
      {/* Spinning text */}
      <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
        <defs>
          <path
            id="circlePath"
            d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          />
        </defs>
        <text className="fill-primary-foreground text-[9px] font-heading font-bold tracking-[0.15em] uppercase">
          <textPath href="#circlePath">
            START NOW • START NOW • 
          </textPath>
        </text>
      </svg>

      {/* Center icon */}
      <MessageCircle className="w-6 h-6 text-primary-foreground relative z-10 group-hover:scale-110 transition-transform" />
    </motion.a>
  );
}