import Border from "./Border";
import CardText from "./CardText";

const testimonials = [
  {
    text: "El abogado Mera me ayudó con un proceso laboral complicado. Siempre fue claro, atento y logró un excelente resultado.",
    name: "Carlos Ramirez",
    typeProcess: "Cliente en proceso laboral",
  },
  {
    text: "Recibí una asesoría en derecho civil y quedé muy tranquila con la atención y el profesionalismo.",
    name: "María González",
    typeProcess: "Cliente en asesoría civil",
  },
  {
    text: "Excelente acompañamiento durante todo el proceso. Recomendado al 100%.",
    name: "Julián Pérez",
    typeProcess: "Caso de derecho penal",
  },
];

const TestimonyHome = ({ img }) => {
  return (
    <section className="container-fluid py-3 bg-light">
      <div className="container bg-white p-4 rounded-5">
        <Border></Border>
        <h2 className="fw-bold display-6 mb-4 text-center text-dark">
          Nuestra mejor referencia: nuestros clientes
        </h2>
        <p className="text-center text-muted mb-5 fs-5">
          La satisfacción de nuestros clientes es nuestra mejor carta de
          presentación.
        </p>
        <div className="icon_container d-flex justify-content-center mb-5">
          <img src={img} alt="" className="  img_icons" />
        </div>

        {/* fila de testimonios */}
        <div className="row justify-content-center">
          {testimonials.map((testimony, index) => (
            <CardText
              key={index}
              text={testimony.text}
              name={testimony.name}
              typeProcess={testimony.typeProcess}
              iconClass={"bi bi-person-circle"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonyHome;
