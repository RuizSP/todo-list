import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

    }
    :root{
        --gray-700: #0D0D0D;
        --gray-600: #1A1A1A;
        --gray-500:#262626;
        --gray-400:#333333;
        --gray-300:#808080;
        --gray-200:#D9D9D9;
        --gray-100:#F2F2F2;
        --purple:#8284FA;
        --purpleDark:#5E60CE;
        --blue:#4EA8DE;
        --blueDark:#1E6F9F;
        --Danger:#E25858;
    }
    body{
        background: var(--gray-600);
    
    }

`