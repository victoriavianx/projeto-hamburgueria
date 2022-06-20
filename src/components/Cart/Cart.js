import { useCart } from "../../providers/cart/cart";
import CartProduct from "../CartProduct/CartProduct";
import "./Cart.css";

const Cart = () => {
  const { currentSale, setCurrentSale } = useCart();

  const removeProduct = (removeItem) => {
    const removedProduct = currentSale.filter(
      (product) => product !== removeItem
    );

    setCurrentSale(removedProduct);
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
          <div className="bottomCart"></div>
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
