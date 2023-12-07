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

    position: relative;

    span {
      font-size: 1.2rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.Cake100};

      position: absolute;

      right: 0;
      bottom: -1.5rem;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.Cake200};
    }
  }

  > div {
    display: none;
  }

  > .new-dish {
    display: none;
  }

  > .request-button {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 5rem;

    height: 10.4rem;

    > h1 {
      margin-right: 2rem;
    }

    > div {
      display: flex;

      border-radius: 0.5rem;

      padding: 0 5rem;
      margin-right: 2rem;
    }

    > .new-dish {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.4rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;

      background: ${({ theme }) => theme.COLORS.Tomato400};
      color: ${({ theme }) => theme.COLORS.Light100};

      margin-right: 2rem;

      border-radius: 0.5rem;

      width: 21.6rem;
      height: 4.8rem;
    }

    > .request-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;

      padding: 1.6rem 0;
      margin-right: 2rem;

      font-size: 1.4rem;

      max-width: 21.6rem;

      svg {
        font-size: 2.6rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    justify-content: center;

    > h1 {
      gap: 1rem;

      font-size: 2.4rem;

      margin-right: 4.3rem;
    }

    > div {
      padding: 0 9.5rem;

      margin-right: 3.2rem;
    }

    > .new-dish {
      margin-right: 3.2rem;
    }

    > .request-button {
      margin-right: 3.2rem;
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
