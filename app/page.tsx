import Hero from '@/components/Hero';
import AutomationScroll from '@/components/AutomationScroll';
import WhatIBuild from '@/components/WhatIBuild';
import FeaturedProjects from '@/components/FeaturedProjects';
import ToolsEcosystem from '@/components/ToolsEcosystem';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Hero />
      <AutomationScroll />
      <WhatIBuild />
      <FeaturedProjects />
      <ToolsEcosystem />
      <Contact />
    </main>
  );
}
