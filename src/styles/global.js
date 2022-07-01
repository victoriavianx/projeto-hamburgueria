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
    }

    body::-webkit-scrollbar {
        width: 7px;
        height: 7px;
    }

    body::-webkit-scrollbar-track {
        background: none;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #342220;    
        border-radius: 8px;      
    }

    li {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

`;
