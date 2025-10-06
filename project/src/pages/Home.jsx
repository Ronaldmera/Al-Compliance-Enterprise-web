import Hero from "../components/Hero";
import Imagen from "../assets/imagenHero1.svg";

const Home = () => {
  return (
    <>
      <Hero
        title={"Tu tranquilidad legal, nuestra prioridad"}
        subtitle={
          "En AL COMPLIANCE ENTERPRISE S.A.S brindamos asesoría y acompañamiento jurídico especializado para empresas y personas. Nos enfocamos en ofrecer soluciones efectivas, éticas y adaptadas a tus necesidades legales."
        }
        image={Imagen}
      />
    </>
  );
};

export default Home;
