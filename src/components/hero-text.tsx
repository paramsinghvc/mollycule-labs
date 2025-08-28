'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroText() {
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <motion.div style={{ y: heroY }}>
      <h1 className="font-bold text-6xl">Mollycule Labs</h1>
    </motion.div>
  );
}
