// src/components/ServicesWeProvide.tsx

import React, { useCallback, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import stoneMaintenanceImg from '../assets/stone-maintenance.jpg';
import onsiteGuidanceImg from '../assets/on-site-guidance.jpg';
import tileMaintenanceImg from '../assets/tile-maintenance.png';
import expertGuidanceImg from '../assets/expert-guidance.png';



// --- TYPESCRIPT INTERFACES ---
interface Service {
  id: number;
  imageSrc: string;
  title: string;
}

// --- DATA & CONFIG ---
const servicesData: Service[] = [
  { id: 1, imageSrc: stoneMaintenanceImg, title: 'Stone Maintenance' },
  { id: 2, imageSrc: onsiteGuidanceImg, title: 'On Site Guidance' },
  { id: 3, imageSrc: tileMaintenanceImg, title: 'Tile Maintenance' },
  { id: 4, imageSrc: expertGuidanceImg, title: 'Expert Guidance' },
  { id: 5, imageSrc: stoneMaintenanceImg, title: 'Stone Maintenance 2' }, // Added for carousel loop demo
];

const emblaOptions: EmblaOptionsType = {
  loop: true,
  align: 'start',
  slidesToScroll: 1,
};

// --- ANIMATION VARIANTS ---
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// --- MAIN COMPONENT ---
const ServicesWeProvide: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = (api: EmblaCarouselType) => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect(emblaApi); // Initial check
  }, [emblaApi]);

  return (
    <section className="bg-[#444444] text-white py-16 sm:py-24 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-serif text-center mb-4"
        >
          Services We Provide!
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-center text-white/80 mb-12"
        >
          Beyond Products We Provide Complete Stone Care Services
        </motion.p>

        <div className="relative">
          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {servicesData.map((service) => (
                <motion.div
                  key={service.id}
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pl-4"
                  variants={itemVariants}
                >
                  <div className="relative rounded-2xl overflow-hidden group aspect-[4/5]">
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full p-5">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous service"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <FiArrowLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next service"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <FiArrowRight size={24} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesWeProvide;