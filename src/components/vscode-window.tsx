'use client';

import { motion, useScroll, useTransform } from 'framer-motion'; // fixed import
import VscodeSvg from '@/assets/vscode.svg';
import VscodeTyping from './typing-text';

export default function VscodeWindow() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 200], [0, -50]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-transparent border-none cursor-pointer relative"
      style={{ y, scale, opacity }}
      // whileHover={{ scale: 1.1 }}
    >
      <div className="w-full h-auto mx-auto shadow-lg">
        <VscodeSvg className="w-full h-auto " />
      </div>
      <div className="absolute w-full h-full top-15 left-10">
        <VscodeTyping />
      </div>
    </motion.div>
  );
}
