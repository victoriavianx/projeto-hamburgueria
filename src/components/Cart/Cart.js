import CartProduct from "../CartProduct/CartProduct";

const Cart = ({ currentSale }) => {
  const totalPrice = currentSale.reduce((acc, currentValue) => {
    return acc + Number(currentValue.price);
  }, 0);

  const formatCurrency = (number) => {
    return Number(number).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div>
      <div>
        <h1>Carrinho de Compras</h1>
      </div>
      <ul>
        {currentSale.map((sale, index) => (
          <CartProduct sale={sale} key={index} />
        ))}
      </ul>
      <div>
        <p>Total</p>
        <span>{formatCurrency(totalPrice)}</span>
        <button>Remover Todos</button>
      </div>
    </div>
  );
};

export default Cart;
