import Footer from '@/components/footer';
import Menu from '@/components/menu';
import Projects from '@/components/projects';
import ScrollDown from '@/components/scroll-down';
import VscodeWindow from '@/components/vscode-window';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[minmax(80px,auto)_1fr_2rem] min-w-dvw min-h-dvh py-10 px-15">
        <nav className="w-full flex justify-between items-start">
          <Image
            src="/MollyculeLabsLogo.png"
            alt="Mollycule Labs"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-40 sm:w-56 lg:w-64 -top-[10px] md:-top-[20px] relative"
          />
          <Menu />
        </nav>
        <main className="flex justify-center items-center">
          {/* <HeroText /> */}
          <VscodeWindow />
        </main>
        <div className="flex items-center justify-center w-full">
          <ScrollDown />
        </div>
        {/* <ParallaxLayer /> */}
      </div>
      <Projects />
      <Footer />
    </div>
  );
}
