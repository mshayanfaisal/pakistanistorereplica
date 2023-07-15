const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-bg-light p-3 my-container">
        <div className="row footer-copyright">
          <div className="col">
            <p>
              &copy; 2023 Pakistani Stores Technologies (Private) Limited. All
              Rights Reserved.
            </p>
          </div>
          <div className="col footer-menu">
            <ul className="list-inline text-md-right">
              <li className="list-inline-item  my-list">
                <a href="#">About</a>
              </li>
              <li className="list-inline-item  my-list">
                <a href="#">Disclaimer</a>
              </li>
              <li className="list-inline-item  my-list">
                <a href="#">Sitemap</a>
              </li>
              <li className="list-inline-item  my-list">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
