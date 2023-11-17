import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  ul {
    list-style: none;
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

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.Dark700};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.Dark100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    ::-webkit-scrollbar {
    width: 0;
  }
  }
`
