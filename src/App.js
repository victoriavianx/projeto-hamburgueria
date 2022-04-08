import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(
        "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
      );

      const dataResponse = await response.json();

      setProducts(dataResponse);
    }

    getProducts();
  }, []);

  const showProducts = (searchInput) => {
    const filterProducts = products.filter((product) => {
      const { name, category } = product;
      const productName = name.toLowerCase();
      const productCategory = category.toLowerCase();
      const search = searchInput.toLowerCase();

      return productName === search || productCategory === search;
    });

    setFilteredProducts(filterProducts);
  };

  const handleClick = (productId) => {
    const findProductId = products.find((product) => productId === product.id);

    setCurrentSale([...currentSale, findProductId]);
  };

  return (
    <>
      <header className="topContainer">
        <Header showProducts={showProducts} />
      </header>
      <main>
        <section>
          <ProductsList products={products} handleClick={handleClick} />
        </section>
        <aside>
          <Cart currentSale={currentSale} />
        </aside>
      </main>
    </>
  );
};

export default App;
