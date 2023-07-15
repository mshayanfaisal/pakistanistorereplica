import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="d-flex align-items-center products-container">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          image={product.image}
          description={product.description}
          price={product.price}
          storeNumber={product.storeNumber}
        />
      ))}
    </div>
  );
};

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array,
};
