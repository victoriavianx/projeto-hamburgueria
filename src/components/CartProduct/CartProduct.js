import "./CartProduct.css";
import { FiXCircle, FiPlus, FiMinus } from "react-icons/fi";
import { useCart } from "../../providers/cart/cart";

const CartProduct = ({ sale, removeProduct }) => {
  let { counter, setCounter } = useCart();
  let { id, img, name, category } = sale;

  const handleAdd = (event) => {
    const productId = event.target.id;

    if (productId == sale.id) {
      let sum = counter + 1;
      setCounter(sum);
    }
  };

  const handleMinus = (event) => {
    const productId = event.target.id;

    if (productId == sale.id) {
      let minus = counter - 1;

      if (minus < 1) {
        minus = 1;
      }

      setCounter(minus);
    }
  };

  return (
    <li className="cartProduct">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <p>{name}</p>
        <span>{category}</span>
      </div>
      <div id="counterBox">
        <button onClick={(event) => handleAdd(event)}>
          <FiPlus id={id} />
        </button>
        <span>{counter}</span>
        <button onClick={(event) => handleMinus(event)}>
          <FiMinus id={id} />
        </button>
      </div>
      <button onClick={(event) => removeProduct(event)}>
        <FiXCircle />
      </button>
    </li>
  );
};

export default CartProduct;
