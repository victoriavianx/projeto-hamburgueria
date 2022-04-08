import { useState } from "react";
import Logo from "./logo-burguer-kenzie.svg";
import "./Header.css";

const Header = ({ showProducts }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    showProducts(searchInput);
  };

  return (
    <>
      <figure>
        <img src={Logo} alt="logo-burguer-kenzie" />
      </figure>
      <form onSubmit={handleSubmit}>
        <input
          name="searchProduct"
          type="text"
          placeholder="Digitar Pesquisa"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </form>
    </>
  );
};

export default Header;
