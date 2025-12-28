const CardText = ({ text, name, typeProcess, iconClass }) => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card shadow-sm border-0 h-100 text-center p-3 bg-light">
          <div className="card-body">
            <i className="bi bi-chat-quote-fill fs-2 text-secondary mb-3"></i>
            <p className="card-text">{text}</p>
            <i className={`fs-1 ${iconClass} text-muted`}></i>
            <h6 className="fw-bold mb-0">{name}</h6>
            <small className="text-muted">{typeProcess}</small>
            <p className="starsCards">★★★★★</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardText;
