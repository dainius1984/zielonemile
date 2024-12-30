import React from "react";
import TopNavBar from "./components/sections/TopNavBar";
import Header from "./components/sections/Header";
import HeroCarousel from "./components/sections/HeroCarousel";
import AboutSection from "./components/sections/About";

function App() {
  return (
    <>
      <TopNavBar />
      <Header />
      <HeroCarousel />
      <AboutSection />
    </>
  );
}

export default App;