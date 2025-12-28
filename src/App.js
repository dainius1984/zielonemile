import React from "react";
import NewHeader from "./components/sections/NewHeader";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
import Features from "./components/sections/Features";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <NewHeader />
      <Hero />
      <About />
      <Gallery />
      <Features />
      <Contact />
    </div>
  );
}

export default App;