import styled from 'styled-components'

export const Container = styled.aside`
  display: grid;

  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  width: 100%;
  height: 100vh;

  position: absolute;
  z-index: 100;

  background-color: ${({ theme }) => theme.COLORS.Dark700};

  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open='true'] {
    transform: translateY(0);

    position: fixed;
  }
`

export const Header = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 6.8rem 0 3.2rem 2.8rem;

  background: ${({ theme }) => theme.COLORS.Dark400};

  > h1 {
    font-size: 2.1rem;
    font-weight: 400;
  }
`

export const Button = styled.button`
  background: none;
  border: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.Light100};
  }
`

export const Nav = styled.aside`
  grid-area: 'content';

  padding: 3.6rem 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.Dark700};

  > div:nth-child(1) {
    display: block;

    width: 100%;

    div {
      padding: 1.4rem 0.8rem;
      border-radius: 0.5rem;
    }
  }

  > div:nth-child(2) {
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.Dark100};
    border-width: 100%;

    margin-top: 4.6rem;

    a {
      display: block;

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark100};

      padding: 0 0 1rem 1rem;
    }

    button {
      padding: 1rem 0 1rem 1rem;
    }

    a,
    button {
      font-size: 2.4rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.Light300};
    }
  }
`
