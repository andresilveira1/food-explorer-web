import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  > h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-size: 3.7rem;

    margin-bottom: 7.3rem;

    animation: grow-and-shrink 2000ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    svg {
      color: ${({ theme }) => theme.COLORS.Cake200};
      font-size: 4.3rem;
    }
  }

  @keyframes grow-and-shrink {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    flex-direction: row;
    justify-content: space-around;

    > h1 {
      margin: 0;

      gap: 1.9rem;

      font-size: 4.2rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 0 5.6rem;

  animation: fromTop 1000ms;
  animation-timing-function: linear;

  > h2 {
    display: none;
  }

  > label {
    color: ${({ theme }) => theme.COLORS.Light400};
  }

  > div {
    width: 100%;

    margin: 0.8rem 0 3.2rem 0;

    background: transparent;

    input {
      height: 4.8rem;

      padding: 1.6rem;

      border-radius: 0.8rem;
      border: 1px solid transparent;
    }

    input:focus {
      border: 2px solid ${({ theme }) => theme.COLORS.Light100};
    }

    input:-webkit-autofill {
      -webkit-text-fill-color: ${({ theme }) => theme.COLORS.Light400};
      -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.COLORS.Dark200}
        inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  > button {
    padding: 1.2rem 0;

    margin-bottom: 3.2rem;
  }

  > a {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    margin: 0 auto;

    width: fit-content;

    color: ${({ theme }) => theme.COLORS.Light100};

    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);

    &:hover {
      color: ${({ theme }) => theme.COLORS.Cake100};

      opacity: 0.7;
      transition: 0.5s;
    }
  }

  @keyframes fromTop {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 47.6rem;

    padding: 6.4rem;

    background: ${({ theme }) => theme.COLORS.Dark400};
    border-radius: 1.6rem;

    > h2 {
      display: block;

      margin-bottom: 3.2rem;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
      text-align: center;
    }
  }
`
