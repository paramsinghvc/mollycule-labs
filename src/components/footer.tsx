'use client';

import { motion, stagger, useInView, Variants } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

const currentYear = new Date().getFullYear();

const listVariants: Variants = {
  animate: {
    transition: {
      delayChildren: stagger(0.2),
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const itemXVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });
  return (
    <div
      ref={ref}
      id="mollycule-contact"
      className="w-dvw bg-emerald-900 text-white flex flex-col items-center justify-start gap-20 p-20 pb-5"
    >
      <div className="flex items-start justify-evenly w-full gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-2xl">Mollycule Labs</h2>
          <p>Where modern design meets real-life solutions.</p>
          <motion.div
            className="flex gap-4 pt-4"
            variants={listVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
          >
            <motion.a
              href="https://www.linkedin.com/company/mollycule-labs/"
              target="_blank"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn url"
                width="30"
                height="30"
              />
            </motion.a>
            <motion.a
              href="https://github.com/paramsinghvc/"
              target="_blank"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src="/github.svg"
                alt="Github url"
                width="30"
                height="30"
              />
            </motion.a>
          </motion.div>
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold text-xl">Contact Us</h2>
          <motion.div
            className="flex flex-col pt-5 gap-4 text-sm"
            variants={listVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
          >
            <motion.div className="flex gap-2" variants={itemXVariants}>
              <Image
                src="/locationPin.svg"
                alt="Location"
                width="15"
                height="15"
              />
              <p>
                Office 11724, 182-184 High Street North, East Ham, London, E6
                2JA
              </p>
            </motion.div>
            <motion.div className="flex gap-2" variants={itemXVariants}>
              <Image src="/email.svg" alt="email" width="15" height="15" />
              <a href="mailto:info@mollyculelabs.com" target="_blank">
                info@mollyculelabs.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="text-center text-xs">
        © {currentYear} Mollycule Ltd. All rights reserved.
      </div>
    </div>
  );
}
