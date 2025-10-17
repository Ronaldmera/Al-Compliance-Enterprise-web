import Card from "./Card";
import Imagen from "../assets/abogados.webp";
import img1 from "../assets/imgAsesoriaJuridica.webp";
import Button from "./Button";

const services = [
  { src: img1, text: "Asesoría jurídica especializada." },
  { src: Imagen, text: "Representación legal en litigios." },
  { src: img1, text: "Consultoría empresarial y laboral." },
];

const ServicesHome = () => {
  return (
    <section className="container-fluid bg-light py-5" data-aos="fade-up">
      <div className="container d-flex flex-column">
        <p className="text-muted text-center fw-ligh fs-4 fst-italic mb-5 px-lg-5">
          <i className="bi bi-briefcase-fill fs-2 mx-2"></i>
          Entendemos tus necesidades legales y trabajamos contigo para ofrecerte
          la mejor estrategia jurídica en cada situación.
        </p>
        <h2 className="fw-bold display-6 mb-4 text-center">
          Algunos de Nuestros Servicios
        </h2>
        <p className="border mb-sm-3 mb-md-3 mb-lg-5"></p>
        {/* creando cards dinamicamente */}
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <Card key={index} src={service.src} text={service.text} />
          ))}
        </div>
        <div className=" d-flex justify-content-center mt-2">
          <Button to={"/servicios"} text={"ver más"} />
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
