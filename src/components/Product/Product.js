const Product = ({ product, handleClick }) => {
  const { img, name, category, price, id } = product;

  const formatCurrency = (number) => {
    return Number(number).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <li>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <span>{category}</span>
      <p>{formatCurrency(price)}</p>
      <button onClick={() => handleClick(id)}>Adicionar</button>
    </li>
  );
};

export default Product;
