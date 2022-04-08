import Product from "../Product/Product";

const ProductsList = ({ products, handleClick }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <Product product={product} key={index} handleClick={handleClick} />
      ))}
    </ul>
  );
};

export default ProductsList;
