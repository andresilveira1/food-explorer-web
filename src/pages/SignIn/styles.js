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

    svg {
      color: ${({ theme }) => theme.COLORS.Cake200};
      font-size: 4.3rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > h1 {
      margin-bottom: 15rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    flex-direction: row;
    justify-content: space-around;

    > h1 {
      margin: 0;

      font-size: 4.2rem;
    }
  }
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 0 5.6rem;

  > h2 {
    display: none;
  }

  > label {
    span {
      color: ${({ theme }) => theme.COLORS.Light400};
    }

    div {
      width: 100%;

      padding: 0 1.4rem;
      margin: 0.8rem 0 3.2rem 0;

      border-radius: 0.8rem;
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
    text-align: center;

    color: ${({ theme }) => theme.COLORS.Light100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
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
      text-align: center;
    }

    > label {
      div {
        border: 1px solid ${({ theme }) => theme.COLORS.Light100};
      }
    }
  }
`
