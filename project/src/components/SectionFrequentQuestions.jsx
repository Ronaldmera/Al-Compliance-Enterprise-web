import { useState } from "react";

const SectionFrequentQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuánto cuesta una consulta?",
      answer:
        "Depende del tipo de caso, pero la primera orientación es gratuita.",
    },
    {
      question: "¿Atienden casos civiles y laborales?",
      answer: "Sí, manejamos casos civiles, laborales y familiares.",
    },
    {
      question: "¿Dónde se encuentran ubicados?",
      answer: "Estamos en el centro de Popayán, cerca del parque Caldas.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container-fluid py-5" data-aos="fade-up">
      <div className="container d-flex flex-column">
        <h2 className="fw-bold display-6 mb-4 text-center">
          Preguntas Frecuentes
        </h2>
        <p className="border mb-sm-3 mb-md-3 mb-lg-5"></p>

        <div className="accordion d-flex justify-content-center flex-column align-items-center">
          {faqs.map((faq, index) => (
            <ul
              key={index}
              className=" d-flex flex-column align-items-center w-75 mb-0"
            >
              <button
                className="customize-btn p-3 bg-light rounded-1 w-100 fw-semibold "
                onClick={() => toggle(index)}
              >
                <strong>{faq.question}</strong>

                {openIndex === index ? (
                  <i className="bi bi-caret-up-fill ms-2 icon-transition text-secondary"></i>
                ) : (
                  <i className="bi bi-caret-down-fill ms-2 icon-transition text-secondary"></i>
                )}
                {openIndex === index && (
                  <p className="mt-2 px-3 text-muted ">{faq.answer}</p>
                )}
              </button>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFrequentQuestions;
