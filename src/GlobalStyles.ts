import { createGlobalStyle } from 'styled-components';

const Globalstyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  body {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  * {
    box-sizing : border-box;
    font-family: 'Roboto', sans-serif;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration : none;
    color : inherit;
  }
  input {
    border : none;
    border-radius:0px;
    box-shadow: none;
    outline-style:none;
    -webkit-appearance:none;
    -moz-appearance: none;
    -o-appearance:none;
    appearance: none;
  }
  input::-webkit-input-placeholder {
  font-weight : 600;
  font-size : 0.875rem;
  color : #B4B4B4;
  line-height : 170%;
}
input:-ms-input-placeholder {
  font-weight : 600;
  font-size : 0.875rem;
  color : #B4B4B4;
  line-height : 170%;
}
textarea::-webkit-input-placeholder {
  font-weight : 600;
  font-size : 0.875rem;
  color : #B4B4B4;
  line-height : 170%;
}
textarea:-ms-input-placeholder {
  font-weight : 600;
  font-size : 0.875rem;
  color : #B4B4B4;
  line-height : 170%;
}

`;

export default Globalstyles;
