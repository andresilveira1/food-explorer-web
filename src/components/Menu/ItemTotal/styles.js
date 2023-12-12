import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > button {
    background: none;
    border: transparent;

    svg {
      color: ${({ theme }) => theme.COLORS.Light100};
    }
  }

  > span {
    color: ${({ theme }) => theme.COLORS.Light300};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    > span {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`
