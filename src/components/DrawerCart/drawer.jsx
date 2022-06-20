import { useCart } from "../../providers/cart/cart";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FaShoppingBag } from "react-icons/fa";
import { Button } from "./styles";
import Cart from "../Cart/Cart";

const DrawerCart = () => {
  const { currentSale, setCurrentSale } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const totalPrice = currentSale.reduce((acc, currentValue) => {
    return acc + Number(currentValue.price);
  }, 0);

  const formatCurrency = (number) => {
    return Number(number).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const removeAllProduct = () => {
    setCurrentSale([]);
  };

  return (
    <aside>
      <Button ref={btnRef} onClick={onOpen}>
        <FaShoppingBag />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrinho de Compras</DrawerHeader>

          <DrawerBody>
            <Cart />
          </DrawerBody>

          <DrawerFooter>
            <p>Total</p>
            <span>{formatCurrency(totalPrice)}</span>
            <button onClick={removeAllProduct}>Remover Todos</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </aside>
  );
};

export default DrawerCart;
