import styled from 'styled-components'

export const Container = styled.div`
  max-width: 58.1rem;
  height: 4.8rem;
  flex: 1;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  background-color: ${({ theme }) => theme.COLORS.Dark200};
  color: ${({ theme }) => theme.COLORS.Light400};

  > input {
    width: 100%;
    background-color: transparent;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.Light400};

    border: none;
    outline: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.Light500};
    }
  }
`
