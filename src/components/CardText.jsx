const CardText = ({ text, name, typeProcess }) => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card shadow-sm border-0 h-100 text-center p-3">
          <div className="card-body">
            <i className="bi bi-chat-quote-fill fs-2 text-secondary mb-3"></i>
            <p className="card-text">{text}</p>
            <h6 className="fw-bold mb-0">{name}</h6>
            <small className="text-muted">{typeProcess}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardText;
