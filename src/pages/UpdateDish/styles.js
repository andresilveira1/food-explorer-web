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

  > div {
    grid-area: content;

    width: 36.4rem;

    margin: 0 auto;
    padding-top: 1.1rem;

    animation: fromLeft 0.5s 100ms backwards;

    div {
      font-family: 'Poppins', sans-serif;

      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.Light300};

      a {
        display: flex;
        align-items: center;

        width: fit-content;

        font-size: 1.6rem;
        font-weight: 500;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.Light300};

        margin-bottom: 2.4rem;

        svg {
          font-size: 2.2rem;
        }
      }

      h2 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;

        margin-bottom: 2.4rem;
        margin-left: 3px;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    grid-template-rows: 10.4rem auto 7.7rem;

    > div {
      width: 112rem;

      padding-top: 4rem;

      div {
        a {
          font-size: 2.4rem;
          font-weight: bold;
        }
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  justify-content: end;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    border-radius: 0.8rem;

    label {
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.Light400};
    }

    input {
      padding: 1.6rem 1.4rem;
      border-radius: 0.8rem;

      background: ${({ theme }) => theme.COLORS.Dark300};
    }

    div {
      border-radius: 0.8rem;
    }
  }

  .fileLabel {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    padding: 1.2rem 0 1.2rem 2.8rem;

    height: 5.1rem;

    background: ${({ theme }) => theme.COLORS.Dark300};
    border-radius: 0.8rem;

    svg {
      font-size: 2.4rem;
    }

    span {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 1.4rem;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .dish-item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.6rem;

    padding: 0.8rem;

    background: ${({ theme }) => theme.COLORS.Dark300};
  }

  .button-wrapper {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;

    margin-bottom: 5.3rem;
  }

  .button-save,
  .button-remove {
    width: max-content;
    padding: 1.2rem 0;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
  }

  .button-save {
    background: ${({ theme }) => theme.COLORS.Tomato100};
  }

  .button-remove {
    background: ${({ theme }) => theme.COLORS.Dark300};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 3.2rem;

    > div:nth-child(1) {
      width: 22.9rem;
    }

    > div:nth-child(2) {
      width: 46.3rem;

      input {
        height: 5.1rem;
      }
    }

    > div:nth-child(3) {
      width: 36.4rem;
    }

    > div:nth-child(4) {
      width: 83.7rem;
    }

    > div:nth-child(5) {
      width: 25.1rem;
    }

    > div:nth-child(6) {
      width: 100%;
    }

    .button-save {
      width: 17.2rem;
    }

    .button-remove {
      width: 13.5rem;
    }
  }
`
