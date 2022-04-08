const CartProduct = ({ sale }) => {
  const { img, name, category } = sale;

  return (
    <li>
      <img src={img} alt={name} />
      <p>{name}</p>
      <span>{category}</span>
      <button>Remover</button>
    </li>
  );
};

export default CartProduct;
