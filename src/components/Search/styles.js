import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: none;

  .autocomplete {
    position: absolute;
    z-index: 10;

    right: 0;
    left: 0;

    padding: 0.1rem 2.8rem 0;
  }

  .autocomplete-options {
    background: ${({ theme }) => theme.COLORS.Dark200};
    border: 1px solid ${({ theme }) => theme.COLORS.Dark500};

    a {
      color: ${({ theme }) => theme.COLORS.Light400};

      display: block;

      padding: 0.8rem 1.3rem;
    }

    span {
      font-size: 1rem;
    }
  }

  .autocomplete-options:first-child {
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }

  .autocomplete-options:last-child {
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .li-focus {
    background: ${({ theme }) => theme.COLORS.Dark100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;

    position: relative;

    flex: 1;

    div {
      border-radius: 0.5rem;
      max-width: 58.1rem;

      padding: 0 3rem;
    }

    .autocomplete {
      position: absolute;
      top: 5rem;
      z-index: 10;

      right: 0;
      left: 0;

      padding: 0;
    }

    .autocomplete-options {
      background: ${({ theme }) => theme.COLORS.Dark200};
      border: 1px solid ${({ theme }) => theme.COLORS.Dark500};

      a {
        color: ${({ theme }) => theme.COLORS.Light400};

        display: block;

        padding: 0.8rem 1.3rem;
      }

      span {
        font-size: 1rem;
      }
    }

    .autocomplete-options:first-child {
      border-top-right-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
    }

    .autocomplete-options:last-child {
      border-bottom-right-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }

    .li-focus {
      background: ${({ theme }) => theme.COLORS.Dark100};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    div {
      padding: 0 7.45rem;
    }
  }
`
