import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.footer`
  grid-area: footer;

  padding: 0 2.7rem;

  background: ${({ theme }) => theme.COLORS.Dark500};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;

    strong {
      color: ${({ theme }) => theme.COLORS.Light700};
      font-size: 1.5rem;

      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    span {
      font-family: 'DM Sans', sans-serif;
      font-size: 1.2rem;

      color: ${({ theme }) => theme.COLORS.Light200};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
      width: 112rem;

      margin: 0 auto;
    }
  }
`
