'use client';

import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  Easing,
  motion,
  steps,
  Transition,
} from 'motion/react';

const lines = [
  "const hello = 'Hello World!';",
  "console.log('Welcome to Mollycule Labs 🚀');",
  'function greet() { return hello; }',
];

export default function VscodeTyping() {
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const timeout = setTimeout(() => {
      const line = lines[lineIndex];
      setCurrentText((prev) => prev + line[charIndex]);
      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === line.length) {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
        setCurrentText((prev) => prev + '\n');
      }
    }, 50); // typing speed

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex]);

  return (
    <div className="w-full font-mono text-left text-lg whitespace-pre-wrap text-white">
      {currentText}
      <motion.div
        className="inline-block w-[1ch]"
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: steps(1, 'end'),
          repeatType: 'mirror',
        }}
      >
        |
      </motion.div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 2s steps(2, start) infinite;
        }
      `}</style>
    </div>
  );
}
