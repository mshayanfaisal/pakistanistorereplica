function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./banner1.jpg" className="d-block w-100" alt="banner1" />
        </div>
        <div className="carousel-item">
          <img src="./banner2.jpg" className="d-block w-100" alt="banner2" />
        </div>
        <div className="carousel-item">
          <img src="./banner3.jpg" className="d-block w-100" alt="banner3" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
