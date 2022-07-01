import axios from "axios";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [counter, setCounter] = useState(1);

  const getProducts = () => {
    axios
      .get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => {
        const dataResponse = response.data;

        setProducts(dataResponse);
        setFilteredProducts(dataResponse);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  products.map((product) => {
    return (product.quantity = counter);
  });

  return (
    <CartContext.Provider
      value={{
        products,
        filteredProducts,
        setFilteredProducts,
        currentSale,
        setCurrentSale,
        counter,
        setCounter,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
