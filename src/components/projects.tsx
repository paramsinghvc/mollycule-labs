'use client';

import TroyageProject from './projects/TroyageProject';
import FireflyProject from './projects/FireflyProject';

export default function Projects() {
  return (
    <div className="flex flex-col items-center relative">
      <TroyageProject />
      <FireflyProject />
    </div>
  );
}
