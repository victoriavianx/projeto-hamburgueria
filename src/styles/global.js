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

    body::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    body::-webkit-scrollbar-track {
        background: none;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #ff8716;    
        border-radius: 10px;      
    }

    li {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

`;
