import { useState } from "react";
import Logo from "../../assets/logo.png";
import { useCart } from "../../providers/cart/cart";
import {
  BoxLogo,
  BoxSearch,
  Container,
  LogoImg,
  Sandwich,
  SandwichTomato,
} from "./styles";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const { products, setFilteredProducts } = useCart();

  const showProducts = (searchInput) => {
    const filterProducts = products.filter((product) => {
      const { name, category } = product;
      const productName = name.toLowerCase();
      const productCategory = category.toLowerCase();
      const search = searchInput.toLowerCase();

      return productName.includes(search) || productCategory.includes(search);
    });

    setFilteredProducts(filterProducts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    showProducts(searchInput);
  };

  return (
    <>
      <Container>
        <BoxLogo>
          <figure>
            <LogoImg src={Logo} alt="logo-burguer-kenzie" />
          </figure>
          <h1>Burguer</h1>
        </BoxLogo>
        <BoxSearch onSubmit={handleSubmit}>
          <input
            name="searchProduct"
            type="text"
            placeholder="Digitar Pesquisa"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </BoxSearch>
      </Container>
      <Sandwich cheese></Sandwich>
      <Sandwich></Sandwich>
      <SandwichTomato></SandwichTomato>
    </>
  );
};

export default Header;
