import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: 'Fira Code', monospace;
}
`

const theme = {
  colors: {
    primary: '#65dfc9',
    secondary: '#6cdbeb',
    light: '',
    dark: '',
  },
  weight: {
    light: '300',
    default: '400',
    medium: '600',
    bold: '700',
  },
  fontSize: {
    xs: '9px',
    s: '12px',
    m: '14px',
    x: '16px',
    xl: '24px',
  },
  primaryGradient: `linear-gradient(to right top, #65dfc9, #6cdbeb)`,
  secondaryGradient: `linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3)`,
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
