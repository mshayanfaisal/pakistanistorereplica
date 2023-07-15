import { NavLink } from "react-router-dom";

function DesktopNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm ">
      <div className="container-fluid my-container">
        <NavLink className="navbar-brand" to="http://127.0.0.1:5173/">
          <img src="./logo.jpg" alt="logo" width="145" height="59" />
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

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <form className="d-flex w-100" role="search">
            <div className="input-group  ">
              <input
                type="text"
                className="form-control  "
                placeholder="What are you looking for?"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary btn-success"
                  type="button"
                >
                  <i className="fas fa-search "></i>
                </button>
              </div>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  Contact
                </NavLink>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default DesktopNavbar;
