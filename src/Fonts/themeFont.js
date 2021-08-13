import { Global } from '@emotion/react';
const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Graphik Font';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url('./GraphikBold.otf') format('otf');
      }
      /* latin */
      @font-face {
        font-family: 'Graphik Font';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url('./GraphikMedium.otf') format('otf');
      }
      @font-face {
        font-family: 'Graphik Font';
        font-style: black;
        font-display: swap;
        src: url('./GraphikBlack.otf') format('otf');
      }
      `}
  />
);
export default Fonts;
