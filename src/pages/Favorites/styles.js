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

  padding-left: 3.5rem;

  font-family: 'Poppins', sans-serif;

  > h1 {
    line-height: 140%;
    font-weight: 500;

    margin: 5.6rem 0 2.7rem;
  }

  .content {
    > div {
      display: flex;
      align-items: center;
      gap: 1.3rem;

      padding: 1.6rem 0;

      img {
        width: 7.2rem;
      }

      div {
        a {
          display: block;

          font-weight: 500;
          font-size: 2rem;
          line-height: 160%;
          color: ${({ theme }) => theme.COLORS.Light300};
          white-space: nowrap;
        }

        button {
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 160%;
          color: ${({ theme }) => theme.COLORS.Tomato100};
        }
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    .content {
      display: flex;
      flex-wrap: wrap;
      gap: 4.8rem;

      > div {
        width: 30rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    margin: 0 auto;
    padding: 0;

    width: 112rem;
  }
`
