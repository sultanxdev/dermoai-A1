import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import AboutDoctor from '@/components/home/AboutDoctor';
import Testimonials from '@/components/home/Testimonials';
import Faq from '@/components/home/Faq';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full max-w-full overflow-x-clip selection:bg-[var(--accent)] selection:text-white">
      <Navbar />
      
      {/* Page Content */}
      <div className="flex-grow w-full max-w-full overflow-x-clip">
        <Hero />
        <Services />
        <AboutDoctor />
        <Testimonials />
        <Faq />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
