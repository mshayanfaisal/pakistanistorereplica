import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ProductItem = ({ image, description, price, storeNumber }) => {
  
  return (
    <>
      <NavLink to={`/product/${description}`}>
        <div className="products">
          <img className="w-75" src={image} alt="Product" />
          <p className="product-description mt-3">{description}</p>

          <div className="price-and-storenumber d-flex">
            <p className="product-price">Rs{price}</p>
            <p className="product-stores">{storeNumber} Stores</p>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  storeNumber: PropTypes.number,
};
