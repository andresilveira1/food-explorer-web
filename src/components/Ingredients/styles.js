import styled from 'styled-components'

export const Container = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.Light100};

  padding: 4px 8px;

  border-radius: 5px;
  background: ${({ theme }) => theme.COLORS.Dark100};
`
