import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FounderStory } from "./components/FounderStory";
import { LegacyStats } from "./components/LegacyStats";
import { LegacyRoadmap } from "./components/LegacyRoadmap";
import { BrandPhilosophy } from "./components/BrandPhilosophy";
import { BrandsShowcase } from "./components/BrandsShowcase";
import { CentreOfExcellence } from "./components/CentreOfExcellence";
import { Experience } from "./components/Experience";
import { Careers } from "./components/Careers";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Custom scrollbar styles
    const style = document.createElement("style");
    style.textContent = `
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f5f9;
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #f59e0b, #fb923c);
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #fb923c, #f59e0b);
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <FounderStory />
      <LegacyStats />
      <LegacyRoadmap />
      <BrandPhilosophy />
      <BrandsShowcase />
      <CentreOfExcellence />
      <Experience />
      <Careers />
      <Footer />
    </div>
  );
}