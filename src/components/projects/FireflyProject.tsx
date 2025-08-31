'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import FireflyBug, { FIREFLY_TRAGECTORY } from './firefly-bug';

export default function FireflyProject() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Offset path for the bug
  const offsetDistance = useTransform(
    scrollYProgress,
    [0, 0.3],
    ['0%', '100%']
  );

  // Title
  const yTitle = useTransform(scrollYProgress, [0.2, 0.3], [100, 0]);
  const opacityTitle = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  // Screenshots
  const x1 = useTransform(scrollYProgress, [0.35, 0.4], [250, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
  const x2 = useTransform(scrollYProgress, [0.4, 0.45], [250, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
  const x3 = useTransform(scrollYProgress, [0.45, 0.5], [250, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const x4 = useTransform(scrollYProgress, [0.5, 0.55], [250, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const x5 = useTransform(scrollYProgress, [0.55, 0.6], [250, 0]);
  const opacity5 = useTransform(scrollYProgress, [0.55, 0.6], [0, 1]);

  // Buttons
  const button1Y = useTransform(scrollYProgress, [0.6, 0.65], [50, 0]);
  const button1Opacity = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);
  const button2Y = useTransform(scrollYProgress, [0.65, 0.7], [50, 0]);
  const button2Opacity = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);
  const button3Y = useTransform(scrollYProgress, [0.7, 0.75], [50, 0]);
  const button3Opacity = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);
  const button4Y = useTransform(scrollYProgress, [0.75, 0.8], [50, 0]);
  const button4Opacity = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);

  const screenshots = [
    { src: '/apps/firefly/Firefly1.png', x: x1, opacity: opacity1 },
    { src: '/apps/firefly/Firefly2.png', x: x2, opacity: opacity2 },
    { src: '/apps/firefly/Firefly3.png', x: x3, opacity: opacity3 },
    { src: '/apps/firefly/Firefly4.png', x: x4, opacity: opacity4 },
    { src: '/apps/firefly/Firefly5.png', x: x5, opacity: opacity5 },
  ];

  const buttons = [
    {
      href: 'https://onelink.to/wxmre2',
      img: '/apps/firefly/Firefly_QR.svg',
      alt: 'QR Code',
      w: 150,
      h: 150,
      y: button1Y,
      opacity: button1Opacity,
    },
    {
      href: 'https://apps.apple.com/gb/app/firefly-dating-chat/id6743059480',
      img: '/apps/DownloadOnAppStore.svg',
      alt: 'App Store',
      w: 180,
      h: 60,
      y: button2Y,
      opacity: button2Opacity,
    },
    {
      href: 'https://play.google.com/store/apps/details?id=com.mollycule.firefly',
      img: '/apps/DownloadOnGooglePlay.svg',
      alt: 'Google Play',
      w: 180,
      h: 60,
      y: button3Y,
      opacity: button3Opacity,
    },
    {
      href: 'https://firefly.mollyculelabs.com/',
      img: '/apps/LaunchWebAppButton.svg',
      alt: 'Web',
      w: 180,
      h: 60,
      y: button4Y,
      opacity: button4Opacity,
    },
  ];

  return (
    <div
      ref={ref}
      className="relative h-[3000px] w-full bg-[#222831] text-white"
    >
      <div className="sticky top-0 h-dvh w-dvw flex flex-col items-center justify-start">
        {/* Bug */}
        <div className="absolute left-0 top-[20dvh] w-dvw h-[20dvh]">
          <FireflyBug
            offsetDistance={offsetDistance}
            offsetPath={FIREFLY_TRAGECTORY}
          />
        </div>

        {/* Titles */}
        <motion.h1
          style={{ y: yTitle, opacity: opacityTitle }}
          className="text-6xl pt-20"
        >
          Firefly App
        </motion.h1>
        <motion.h2
          style={{ y: yTitle, opacity: opacityTitle }}
          className="text-xl pt-10 text-slate-300"
        >
          LGBTQ+ Dating App
        </motion.h2>

        {/* Screenshots + Buttons */}
        <div className="flex items-center justify-start gap-20 pt-15">
          <div className="flex items-center gap-0.5">
            {screenshots.map((shot, i) => (
              <motion.div key={i} style={{ x: shot.x, opacity: shot.opacity }}>
                <Image
                  src={shot.src}
                  width={250}
                  height={400}
                  alt={`Screenshot ${i + 1}`}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center">
            {buttons.map((btn, i) => (
              <motion.a
                key={i}
                href={btn.href}
                target="_blank"
                style={{ y: btn.y, opacity: btn.opacity }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={btn.img}
                  alt={btn.alt}
                  width={btn.w}
                  height={btn.h}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
