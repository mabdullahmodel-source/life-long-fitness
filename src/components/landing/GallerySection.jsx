import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const galleryItems = [
  { label: 'Free Weights Area', span: 'col-span-2 row-span-2' },
  { label: 'Gym Equipments', span: 'col-span-1 row-span-1' },
  { label: 'Canal View', span: 'col-span-1 row-span-1' },
  { label: 'Professional Trainers', span: 'col-span-1 row-span-1' },
  { label: 'Happy Members', span: 'col-span-1 row-span-2' },
  { label: 'Transformation Results', span: 'col-span-1 row-span-1' },
];

export default function GallerySection({ images }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="relative py-32 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-heading font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            Our Facility
          </p>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-foreground">
            Inside <span className="text-primary">The Facility</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[240px] gap-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`gallery-item relative rounded-xl overflow-hidden group cursor-pointer border border-transparent hover:border-white/40 transition-all duration-300 ${
                i === 0 ? 'col-span-2 row-span-2' : i === 4 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={images[i % images.length]}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-heading font-bold text-sm text-foreground tracking-wider uppercase">
                  {item.label}
                </p>
                <div className="w-8 h-[2px] bg-primary mt-2 group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="horizon-rule mt-32" />
    </section>
  );
}