import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;

  padding: 5.6rem 2.8rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.Dark500};

  position: absolute;

  width: 100%;
  height: 11.4rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 3.2rem;

    padding: 0 3.7rem;

    height: 10.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    justify-content: center;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  width: 112rem;

  .menu {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.Light100};
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-size: 2.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.Light100};

    margin: 0 auto;

    span {
      font-weight: 400;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.Cake100};
    }

    svg {
      color: ${({ theme }) => theme.COLORS.Cake200};
    }
  }

  .input-search {
    display: none;
  }

  .my-fav {
    display: none;
  }

  .new-dish {
    display: none;
  }

  .order-button {
    background: transparent;
    color: transparent;

    flex: 0;

    width: 3.2rem;
    height: 3.2rem;

    border-radius: 0.5rem;

    svg {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.Light100};
    }
  }

  > span {
    position: absolute;

    right: 22px;
    top: 55px;

    font-size: 1.4rem;

    padding: 0 0.55rem;

    border-radius: 99px;
    background: ${({ theme }) => theme.COLORS.Tomato400};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .menu {
      display: none;
    }

    .logo {
      position: relative;

      margin: 0;

      span {
        position: absolute;

        right: 0;
        bottom: -1.5rem;
      }
    }

    .input-search {
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
      }

      .autocomplete-options {
        background: ${({ theme }) => theme.COLORS.Dark200};
        border: 1px solid ${({ theme }) => theme.COLORS.Dark500};

        a {
          color: ${({ theme }) => theme.COLORS.Light400};

          display: block;

          padding: 1.3rem;
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

    .my-fav {
      display: block;

      color: ${({ theme }) => theme.COLORS.Light300};
    }

    .new-dish {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.4rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;

      background: ${({ theme }) => theme.COLORS.Tomato400};
      color: ${({ theme }) => theme.COLORS.Light100};

      border-radius: 0.5rem;

      width: 21.6rem;
      height: 4.8rem;
    }

    .order-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;

      padding: 1.6rem 0;

      font-size: 1.4rem;

      max-width: 15rem;
      height: 5.6rem;

      background: ${({ theme }) => theme.COLORS.Tomato400};
      color: ${({ theme }) => theme.COLORS.Light100};

      flex: 1;

      svg {
        font-size: 3.2rem;
        color: ${({ theme }) => theme.COLORS.Light100};
      }

      svg {
        font-size: 2.6rem;
      }
    }

    > span {
      display: none;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    .logo {
      gap: 1rem;

      font-size: 2.4rem;

      padding-right: 1.1rem;

      span {
        position: absolute;

        right: 1.2rem;
        bottom: -1.5rem;
      }
    }

    .input-search {
      div {
        padding: 0 7.45rem;
      }
    }

    .order-button {
      max-width: 21.6rem;
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
