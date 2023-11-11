import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.Dark700};
    color: ${({ theme }) => theme.COLORS.Light100};
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: 0.2;
  }

  button:hover, a:hover {
    filter: brigntness(0.9);
  }
`
