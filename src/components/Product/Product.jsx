import { Box, Container, Img } from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../providers/cart/cart";
import { toast } from "react-toastify";

const Product = ({ product }) => {
  const { products, currentSale, setCurrentSale } = useCart();
  let { img, name, category, price, id } = product;

  const handleClick = (productId) => {
    const foundProduct = products.find((product) => productId === product.id);
    const productAlreadyExists = currentSale.find(
      (product) => productId === product.id
    );

    if (productAlreadyExists) {
      toast.info("Produto já adicionado no carrinho");
      setCurrentSale([...currentSale]);
    } else {
      toast.success("Produto adicionado no carrinho");
      setCurrentSale([...currentSale, foundProduct]);
    }
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
