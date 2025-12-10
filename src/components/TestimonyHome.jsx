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

const TestimonyHome = () => {
  return (
    <section className="container-fluid py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold display-6 mb-4 text-center">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-center text-muted mb-5">
          La satisfacción de nuestros clientes es nuestra mejor carta de
          presentación.
        </p>

        {/* fila de testimonios */}
        <div className="row justify-content-center">
          {testimonials.map((testimony, index) => (
            <CardText
              key={index}
              text={testimony.text}
              name={testimony.name}
              typeProcess={testimony.typeProcess}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonyHome;
