import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 0.8rem;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? 'transparent' : theme.COLORS.Light600};
  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.Light500}` : 'none'};

  > button {
    border: none;
    background: none;

    display: flex;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.Light100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.Light500};
  }

  .dishItemInput {
    border: none;
    border-radius: 0;
    background: transparent;

    padding: 0;

    width: 8rem;

    color: ${({ theme }) => theme.COLORS.Light100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light500};
    }
  }
`
