import { createGlobalStyle } from 'styled-components'

import 'font-awesome/css/font-awesome.css'

export default createGlobalStyle`

    * {
        outline: 0;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialised !important;
        background: #0F171E;
        font-family: Arial, Helvetica, sans-serif;
        color: #FFF;
    }

`