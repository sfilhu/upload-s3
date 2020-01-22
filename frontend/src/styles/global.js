import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background: #303030;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    html, border-style, #root {
        height: 100%;
    }
`