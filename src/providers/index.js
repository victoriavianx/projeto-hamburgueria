import { CartProvider } from "./cart/cart";

const Providers = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
