import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { CanvasBackground } from '@/components/ui/canvas-background';

export default function Home() {
  return (
    <>
      <CanvasBackground />
      <FlowArt aria-label="Sujal Kunwar Portfolio">
        {/* Hero Section */}
        <FlowSection aria-label="Home" style={{ backgroundColor: 'transparent' }}>
          <Hero />
        </FlowSection>

        {/* About Section */}
        <FlowSection aria-label="About" style={{ backgroundColor: 'transparent' }}>
          <About />
        </FlowSection>

        {/* Projects Section */}
        <FlowSection aria-label="Projects" style={{ backgroundColor: 'transparent' }}>
          <Projects />
        </FlowSection>

        {/* Contact Section */}
        <FlowSection aria-label="Contact" style={{ backgroundColor: 'transparent' }}>
          <Contact />
        </FlowSection>
      </FlowArt>
    </>
  );
}

