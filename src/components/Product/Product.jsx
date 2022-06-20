import { Box, Container, Img } from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../providers/cart/cart";

const Product = ({ product }) => {
  const { products, currentSale, setCurrentSale } = useCart();
  const { img, name, category, price, id } = product;

  const handleClick = (productId) => {
    const findProductId = products.find((product) => productId === product.id);

    setCurrentSale([...currentSale, findProductId]);
  };

  const formatCurrency = (number) => {
    return Number(number).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <Container>
      <div>
        <Box>
          <Img src={img} alt={name} />
        </Box>
        <h2>{name}</h2>
        <span>{category}</span>
        <p>{formatCurrency(price)}</p>
        <button onClick={() => handleClick(id)}>
          <FiShoppingCart />
        </button>
      </div>
    </Container>
  );
};

export default Product;
