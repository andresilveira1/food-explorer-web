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

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .swiper-button-next,
    .swiper-button-prev {
      display: flex;

      height: 100%;
      width: 15rem;

      color: ${({ theme }) => theme.COLORS.Light100};
    }

    .swiper-button-prev {
      left: -5px;
      top: 1.375rem;

      padding-left: 1.9rem;

      justify-content: flex-start;

      background: linear-gradient(
        90deg,
        #000a0f 0%,
        rgba(0, 10, 15, 0.27) 100%
      );
    }

    .swiper-button-next {
      right: 0;
      top: 1.375rem;

      padding-right: 1.9rem;

      justify-content: flex-end;

      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 0.27) 0%,
        #000a0f 100%
      );
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    max-width: 112rem;

    margin: 0 auto 2.4rem;

    > h2 {
      font-size: 3.2rem;
    }
  }
`
