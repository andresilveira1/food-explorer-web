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

export const Main = styled.main`
  grid-area: content;
  width: 31.6rem;

  margin: 1.6rem auto;

  > a {
    display: flex;
    align-items: center;

    width: fit-content;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.Light100};

    margin-top: 2rem;

    svg {
      font-size: 3.2rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 45rem;

    > button {
      margin: 5rem 0 0 10rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 93rem;

    > button {
      margin: 2.4rem 0 0 0;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding: 0;

    width: 112rem;
  }
`

export const Product = styled.div`
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.COLORS.Light300};

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;

  > img {
    width: 26.4rem;

    margin: 1.6rem 0;
  }

  > div {
    display: flex;
    flex-direction: column;

    width: 100%;

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

    a {
      font-size: 1.4rem;
      font-weight: 500;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.Light100};

      padding: 1.2rem;

      background: ${({ theme }) => theme.COLORS.Tomato400};
      border-radius: 0.5rem;
    }

    .item-total {
      display: flex;
      gap: 1.6rem;

      > div {
        gap: 1.5rem;

        font-family: 'Roboto', sans-serif;
        font-size: 2.2rem;
        font-weight: 500;
      }

      > button {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 1.043rem 4.398rem;

        font-size: 1rem;

        svg {
          font-size: 2.163rem;
          margin-right: 0.54rem;
        }
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > div {
      ul {
        margin: 0 2.55rem 4.8rem;
      }

      .item-total {
        justify-content: space-evenly;
        gap: 3rem;

        > button {
          max-width: 16.2rem;
          padding: 1.2rem 2.4rem;

          svg {
            display: none;
          }
        }
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4.7rem;

    margin: 4.2rem auto 0;

    > img {
      width: 39.011rem;
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
        gap: 1.2rem;

        justify-content: flex-start;
      }

      .item-total {
        margin-top: 4.8rem;

        > button {
          font-size: 1.4rem;
          font-weight: 500;
        }
      }
    }
  }
`
