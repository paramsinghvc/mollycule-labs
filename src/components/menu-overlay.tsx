'use client';

import {
  AnimatePresence,
  easeInOut,
  motion,
  stagger,
  Variants,
} from 'motion/react';
import { FC, PropsWithChildren } from 'react';

const ulVariants: Variants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0.3,
      delayChildren: stagger(0.2),
      when: 'beforeChildren',
    },
  },
};

const listItemVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const inkbarVariants: Variants = {
  initial: { scaleX: 0 },
  hovering: { scaleX: 1, transition: { duration: 0.3, ease: easeInOut } },
};

const MenuItem: FC<
  PropsWithChildren<{ href: string; onClose: () => void }>
> = ({ href, children, onClose }) => (
  <motion.li variants={listItemVariants} className="px-4 py-8 cursor-pointer">
    <motion.a
      href={href}
      onClick={onClose}
      className="relative text-4xl font-medium"
      whileHover="hovering"
      initial="initial"
    >
      {children}
      <motion.div
        variants={inkbarVariants}
        className="absolute left-0 -bottom-1 w-full h-1 rounded bg-white origin-left"
      />
    </motion.a>
  </motion.li>
);

export default function MenuOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="w-dvw h-dvh bg-emerald-800 fixed flex justify-center items-center top-0 left-0 origin-top-right z-2"
      transition={{
        delay: 0.3,
        duration: 0.3,
        ease: 'easeInOut',
      }}
      initial={{
        clipPath: 'circle(0% at 100% 0%)',
      }}
      animate={{
        clipPath: 'circle(110% at 100% 0%)',
      }}
      exit={{ clipPath: 'circle(0% at 100% 0%)' }}
    >
      <motion.ul
        className="flex flex-col text-white items-center justify-center gap-2"
        variants={ulVariants}
        initial="initial"
        animate="visible"
      >
        <MenuItem href="#" onClose={onClose}>
          Home
        </MenuItem>
        <MenuItem href="#mollycule-projects" onClose={onClose}>
          Projects
        </MenuItem>
        <MenuItem href="#mollycule-contact" onClose={onClose}>
          Contact
        </MenuItem>
      </motion.ul>
    </motion.div>
  );
}
