import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function RelatedProducts({ relatedProducts }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <h4 className="mt-5 ">Related Products</h4>
      <div className="row">
        {relatedProducts.map((product, index) => (
          <div key={index} className="col-md-3 mb-4">
            <Link to={`/product/${product.description}`} className="card h-100">
              <img
                src={product.image}
                alt={product.description}
                className="img-thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">{product.description}</h5>
                <div className="d-flex justify-content-between">
                  <p className="product-price">Rs. {product.price}</p>
                  <p className="product-stores">{product.storeNumber} Stores</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
