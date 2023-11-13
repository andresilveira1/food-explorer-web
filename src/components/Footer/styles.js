import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2.7rem;

  background: ${({ theme }) => theme.COLORS.Dark500};

  > strong {
    color: ${({ theme }) => theme.COLORS.Light700};
    font-size: 1.5rem;

    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  > span {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.Light200};
  }
`
