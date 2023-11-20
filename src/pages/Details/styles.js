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
`

export const Main = styled.main`
  grid-area: content;
  width: 31.6rem;

  margin: 0 auto;

  > button {
    display: flex;
    align-items: center;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.Light100};

    margin-top: 3.75rem;

    svg {
      font-size: 3.2rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;

    > button {
      margin-left: 10rem;
      margin-top: 5rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    max-width: 136.8rem;

    margin: 0 auto;

    > button {
      margin-top: 2.4rem;
    }
  }
`

export const Product = styled.div`
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.COLORS.Light300};

  > img {
    padding: 1.6rem 2.6rem;
  }

  > div {
    h2 {
      font-size: 2.7rem;
      font-weight: 500;
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
    }

    h2,
    p {
      text-align: center;
      line-height: 140%;

      margin-bottom: 2.4rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2.4rem;

      margin-bottom: 4.8rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > button {
      margin-left: 10rem;
    }

    > img {
      display: block;

      margin: 0 auto;
      padding-top: 6rem;
      padding-bottom: 5rem;
    }

    > div {
      ul {
        display: flex;
        justify-content: center;

        flex-wrap: wrap;
        gap: 2.4rem;

        margin: 0 2.55rem 4.8rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    align-items: center;

    > img {
      padding: 4.2rem 4.7rem 0;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: start;

      padding-right: 3rem;

      h2 {
        font-size: 4rem;
      }

      p {
        font-size: 2.4rem;
      }

      h2,
      p {
        text-align: start;
      }

      ul {
        margin: 0;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    margin: 0 auto;
  }
`
