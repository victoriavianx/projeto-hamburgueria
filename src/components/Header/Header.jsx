import { useState } from "react";
import Logo from "../../assets/logo.png";
import {
  BoxLogo,
  BoxSearch,
  Container,
  LogoImg,
  Sandwich,
  SandwichTomato,
} from "./styles";

const Header = ({ showProducts }) => {
  const [searchInput, setSearchInput] = useState("");

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
