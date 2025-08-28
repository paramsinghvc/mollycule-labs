import HeroText from '@/components/hero-text';
import Menu from '@/components/menu';
import ParallaxLayer from '@/components/parallax-layer';
import ScrollDown from '@/components/scroll-down';
import VscodeWindow from '@/components/vscode-window';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[2rem_1fr_2rem] min-w-dvw min-h-dvh p-8">
        <nav className="w-full flex justify-end">
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
      <div className="h-80"></div>
    </div>
  );
}
