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

  .selectContent {
    background: ${({ theme }) => theme.COLORS.Dark300};
    border-radius: 0.5rem;

    overflow: hidden;

    width: var(--radix-select-trigger-width);

    z-index: 10;

    animation: slideDown 400ms cubic-bezier(0.16, 1, 0.3, 1) ;
  }

  .selectView {
    outline: none;
  }

  .selectItem {
    display: flex;
    justify-content: space-between;

    outline: none;

    padding: 1.3rem 1.6rem;

    &:focus {
      background: ${({ theme }) => theme.COLORS.Dark100};
    }
  }

  .selectText {
    font-size: 1.4rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.Light400};
  }

  .selectIconCheck {
    color: ${({ theme }) => theme.COLORS.Mint};

    height: 2rem;
    width: 2rem;
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

  @keyframes slideDown {
    from {
      transform: translateX(-2px);
      opacity: 0
    }

    to {
      transform: translateX(0);
      opacity: 1
    }
  }
`
