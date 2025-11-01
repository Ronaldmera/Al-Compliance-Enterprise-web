import Imagen from "../assets/hero.svg";
import ImagenAbogados from "../assets/abogados.webp";
import TwoColumnSection from "../components/TwoColumnSection";
import ServicesHome from "../components/ServicesHome";
import TestimonyHome from "../components/TestimonyHome";
import SectionFrequentQuestions from "../components/SectionFrequentQuestions";
import Hero from "../components/Hero";
import imgHome from "../assets/hero.jpg";

const Home = () => {
  return (
    <>
      <TwoColumnSection
        title="Tu tranquilidad legal, nuestra prioridad"
        text="En AL COMPLIANCE ENTERPRISE S.A.S brindamos asesoría y acompañamiento jurídico especializado para empresas y personas. Nos enfocamos en ofrecer soluciones efectivas, éticas y adaptadas a tus necesidades legales."
        image={Imagen}
        reverse={false} // si lo pones en true, la imagen va a la izquierda
        buttons={[
          { text: "Contáctanos", to: "/contacto" },
          {
            text: "Nuestros servicios",
            to: "/servicios",
            variant: "outline-primary",
          },
        ]}
      />
      <TwoColumnSection
        title="Sobre Nosotros"
        text="Somos una firma legal especializada en derecho empresarial y
                cumplimiento normativo. Ayudamos a compañías a proteger sus
                intereses y actuar conforme a la ley."
        image={ImagenAbogados}
        reverse={true}
        buttons={[
          { text: "Conoce más", to: "/nosotros", variant: "secundary" },
        ]}
        bg="white"
        my={5}
      />
      <Hero
        image={imgHome}
        iconClass="bi bi-award"
        containerAnimation="fade"
        textAnimation="fade-left"
        text={
          "Más de 10 años brindando asesoría jurídica con responsabilidad y confianza."
        }
      />

      <ServicesHome />
      <TestimonyHome />
      <SectionFrequentQuestions />
    </>
  );
};

export default Home;
