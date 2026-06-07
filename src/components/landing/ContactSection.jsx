import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-heading font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-foreground">
            Start Your <span className="text-primary">Transformation</span> Today
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-card border border-border/50 p-8">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground mb-1">Location</p>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      LIFELONG FITNESS CENTER, Abu Dhabi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground mb-1">Call or WhatsApp</p>
                    <a
                      href="tel:0561136685"
                      className="text-primary font-body font-semibold text-lg hover:underline"
                    >
                      056 113 6685
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground mb-1">Opening Hours</p>
                    <p className="text-muted-foreground text-sm font-body">
                      5:00 AM – 1:00 AM <span className="text-primary">(Daily)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <Button
                  asChild
                  className="w-full h-14 bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider uppercase hover:bg-primary/90"
                >
                  <a href="tel:0561136685">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a
              href="https://www.google.com/maps/place/LIFELONG+FITNESS+CENTER/@24.4153023,54.5559781,13z"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-border/50 hover:border-white/40 transition-all group h-full min-h-[400px] relative"
            >
              <iframe
                title="LIFELONG FITNESS CENTER Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d91145.47771337123!2d54.55597812795095!3d24.415302345109733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e45d64bdd490b%3A0xe13a037cfff636a1!2sLIFELONG%20FITNESS%20CENTER!5e0!3m2!1sen!2sae!4v1780848792806!5m2!1sen!2sae"
                className="w-full h-full min-h-[400px] grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-3 h-3 text-primary" />
                <span className="text-xs font-heading font-semibold text-foreground">Open in Maps</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
