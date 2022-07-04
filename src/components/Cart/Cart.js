import { useCart } from "../../providers/cart/cart";
import { toast } from "react-toastify";
import CartProduct from "../CartProduct/CartProduct";
import "./Cart.css";

const Cart = () => {
  const { currentSale, setCurrentSale } = useCart();

  const removeProduct = (event) => {
    const removeItem = event.target.id;

    const productIndex = currentSale.findIndex(
      (product) => product.id === removeItem
    );

    currentSale.splice(productIndex, 1);

    toast.success("Produto removido do carrinho");
    setCurrentSale([...currentSale]);
  };

  return (
    <>
      {currentSale.length >= 1 ? (
        <ul className="middleCart">
          {currentSale.map((sale, index) => (
            <CartProduct
              sale={sale}
              key={index}
              removeProduct={removeProduct}
            />
          ))}
        </ul>
      ) : (
        <>
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </>
      )}
    </>
  );
};

export default Cart;
