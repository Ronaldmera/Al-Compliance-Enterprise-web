import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-primary text-light">
        <footer className=" text-center">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0  d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-uppercase">
                  AL COMPLIANCE ENTERPRISE S.A.S
                </h5>

                <p>
                  Porque cada caso merece ser escuchado y defendido con respeto.
                </p>
              </div>

              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Enlaces de interés</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <NavLink to={"/"} className=" text-light ">
                      Inicio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/nosotros"} className=" text-light ">
                      Nosotros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/servicios"} className=" text-light ">
                      Servicios
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/equipo"} className=" text-light ">
                      Equipo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contacto"} className=" text-light ">
                      Contacto
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center ">
            © {new Date().getFullYear()} AL COMPLIANCE ENTERPRISE S.A.S. | Todos
            los derechos reservados.
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
