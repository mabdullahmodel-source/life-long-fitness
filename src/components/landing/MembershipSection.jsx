import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IMG1 = 'https://media.base44.com/images/public/6a1d4ba4d051cc043e6e70e6/6c78277aa_WhatsAppImage2026-06-02at152204.jpg';
const IMG2 = 'https://media.base44.com/images/public/6a1d4ba4d051cc043e6e70e6/62fa49a07_WhatsAppImage2026-06-02at1522041.jpg';

const plans = [
{
  name: '1 Day Pass',
  tag: 'Visitors',
  popular: false,
  perks: ['Train during operating hours', 'All gym zones', 'Weights Area', 'Cardio Area', 'Functional Training Area']
},
{
  name: '1 Month',
  tag: '',
  popular: false,
  perks: ['Train any day, anytime', 'All gym zones', 'Weights Area', 'Cardio Area', 'Functional Training Area', 'Pause up to 10 Days']
},
{
  name: '3 Months',
  tag: '',
  popular: false,
  perks: ['Train any day, anytime', 'All gym zones', 'Weights Area', 'Cardio Area', 'Functional Training Area', 'Pause up to 30 Days']
},
{
  name: '6 Months',
  tag: 'Best Value',
  popular: true,
  perks: ['Train any day, anytime', 'All gym zones', 'Weights Area', 'Cardio Area', 'Functional Training Area', 'Pause up to 40 Days']
},
{
  name: '12 Months',
  tag: '',
  popular: false,
  perks: ['Train any day, anytime', 'All gym zones', 'Weights Area', 'Cardio Area', 'Functional Training Area', 'Pause up to 60 Days']
}];


export default function MembershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="memberships" className="relative overflow-hidden">
      {/* Split background images */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="relative overflow-hidden">
          <img src={IMG1} alt="Cardio area" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative overflow-hidden">
          <img src={IMG2} alt="Weights area" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
      </div>
      {/* Red center glow line */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

      <div ref={ref} className="relative z-10 py-32 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16">
          
          <p className="text-xs font-heading font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            Membership Plans
          </p>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-white mb-4">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Gift className="w-5 h-5 text-primary" />
            <p className="text-white/60 font-body text-base">
              Get a <span className="text-primary font-semibold">1-Day FREE Trial</span> Before Joining!
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 mt-4 px-4 py-2.5 rounded-xl bg-[#111111] border border-white/10 w-fit mx-auto">
            <span className="bg-[#3DBFA0] text-white font-heading font-black text-sm px-3 py-1 rounded-lg tracking-wider">tabby</span>
            <p className="text-white/60 font-body text-sm">Pay with Tabby — Split in 4, Shop now pay later. Available at checkout.</p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {plans.map((plan, i) =>
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative group ${plan.popular ? 'lg:-mt-4' : ''}`}>
            
              {plan.popular &&
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 bg-primary text-white font-heading font-bold text-[10px] tracking-wider uppercase rounded-full">
                  Best Value
                </div>
            }
              <div
              className={`h-full rounded-2xl p-6 flex flex-col transition-all duration-500 ${
              plan.popular ?
              'bg-black/70 backdrop-blur-sm border-2 border-primary/60 shadow-[0_0_40px_-8px_hsla(0,85%,50%,0.3)]' :
              'bg-black/60 backdrop-blur-sm border border-white/10 hover:border-white/60'}`
              }>
              
                <p className="font-heading font-black text-sm tracking-wider uppercase text-white mb-2">
                  {plan.name}
                </p>
                {plan.tag && plan.tag !== 'Best Value' &&
              <span className="inline-block text-[10px] font-heading font-semibold tracking-widest uppercase text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full mb-4">{plan.tag}</span>
              }

                <div className="flex-1 space-y-3 mt-4 mb-8">
                  {plan.perks.map((perk) =>
                <div key={perk} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-xs text-white/70 font-body">{perk}</span>
                    </div>
                )}
                </div>

                <Button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full h-12 font-heading font-bold text-xs tracking-wider uppercase transition-all ${
                plan.popular ?
                'bg-primary text-white hover:bg-primary/90' :
                'bg-transparent text-white hover:bg-white hover:text-black border border-white hover:border-white'}`
                }>
                
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          )}
        </div> 
      </div>

      <div className="relative z-10 horizon-rule" />
    </section>);

}