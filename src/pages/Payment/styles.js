import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11rem auto 7.7rem;
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

export const Content = styled.main`
  grid-area: content;

  width: 100%;

  overflow-y: auto;

  .wrapper {
    padding: 5.6rem 3.5rem;
  }

  .order {
    color: ${({ theme }) => theme.COLORS.Light300};
    font-family: 'Poppins', sans-serif;
    font-weight: 200;

    h2 {
      margin-bottom: 2.7rem;
      font-weight: 400;
    }

    li {
      display: flex;
      align-items: center;
      gap: 1.3rem;

      padding: 1.6rem 0;

      img {
        width: 7.2rem;
        height: 7.2rem;
      }

      div {
        p {
          font-size: 2rem;
        }

        button {
          font-family: 'Roboto', sans-serif;
          font-size: 1.2rem;
          color: ${({ theme }) => theme.COLORS.Tomato100};
        }
      }
    }

    span {
      display: block;

      font-size: 2rem;

      margin-top: 1.6rem;
    }

    .button-forward {
      display: flex;
      justify-content: end;

      button {
        max-width: 21.6rem;

        margin-top: 3.1rem;
        padding: 1.2rem 3.2rem;
      }
    }
  }

  .payment {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 4rem;

    .wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;

      max-width: 112rem;

      margin: 0 auto;
      padding: 3.4rem 0;
    }

    .order {
      .button-forward {
        display: none;
      }
    }

    .payment {
      display: block;

      h2 {
        margin-bottom: 3.2rem;
        font-weight: 400;
      }

      .method {
        width: 53rem;

        border: 1px solid ${({ theme }) => theme.COLORS.Light600};
        border-radius: 0.8rem;

        .tab {
          width: 53rem;

          span {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;

            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.Light100};
          }
        }

        .tab-item {
          width: 26.4rem;
          height: 8.1rem;

          background: transparent;

          border: none;
        }

        .tab-item[data-state='active'] {
          background: ${({ theme }) => theme.COLORS.Dark300};
        }

        .tab-item:first-child {
          border-top-left-radius: 0.8rem;
        }

        .tab-item:last-child {
          border-top-right-radius: 0.8rem;
        }

        .tab-item + .tab-item {
          border-left: 1px solid ${({ theme }) => theme.COLORS.Light600};
        }

        .status {
          border-top: 1px solid ${({ theme }) => theme.COLORS.Light600};

          height: 38.1rem;

          color: ${({ theme }) => theme.COLORS.Light400};

          img {
            padding: 4.7rem 13rem;
          }
        }
      }
    }
  }
`

export const Form = styled.form`
  width: 34.8rem;

  margin: 5.9rem 9.1rem 4.8rem;

  input {
    background: transparent;
    padding: 0 1.4rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light500};
    }
  }

  .card-number {
    margin-bottom: 3.7rem;

    div {
      margin-top: 0.8rem;

      border-radius: 0.5rem;
      border: 1px solid;
      background: transparent;
    }
  }

  .card-info {
    display: flex;
    gap: 1.7rem;

    div {
      margin-top: 0.8rem;

      border-radius: 0.5rem;
      border: 1px solid;
      background: transparent;
    }
  }

  button {
    padding: 1.6rem 0;
    margin-top: 3.7rem;

    font-size: 1.4rem;
    font-weight: 100;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    svg {
      font-size: 3rem;
    }
  }
`
