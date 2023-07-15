import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/air-conditioners">
                Air Conditioners
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/led-tv">
                Led TVs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/drone-cameras">
                Drone Cameras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="dslr-cameras">
                DSLR Cameras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="processors">
                Processors
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
