import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Providers from "./providers/index";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
