import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import TopBar from "./components/TopBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación
      once: true, // si quieres que se ejecute solo una vez
      offset: 120,
    });
  }, []);
  return (
    <>
      <Header />
      <TopBar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
