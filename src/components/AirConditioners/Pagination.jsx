function Pagination() {
  return (
    <div className="d-flex justify-content-center my-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item ">
            <a className="page-link text-dark" href="#">
              First
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-dark" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-dark" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-dark" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-dark" href="#">
              Last
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
