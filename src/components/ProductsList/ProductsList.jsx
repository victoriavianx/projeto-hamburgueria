import Product from "../Product/Product";
import "./ProductsList.css";

const ProductsList = ({ filteredProducts, handleClick }) => {
  return (
    <ul className="productContainer">
      {filteredProducts.map((product, index) => (
        <Product product={product} key={index} handleClick={handleClick} />
      ))}
    </ul>
  );
};

export default ProductsList;
