import { useCart } from "../../providers/cart/cart";
import Product from "../Product/Product";
import { Container } from "./styles";

const ProductsList = () => {
  const { filteredProducts } = useCart();

  return (
    <Container>
      {filteredProducts.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </Container>
  );
};

export default ProductsList;
