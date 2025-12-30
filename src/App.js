import React, { useState } from "react";
import NewHeader from "./components/sections/NewHeader";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
import Features from "./components/sections/Features";
import Contact from "./components/sections/Contact";
import { ConsultationModal } from "./components/ConsultationModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <NewHeader />
      <Hero onContactClick={() => setIsModalOpen(true)} />
      <About />
      <Gallery />
      <Features />
      <Contact />
      <ConsultationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;