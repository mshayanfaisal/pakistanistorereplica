import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";

function MobileNavbar() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth <= 350);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

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
          </form>
          {isMobileView && <Header />}
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;
