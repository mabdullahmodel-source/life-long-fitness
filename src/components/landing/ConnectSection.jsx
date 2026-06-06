import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const links = [
{
  label: 'WhatsApp',
  sublabel: 'Chat with us directly',
  href: 'https://wa.me/971561136685',
  icon: 'whatsapp',
  cta: 'Open WhatsApp →'
},
{
  label: 'Instagram',
  sublabel: '@lifelong_fitness_center',
  href: 'https://www.instagram.com/lifelong_fitness_center?igsh=MWxpempzZm1sYWx6OA%3D%3D&utm_source=qr',
  icon: 'instagram',
  cta: 'Follow Us →'
},
{
  label: 'Location',
  sublabel: 'Al Raha, Canal View, Abu Dhabi',
  href: 'https://maps.app.goo.gl/cXmmmpirQoPGXfhcA',
  icon: '📍',
  cta: 'Get Directions →'
}];


export default function ConnectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="connect" className="relative py-24 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Tabby Payment Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16">
          
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111111]">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 pl-10">
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 bg-[#3DBFA0] text-white font-heading font-black text-lg px-5 py-3 rounded-xl tracking-wider shadow-[0_0_20px_hsla(165,53%,48%,0.35)]">
                  tabby
                </div>
                <div>
                  <p className="font-heading font-black text-lg text-white leading-tight">Pay with Tabby — Split in 4, Shop now pay

                  </p>
                  <p className="text-sm text-white/60 font-body mt-1">Split in 4 payments, Shop now pay later. Available at checkout.

                  </p>
                </div>
              </div>
              <a
                href="https://tabby.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-white text-white font-heading font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
                
                Learn More →
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12">
          
          <p className="text-xs font-heading font-semibold tracking-[0.3em] text-primary uppercase mb-3">
            Connect With Us
          </p>
          <h2 className="font-heading font-black text-3xl lg:text-4xl text-white">
            Find Us <span className="text-primary">Everywhere</span>
          </h2>
        </motion.div>

        {/* ── Link Cards ── */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {links.map((card, i) =>
          <motion.a
            key={card.label}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="group flex flex-col items-center bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-white/60 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer">
            
              <div className="mb-5 group-hover:scale-110 transition-transform duration-300">
                {card.icon === 'whatsapp' ?
              <svg viewBox="0 0 32 32" className="w-14 h-14" fill="none">
                    <circle cx="16" cy="16" r="16" fill="#25D366" />
                    <path d="M22.9 9.1A9.7 9.7 0 0 0 16 6.4a9.7 9.7 0 0 0-8.4 14.6L6 26l5.2-1.6A9.7 9.7 0 0 0 16 25.6a9.7 9.7 0 0 0 9.7-9.7 9.7 9.7 0 0 0-2.8-6.8zm-6.9 14.9a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.9.9-3-.2-.3a8 8 0 1 1 6.8 3.7zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1a6.4 6.4 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4l-.8-1.9c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.1 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9c.6.3 1.1.4 1.5.5a3.5 3.5 0 0 0 1.6-.1 2.7 2.7 0 0 0 1.7-1.2 2 2 0 0 0 .1-1.2c-.1-.1-.3-.2-.5-.3z" fill="white" />
                  </svg> :
              card.icon === 'instagram' ?
              <svg viewBox="0 0 32 32" className="w-14 h-14">
                    <defs>
                      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
                        <stop offset="0%" stopColor="#fdf497" />
                        <stop offset="5%" stopColor="#fdf497" />
                        <stop offset="45%" stopColor="#fd5949" />
                        <stop offset="60%" stopColor="#d6249f" />
                        <stop offset="90%" stopColor="#285AEB" />
                      </radialGradient>
                    </defs>
                    <rect width="32" height="32" rx="8" fill="url(#ig-grad)" />
                    <rect x="8.5" y="8.5" width="15" height="15" rx="4" stroke="white" strokeWidth="1.5" fill="none" />
                    <circle cx="16" cy="16" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
                    <circle cx="21.2" cy="10.8" r="1" fill="white" />
                  </svg> :

              <span className="text-5xl">{card.icon}</span>
              }
              </div>

              <p className="font-heading font-black text-base text-white tracking-wider uppercase group-hover:text-primary transition-colors mb-1">
                {card.label}
              </p>
              <p className="text-xs text-white/50 font-body text-center mb-6">{card.sublabel}</p>

              <span className="mt-auto inline-flex items-center px-5 py-2.5 rounded-xl border border-white text-white font-heading font-bold text-xs tracking-wider uppercase group-hover:bg-white group-hover:text-black transition-all duration-300">
                {card.cta}
              </span>
            </motion.a>
          )}
        </div>
      </div>

      <div className="horizon-rule mt-24" />
    </section>);

}