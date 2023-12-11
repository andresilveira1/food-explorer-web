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

  overflow-y: scroll;

  > section {
    margin: 0 0 2.4rem 2.4rem;

    div {
      display: flex;
      gap: 1.6rem;
    }

    .swiper-wrapper {
      gap: 1.6rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: ${({ theme }) => theme.COLORS.Light100};
    }

    .slide-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;

      position: relative;

      padding: 2.4rem;

      height: 29.2rem;
      width: 21rem;

      margin: 0;

      border-radius: 0.8rem;

      background: ${({ theme }) => theme.COLORS.Dark900};

      .fav {
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;

        font-size: 3rem;

        svg {
          color: ${({ theme }) => theme.COLORS.Light300};
        }
      }

      .slide-img {
        width: 8.8rem;
        height: 8.8rem;

        object-fit: cover;
      }

      a {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.Light300};

        display: flex;
        align-items: center;
      }

      h2 {
        display: none;
      }

      p {
        color: ${({ theme }) => theme.COLORS.Cake100};
      }

      .add-product {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 8rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    > section {
      max-width: 112rem;

      margin: 0 auto 2.4rem;

      .swiper-wrapper {
        gap: 2.7rem;
      }

      .slide-item {
        width: 30.4rem;
        height: 46.2rem;

        gap: 1.5rem;

        .slide-img {
          width: 17.6rem;
          height: 17.6rem;
        }

        a {
          font-size: 2.4rem;
          font-weight: 700;
          white-space: nowrap;
        }

        h2 {
          display: block;

          font-size: 1.4rem;
          font-weight: 400;
          line-height: 160%;
          color: ${({ theme }) => theme.COLORS.Light400};
          text-align: center;
        }

        p {
          font-size: 3.2rem;
        }

        .add-product {
          flex-direction: row;

          width: 20.8rem;

          button {
            height: 4.8rem;
          }
        }
      }
    }
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
