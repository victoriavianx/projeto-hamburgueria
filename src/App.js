import { useState, useEffect } from "react";
import { GlobalStyles } from "./styles/global";
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
      setFilteredProducts(dataResponse);
    }

    getProducts();
  }, []);

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

  const removeProduct = (removeItem) => {
    const removedProduct = currentSale.filter(
      (product) => product !== removeItem
    );

    setCurrentSale(removedProduct);
  };

  const handleClick = (productId) => {
    const findProductId = products.find((product) => productId === product.id);

    setCurrentSale([...currentSale, findProductId]);
  };

  return (
    <>
      <GlobalStyles />
      <header className="topContainer">
        <Header showProducts={showProducts} />
      </header>
      <main className="mainContainer">
        <section className="sectionContainer">
          <ProductsList
            filteredProducts={filteredProducts}
            handleClick={handleClick}
          />
        </section>
        <aside className="asideContainer">
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            removeProduct={removeProduct}
          />
        </aside>
      </main>
    </>
  );
};

export default App;
