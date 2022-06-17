import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
        font-family: "Inter", sans-serif;
    }

    html, body {
        width: 100%;
        height: 100%;
        background-color: #ffdeb3;
    }

    li {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

`;
