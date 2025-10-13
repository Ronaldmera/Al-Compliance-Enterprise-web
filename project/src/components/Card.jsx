const Card = ({ src, text = "Descripción breve del servicio." }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div className="card shadow-sm h-100 w-100" style={{ maxWidth: "20rem" }}>
        <img src={src} className="card-img-top img-card" alt="Servicio" />
        <div className="card-body text-center">
          <p className="card-text">
            <span>
              <i class="bi bi-check-square-fill text-secondary mx-1"></i>
            </span>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
