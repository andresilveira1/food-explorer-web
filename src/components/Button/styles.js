import styled from 'styled-components'

export const Container = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: medium;

  width: 100%;
  border: 0;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.Tomato400};
  color: ${({ theme }) => theme.COLORS.Light100};

  &:disabled {
    opacity: 0.5;
  }
`
