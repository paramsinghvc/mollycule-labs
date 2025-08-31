'use client';

import { motion, useScroll, useTransform } from 'framer-motion'; // fixed import
import ChevronSvg from '@/assets/chevron.svg';
import MouseSvg from '@/assets/mouse.svg';
import Lenis from 'lenis';
import { useEffect } from 'react';

export default function ScrollDown() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [100, 200], [1, 0]);

  return (
    <motion.a
      href="#mollycule-projects"
      className="flex flex-col items-center justify-center bg-transparent border-none cursor-pointer"
      style={{ opacity }}
      initial={{ y: -10 }}
      animate={{
        y: 0,
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        },
      }}
      whileHover={{ scale: 1.1 }}
    >
      <MouseSvg className="w-10 h-10 text-black" />
      <ChevronSvg className="w-10 h-10 text-black" />
    </motion.a>
  );
}
