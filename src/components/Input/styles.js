import styled from 'styled-components'

export const Container = styled.div`
  height: 4.8rem;
  flex: 1;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  background: ${({ theme }) => theme.COLORS.Dark200};

  color: ${({ theme }) => theme.COLORS.Light400};

  > input {
    width: 100%;

    background: ${({ theme }) => theme.COLORS.Dark200};

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.Light400};

    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light500};
    }
  }
`
