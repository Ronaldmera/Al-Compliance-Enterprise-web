import Card from "../components/Card";
import Imagen from "../assets/abogados.jpg";
import img1 from "../assets/imgAsesoriaJuridica.jpg";
import Button from "../components/Button";
const services = [
  { src: img1, text: "Asesoría jurídica especializada." },
  { src: Imagen, text: "Representación legal en litigios." },
  { src: Imagen, text: "Consultoría empresarial y laboral." },
];
const ServicesHome = () => {
  return (
    <section className="container-fluid bg-light py-5">
      <div className="container d-flex flex-column">
        <h2 className="fw-bold display-6 mb-4 text-center">
          Algunos de Nuestros Servicios
        </h2>
        <p className="border border-secondary mb-sm-3 mb-md-3 mb-lg-5"></p>
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
