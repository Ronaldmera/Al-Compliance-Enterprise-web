import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import LegalServices from "../pages/LegalServices";
import Team from "../pages/Team";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/servicios" element={<LegalServices />} />
      <Route path="/equipo" element={<Team />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
