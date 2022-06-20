import { useCart } from "../../providers/cart/cart";
import CartProduct from "../CartProduct/CartProduct";
import "./Cart.css";

const Cart = () => {
  const { currentSale, setCurrentSale } = useCart();

  const totalPrice = currentSale.reduce((acc, currentValue) => {
    return acc + Number(currentValue.price);
  }, 0);

  const removeProduct = (removeItem) => {
    const removedProduct = currentSale.filter(
      (product) => product !== removeItem
    );

    setCurrentSale(removedProduct);
  };

  const formatCurrency = (number) => {
    return Number(number).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const removeAllProduct = () => {
    setCurrentSale([]);
  };

  return (
    <div className="cartContainer">
      <div className="topCart">
        <h1>Carrinho de Compras</h1>
      </div>
      {currentSale.length >= 1 ? (
        <>
          <ul className="middleCart">
            {currentSale.map((sale, index) => (
              <CartProduct
                sale={sale}
                key={index}
                removeProduct={removeProduct}
              />
            ))}
            <div className="bottomCart">
              <p>Total</p>
              <span>{formatCurrency(totalPrice)}</span>
              <button onClick={removeAllProduct}>Remover Todos</button>
            </div>
          </ul>
        </>
      ) : (
        <div className="textCart">
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
