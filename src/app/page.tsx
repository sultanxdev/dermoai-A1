import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ProblemsSection from '@/components/home/ProblemsSection';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import ServiceAreas from '@/components/home/ServiceAreas';
import AboutTechnician from '@/components/home/AboutTechnician';
import Testimonials from '@/components/home/Testimonials';
import Faq from '@/components/home/Faq';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full max-w-full overflow-x-clip bg-[#F8FAFC]">
      <Navbar />

      {/* Main Page Content */}
      <div className="flex-grow w-full max-w-full overflow-x-clip">
        <Hero />
        <ProblemsSection />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <ServiceAreas />
        <AboutTechnician />
        <Testimonials />
        <Faq />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
