import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Providers from "./providers/index";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
