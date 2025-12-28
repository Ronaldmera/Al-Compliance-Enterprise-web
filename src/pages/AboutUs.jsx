import Hero from "../components/Hero";
import imgHero from "../assets/conocenos.jpg";
import imgClock from "../assets/clock.png";
import imgMision from "../assets/mision.png";
import imgVision from "../assets/vision.png";
import TwoColumnSection from "../components/TwoColumnSection";

const AboutUs = () => {
  return (
    <>
      <Hero
        image={imgHero}
        iconClass="bi bi-person-arms-up"
        text={"Conócenos"}
      />
      <TwoColumnSection
        title="¿Quienes Somos?"
        text="Somos un grupo de abogados comprometidos con brindar asesoría y representación legal de alta calidad. Nuestra labor se basa en la ética, la responsabilidad y la búsqueda constante de soluciones justas y efectivas para cada uno de nuestros clientes."
        image={imgClock}
        reverse={false}
        titleCenter={true}
        showImgPhone={true}
      />
      <TwoColumnSection
        title="Misión"
        text="Brindar asesoría y representación legal con ética, responsabilidad y compromiso, ofreciendo soluciones efectivas que garanticen la defensa de los derechos e intereses de nuestros clientes."
        image={imgMision}
        reverse={true}
        bg="white"
        titleCenter={true}
        showImgPhone={true}
      />
      <TwoColumnSection
        title="Visión"
        text="Consolidarnos como una firma jurídica reconocida por su excelencia profesional, transparencia y capacidad de brindar acompañamiento legal integral a nivel nacional."
        image={imgVision}
        reverse={false}
        titleCenter={true}
        showImgPhone={true}
      />
    </>
  );
};

export default AboutUs;
