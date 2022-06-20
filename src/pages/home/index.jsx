import Header from "../../components/Header/Header";
import ProductsList from "../../components/ProductsList/ProductsList";
import DrawerCart from "../../components/DrawerCart/drawer";
import { Container, Main } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <ProductsList />
        </Container>
        <DrawerCart />
      </Main>
    </>
  );
};

export default Home;
