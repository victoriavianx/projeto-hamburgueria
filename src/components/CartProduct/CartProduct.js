import "./CartProduct.css";

const CartProduct = ({ sale, removeProduct }) => {
  const { img, name, category } = sale;

  return (
    <li className="cartProduct">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <p>{name}</p>
        <span>{category}</span>
      </div>
      <button onClick={() => removeProduct(sale)}>Remover</button>
    </li>
  );
};

export default CartProduct;
