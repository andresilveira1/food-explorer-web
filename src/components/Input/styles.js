import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 50%;
  height: 4.8rem;

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

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    width: 58.1rem;
  }
`
