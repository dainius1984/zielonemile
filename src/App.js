import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Tarasy from "./pages/portfolio/Tarasy";
import Ogrody from "./pages/portfolio/Ogrody";
import PrzedPo from "./pages/portfolio/PrzedPo";
import ProjektowanieOgrodow from "./pages/services/ProjektowanieOgrodow";
import BudowaTarasow from "./pages/services/BudowaTarasow";
import Nawadnianie from "./pages/services/Nawadnianie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/o-nas" element={<Layout><About /></Layout>} />
      <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
      <Route path="/portfolio/tarasy" element={<Layout><Tarasy /></Layout>} />
      <Route path="/portfolio/ogrody" element={<Layout><Ogrody /></Layout>} />
      <Route path="/portfolio/przed-po" element={<Layout><PrzedPo /></Layout>} />
      <Route path="/uslugi" element={<Layout><Services /></Layout>} />
      <Route path="/uslugi/projektowanie-ogrodow" element={<Layout><ProjektowanieOgrodow /></Layout>} />
      <Route path="/uslugi/budowa-tarasow" element={<Layout><BudowaTarasow /></Layout>} />
      <Route path="/uslugi/nawadnianie" element={<Layout><Nawadnianie /></Layout>} />
      <Route path="*" element={<Layout><Home /></Layout>} />
    </Routes>
  );
}

export default App;