import { createGlobalStyle } from 'styled-components'
import { themeGet } from '../../helpers'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'LabGrotesque';
    src: url('../../assets/fonts/LabGrotesque-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'LabGrotesque';
    src: url('../../assets/fonts/LabGrotesque-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roobert';
    src: url('../../assets/fonts/Roobert-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roobert';
    src: url('../../assets/fonts/Roobert-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  body {
    color: ${themeGet('colors.black.0')};
    font-family: ${themeGet('fontFamily.main')}, sans-serif;
    font-weight: 400;
  }
`

export default GlobalStyle
