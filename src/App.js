import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Tarasy from "./pages/portfolio/Tarasy";
import Ogrody from "./pages/portfolio/Ogrody";
import ProjektowanieOgrodow from "./pages/services/ProjektowanieOgrodow";
import BudowaTarasow from "./pages/services/BudowaTarasow";
import PlaceZabaw from "./pages/services/PlaceZabaw";
import Zabudowy from "./pages/services/Zabudowy";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/o-nas" element={<Layout><About /></Layout>} />
      <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
      <Route path="/portfolio/tarasy" element={<Layout><Tarasy /></Layout>} />
      <Route path="/portfolio/ogrody" element={<Layout><Ogrody /></Layout>} />
      <Route path="/uslugi" element={<Layout><Services /></Layout>} />
      <Route path="/uslugi/projektowanie-ogrodow" element={<Layout><ProjektowanieOgrodow /></Layout>} />
      <Route path="/uslugi/budowa-tarasow" element={<Layout><BudowaTarasow /></Layout>} />
      <Route path="/uslugi/plac-zabaw" element={<Layout><PlaceZabaw /></Layout>} />
      <Route path="/uslugi/zabudowy" element={<Layout><Zabudowy /></Layout>} />
      <Route path="*" element={<Layout><Home /></Layout>} />
      </Routes>
    </>
  );
}

export default App;