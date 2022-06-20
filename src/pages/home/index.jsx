import { useState } from "react";
import Header from "../../components/Header/Header";
import ProductsList from "../../components/ProductsList/ProductsList";
import { Container, Main } from "./styles";

const Home = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  return (
    <>
      <Header />
      <Main>
        <Container>
          <ProductsList />
        </Container>
      </Main>
    </>
  );
};

export default Home;
