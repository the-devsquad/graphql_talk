import { createGlobalStyle } from 'styled-components'
import { setColor, fonts } from './index'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Courgette|Oswald:400,700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${setColor.main};
    /* ${fonts()}; */
    font-family: 'Oswald', ;
  }
`