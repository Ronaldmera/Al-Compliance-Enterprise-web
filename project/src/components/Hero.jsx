import Button from "./Button";
const Hero = ({ title, subtitle, image }) => {
  return (
    <section className="container-fluid bg-light section-hero">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Texto */}
          <div className="col-12 col-lg-7 text-center text-md-start px-5">
            <h1 className="display-5 fw-bold mb-3">{title}</h1>
            <p className="lead text-muted mb-4">{subtitle}</p>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
              {/* componentes boton */}
              <Button to={"/contacto"} text={"Contáctanos"} />
              <Button
                to={"/servicios"}
                text={"Conoce nuestros servicios"}
                variant="outline-primary"
              />
            </div>
          </div>

          {/* Imagen */}
          <div className="col-12 col-lg-5 text-center mt-5 mt-md-0">
            <img
              src={image}
              alt="Imagen del hero"
              className="img-fluid rounded-3 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
