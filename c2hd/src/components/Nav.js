import { NavLink } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              height="200px"
              alt="Disposition logo"
              src={require("../images/c2hd.png")}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to=""
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
            </ul>

            <a className="btn btn-primary" href="tel:+16263158520">
              Call now 6263158520!
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;