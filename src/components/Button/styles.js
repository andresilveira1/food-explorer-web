import styled from 'styled-components'

export const Container = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: medium;

  width: 100%;
  border: 0;
  border-radius: 0.5rem;

  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.Tomato400};
  color: ${({ theme }) => theme.COLORS.Light100};

  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.Tomato300};

    transition: 0.5s;
  }
`
