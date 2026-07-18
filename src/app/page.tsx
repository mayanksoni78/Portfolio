import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import GrainOverlay from '@/components/ui/GrainOverlay';
import Scene from '@/components/three/Scene';

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen">
      <GrainOverlay />
      <Scene />
      <Navbar />
      
      <div className="flex-1 w-full">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
