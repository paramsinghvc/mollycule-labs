'use client';
import FireflyBug from '@/components/projects/firefly-bug';
import {
  motion,
  stagger,
  useInView,
  useScroll,
  useTransform,
  Variants,
} from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const MotionedImage = motion(Image);
const MotionedLink = motion(Link);

const currentYear = new Date().getFullYear();

const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
};

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

export default function Page() {
  const ref = useRef(null);
  const footerRef = useRef(null);
  const inView = useInView(footerRef, { once: false, amount: 0.99 });

  const { scrollYProgress } = useScroll();

  const fireflyFrame1Y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const fireflyFrame2Y = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

  const bgPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ['100% 100%', '0% 0%']
  );

  const bgBlur = useTransform(
    scrollYProgress,
    [0, 0.9, 1],
    ['blur(0px)', 'blur(0px)', 'blur(5px)']
  );

  const footerOpacity = useTransform(scrollYProgress, [0, 0.99, 1], [0, 0, 1]);

  const dimensions = { w: 180, h: 60 };
  const qrCodeConfig = {
    href: 'https://onelink.to/wxmre2',
    img: '/apps/firefly/Firefly_QR.svg',
    alt: 'QR Code',
    w: 200,
    h: 200,
  };

  const buttons = [
    {
      href: 'https://apps.apple.com/gb/app/firefly-dating-chat/id6743059480',
      img: '/apps/DownloadOnAppStore.svg',
      alt: 'App Store',
      ...dimensions,
    },
    {
      href: 'https://play.google.com/store/apps/details?id=com.mollycule.firefly',
      img: '/apps/DownloadOnGooglePlay.svg',
      alt: 'Google Play',
      ...dimensions,
    },
    {
      href: 'https://firefly.mollyculelabs.com/',
      img: '/apps/LaunchWebAppButton.svg',
      alt: 'Web',
      ...dimensions,
    },
  ];

  return (
    <main className="flex flex-col bg-[#222831]">
      <div className="min-h-screen w-full relative" ref={ref}>
        <div className="flex flex-col md:flex-row h-full text-white">
          {/* Left content */}
          <div className="flex flex-col w-full md:w-1/2 items-center lg:items-start justify-start px-6 md:pl-20 pt-10 md:mt-30 gap-6 md:gap-10">
            {/* Heading with bug */}
            <div className="flex items-center w-auto gap-5">
              <div className="w-12 h-12 md:w-20 md:h-20 relative overflow-hidden">
                <FireflyBug />
              </div>
              <div className="flex flex-col gap-2 md:gap-5">
                <motion.h1 className="text-3xl md:text-5xl font-bold">
                  Firefly App
                </motion.h1>
                <motion.h2 className="text-base md:text-lg text-slate-300">
                  LGBTQ+ Dating App
                </motion.h2>
              </div>
            </div>

            <p className="max-w-[90%] md:max-w-[70%] text-sm md:text-base text-center lg:text-left">
              Firefly is a safe and fun gay dating app for LGBTQ singles. Chat,
              meet friends, find love, and connect worldwide.
            </p>

            <motion.a
              href={qrCodeConfig.href}
              target="_blank"
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={qrCodeConfig.img}
                alt={qrCodeConfig.alt}
                width={qrCodeConfig.w}
                height={qrCodeConfig.h}
                className="w-32 h-32 md:w-48 md:h-48"
              />
            </motion.a>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              variants={listVariants}
              initial="initial"
              animate="animate"
            >
              {buttons.map((btn, i) => (
                <motion.a
                  key={i}
                  variants={itemVariants}
                  href={btn.href}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={btn.img}
                    alt={btn.alt}
                    width={btn.w}
                    height={btn.h}
                    className="w-36 md:w-44 h-auto"
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right images */}
          <motion.div
            className="flex flex-col items-center lg:items-start lg:flex-row justify-center h-auto lg:h-dvh lg:justify-end gap-6 lg:gap-20 px-6 lg:pr-20 w-full lg:w-1/2 mt-10 overflow-hidden"
            variants={listVariants}
            initial="initial"
            animate="animate"
          >
            <MotionedImage
              src="/apps/firefly/FireflyFramed1.png"
              variants={itemVariants}
              style={{ y: fireflyFrame1Y }}
              width={519}
              height={1056}
              alt="Firefly screen"
              className="object-contain max-h-[60%] max-w-[60%] lg:w-auto mt-10 lg:mt-60"
            />
            <MotionedImage
              src="/apps/firefly/FireflyFramed2.png"
              variants={itemVariants}
              style={{ y: fireflyFrame2Y }}
              width={519}
              height={1056}
              alt="Firefly screen"
              className="object-contain max-h-[60%] max-w-[60%] lg:w-auto mt-10 lg:mt-30"
            />
          </motion.div>
        </div>
      </div>

      {/* Background section */}
      <div className="relative w-full overflow-hidden h-dvh">
        <motion.div
          className="relative bg-[url('/apps/firefly/FireflyTiles.png')] grayscale bg-fixed bg-cover bg-left-top h-dvh w-full"
          style={{ backgroundPosition: bgPosition, filter: bgBlur }}
        />
        <div className="absolute w-full h-full bg-emerald-800/50 z-1 top-0 left-0"></div>
        <motion.footer
          className="absolute w-full h-1/2 z-2 bottom-0 left-0 bg-gradient-to-t from-emerald-950 to-transparent text-white flex flex-col justify-end p-10"
          style={{ opacity: footerOpacity }}
          ref={footerRef}
        >
          <div className="flex flex-col lg:flex-row justify-evenly w-full gap-0 lg:gap-20">
            <motion.div
              className="flex flex-col p-10 lg:p-20 gap-2 items-center lg:items-start"
              variants={listVariants}
              initial="initial"
              animate={inView ? 'animate' : 'initial'}
            >
              <MotionedLink
                href="/"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                Home
              </MotionedLink>
              <MotionedLink
                href="/privacy-policy"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                Privacy Policy
              </MotionedLink>
              <MotionedLink
                href="/terms-and-conditions"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                Terms & Conditions
              </MotionedLink>
            </motion.div>
            <div className="flex flex-col p-10 lg:p-20 gap-2 items-center lg:items-start">
              <h2 className="font-semibold text-xl">Contact Us</h2>
              <motion.div
                className="flex flex-col pt-1 gap-4 text-sm"
                variants={listVariants}
                initial="initial"
                animate={inView ? 'animate' : 'initial'}
              >
                <motion.div className="flex gap-2" variants={itemVariants}>
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
        </motion.footer>
      </div>
    </main>
  );
}
