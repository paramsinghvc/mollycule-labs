'use client';

import {
  motion,
  TargetAndTransition,
  useScroll,
  useTransform,
} from 'framer-motion'; // fixed import
import DiamondSvg from '@/assets/diamond.svg';
import StarSvg from '@/assets/star.svg';

export default function ParallaxLayer() {
  const { scrollY } = useScroll();

  // Scroll-based transforms
  const starY = useTransform(scrollY, [0, 500], [0, -200]);
  const starRotate = useTransform(scrollY, [0, 1000], [0, 90]);

  // Animation config for pulsing
  const pulseAnimation: TargetAndTransition = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  };

  return (
    <div className="w-[100vw] h-[200vh] absolute">
      {/* Diamond */}
      <motion.div
        className="absolute left-10 top-32 z-10"
        initial={{ scale: 1 }}
        animate={pulseAnimation}
      >
        <DiamondSvg className="w-50 h-50 text-amber-500/35" />
      </motion.div>

      {/* Star */}
      <motion.div
        initial={{ scale: 1 }}
        animate={pulseAnimation}
        className="absolute right-10 top-[70vh] z-10"
        style={{ y: starY, rotate: starRotate }}
      >
        <StarSvg className="w-50 h-50 text-emerald-500/35" />
      </motion.div>
    </div>
  );
}
