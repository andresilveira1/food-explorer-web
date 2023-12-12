import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../../styles/deviceBreakpoints'

export const Container = styled.div`
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

  .edit {
    font-size: 3rem;
    margin-left: auto;

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
    gap: 1.6rem;

    width: 100%;
    height: 8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
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
`
