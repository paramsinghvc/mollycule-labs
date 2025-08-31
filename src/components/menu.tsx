'use client';

import { AnimatePresence, Easing, motion, Transition } from 'motion/react';
import { useState } from 'react';
import MenuOverlay from './menu-overlay';

const easing: Easing = [0.68, -0.85, 0.27, 1.55];

const barTransitionOnOpen: Transition = {
  ease: easing,
  y: { duration: 0.3 },
  rotate: { duration: 0.3, delay: 0.4 },
  backgroundColor: { duration: 0.1, delay: 0.3 },
};

const barTransitionOnClose: Transition = {
  ease: easing,
  rotate: { duration: 0.3, delay: 0.1 },
  y: { duration: 0.3, delay: 0.5 },
  backgroundColor: { duration: 0.8 },
};

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="relative flex flex-col border-0 justify-center items-center h-8 w-8 z-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          initial={false}
          animate={
            isOpen
              ? { rotate: 45, y: 5, backgroundColor: '#FFFFFF' }
              : { rotate: 0, y: 0, backgroundColor: '#000000' }
          }
          transition={isOpen ? barTransitionOnOpen : barTransitionOnClose}
          className="relative inline-block mt-0 w-8 h-1 bg-black rounded"
        />
        <motion.div
          initial={false}
          animate={
            isOpen
              ? { rotate: -45, y: -5, backgroundColor: '#FFFFFF' }
              : { rotate: 0, y: 0, backgroundColor: '#000000' }
          }
          transition={isOpen ? barTransitionOnOpen : barTransitionOnClose}
          className="relative inline-block mt-1.5 w-8 h-1 bg-black rounded"
        />
      </motion.button>
      <AnimatePresence>
        {isOpen && <MenuOverlay onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
