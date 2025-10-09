import Button from "./Button";

const TwoColumnSection = ({
  title,
  text,
  image,
  reverse = false, // cambiar el orden de columnas
  buttons = [], // array de botones [{ text, to, variant }]
  bg = "light", // fondo opcional
  my = 4, //margin y
}) => {
  return (
    <section className={`container-fluid bg-${bg} py-5 my-${my}`}>
      <div className="container">
        <div
          className={`row align-items-center justify-content-center ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* Columna de texto */}
          <div className="col-12 col-lg-6 text-center text-lg-start px-4">
            <h2 className="fw-bold display-5 mb-3">{title}</h2>
            <p className="text-muted mb-4">{text}</p>

            {/* Botones dinámicos */}
            {buttons.length > 0 && (
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-lg-start">
                {buttons.map((btn, index) => (
                  <Button
                    key={index}
                    to={btn.to}
                    text={btn.text}
                    variant={btn.variant || "primary"}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Columna de imagen */}
          <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
            <img src={image} alt={title} className="img-fluid rounded-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;
