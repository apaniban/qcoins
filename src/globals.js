import {injectGlobal} from 'styled-components'

import light from './assets/fonts/Ciutadella-Light.woff';
import normal from './assets/fonts/Ciutadella.woff';
import bold from './assets/fonts/Ciutadella-Bold.woff';

injectGlobal`
  @font-face {
    font-family: 'Ciutadella-Light';
    src: url('${light}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ciutadella';
    src: url('${normal}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ciutadella-Bold';
    src: url('${bold}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    color: white;
    font-size: 20px;
    font-family: 'Ciutadella';
  }
`
