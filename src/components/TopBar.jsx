const TopBar = () => {
  return (
    <div className="bg-top-Bar text-light py-1 px-2 position-sticky top-0 z-3">
      <div className="container d-flex flex-wrap justify-content-center  align-items-center gap-2">
        <p className="mb-0 text-center small">Estamos para ayudarte...</p>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook text-light"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram text-light"></i>
          </a>
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp text-light"></i>
          </a>
          <span className="small">
            <i className="bi bi-telephone"></i> +57 300 123 4567
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
