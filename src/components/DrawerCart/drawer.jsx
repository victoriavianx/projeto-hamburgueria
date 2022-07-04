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
  const { currentSale } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const totalPrice = currentSale.reduce((acc, currentValue) => {
    return acc + Number(currentValue.price) * Number(currentValue.quantity);
  }, 0);

  const formatCurrency = (number) => {
    return Number(number).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
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
        <DrawerContent backgroundColor={"orange.100"} color={"#342220"}>
          <DrawerCloseButton />
          <DrawerHeader>Carrinho de Compras</DrawerHeader>

          <DrawerBody
            overflow={"auto"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Cart />
          </DrawerBody>

          <DrawerFooter
            width={"100%"}
            height={"80px"}
            color={"#342220"}
            fontWeight={"600"}
            backgroundColor={"#27ae60"}
            justifyContent={"space-evenly"}
          >
            <p style={{ marginRight: "10rem" }}>Total</p>
            <span>{formatCurrency(totalPrice)}</span>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </aside>
  );
};

export default DrawerCart;
