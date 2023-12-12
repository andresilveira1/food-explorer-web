import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../../styles/deviceBreakpoints'

export const Container = styled.section`
  grid-area: content;

  margin: 0 0 2.4rem 2.4rem;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    line-height: 140%;
    font-weight: 500;

    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.Light300};
  }

  .swiper-wrapper {
    gap: 1.6rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.Light100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    max-width: 112rem;

    margin: 0 auto 2.4rem;

    > h2 {
      font-size: 3.2rem;
    }

    .swiper-wrapper {
      gap: 2.7rem;
    }
  }
`
