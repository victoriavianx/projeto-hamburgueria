import { GlobalStyles } from "./styles/global";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
      {/* <aside className="asideContainer">
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          removeProduct={removeProduct}
        />
      </aside> */}
    </>
  );
};

export default App;
