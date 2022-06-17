import Product from "../Product/Product";
import { Container } from "./styles";

const ProductsList = ({ filteredProducts, handleClick }) => {
  return (
    <Container>
      {filteredProducts.map((product, index) => (
        <Product product={product} key={index} handleClick={handleClick} />
      ))}
    </Container>
  );
};

export default ProductsList;
