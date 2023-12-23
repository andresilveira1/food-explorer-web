import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: grid;

  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  width: 100%;
  height: 100vh;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-rows: 10.4rem auto 7.7rem;
  }
`

export const Banner = styled.div`
  grid-area: content;

  margin: 4.4rem 1.6rem 6.2rem 3.6rem;
  height: 12rem;

  display: flex;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.GRADIENTE100};
  border-radius: 0.3rem;

  position: relative;

  > picture {
    position: absolute;
    top: -2.9rem;
    left: -2.9rem;
    z-index: 1;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;

    width: 100%;

    margin-bottom: 2.2rem;

    font-family: 'Poppins', sans-serif;

    color: ${({ theme }) => theme.COLORS.Light300};

    h1 {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 140%;

      margin: 0 3.2rem 0.3rem 0;
    }

    p {
      width: 20.2rem;

      font-weight: 400;
      font-size: 1.2rem;

      margin-right: 2.1rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 7rem 1.6rem 6.2rem 3.6rem;
    height: 18rem;

    > picture {
      img {
        width: 32rem;
      }

      position: absolute;
      top: -7.1rem;
      left: -2.9rem;
      z-index: 1;
    }

    > div {
      margin-bottom: 3rem;

      h1 {
        font-size: 2.4rem;

        margin: 0 8.6rem 0.7rem 0;
      }

      p {
        width: 30rem;

        margin-right: 4rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 10rem 1.6rem 6.2rem 3.6rem;
    height: 26rem;

    border-radius: 0.8rem;

    > picture {
      img {
        width: 50rem;
      }

      position: absolute;
      top: -4.4rem;
      left: -3.9rem;
      z-index: 1;
    }

    > div {
      margin-bottom: 9.2rem;

      h1 {
        font-size: 3rem;
        font-weight: 500;

        margin: 0 4rem 0.5rem 0;
      }

      p {
        width: 32rem;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        margin-right: 3.5rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    width: 112rem;

    margin: 16.4rem auto 6.2rem;

    > picture {
      img {
        width: 100%;
      }

      position: absolute;
      top: -13.9rem;
      left: -6.7rem;
      z-index: 1;
    }

    > div {
      h1 {
        font-size: 4rem;

        margin: 0 10rem 0.8rem 0;
      }

      p {
        width: 42.1rem;

        font-size: 1.6rem;

        margin-right: 9.7rem;
      }
    }
  }
`

export const Main = styled.main`
  grid-area: content;

  overflow-y: auto;
`
