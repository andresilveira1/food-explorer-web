import styled from 'styled-components'

export const Container = styled.div`
  .trigger {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.3rem 1.6rem;

    background: ${({ theme }) => theme.COLORS.Dark300};
    border: none;
    border-radius: 0.5rem;

    span {
      color: ${({ theme }) => theme.COLORS.Light400};
    }
  }

  .icon {
    font-size: 2.4rem;

    color: ${({ theme }) => theme.COLORS.Light400};
  }
`
