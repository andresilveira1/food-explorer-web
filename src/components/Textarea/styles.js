import styled from 'styled-components'

export const Container = styled.textarea`
  height: 17.2rem;
  width: 100%;

  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.COLORS.Light100};

  resize: none;

  background: ${({ theme }) => theme.COLORS.Dark300};
  border-radius: 0.8rem;
  border: none;
  padding: 1.4rem;

  &::placeholder {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.Light500};
  }
`
