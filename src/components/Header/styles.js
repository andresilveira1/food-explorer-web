import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5.6rem 2.8rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.Dark500};

  position: fixed;

  width: 100%;

  > h1 {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-size: 2.1rem;

    svg {
      color: ${({ theme }) => theme.COLORS.Cake200};
    }
  }

  > div {
    display: none;
  }

  > .request-button {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 5rem;

    gap: 2rem;

    height: 10.4rem;

    > div {
      display: flex;

      border-radius: 0.5rem;

      padding: 0 5rem;
    }

    > .request-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;

      width: 18.6rem;

      padding: 1.6rem 0;

      font-size: 1.4rem;

      svg {
        font-size: 2.6rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    justify-content: center;

    gap: 3.2rem;

    > h1 {
      gap: 1rem;

      font-size: 2.4rem;
    }

    > div {
      padding: 0 9.5rem;
    }

    > .request-button {
      width: 21.6rem;
    }
  }
`

export const Logout = styled.button`
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.Light100};

  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
  }
`

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.Light100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`
