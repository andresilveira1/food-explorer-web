import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.section`
  grid-area: content;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    line-height: 140%;
    font-weight: 500;

    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.Light300};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    > h2 {
      font-size: 3.2rem;
    }
  }
`
