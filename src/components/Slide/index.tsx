import { ReactNode } from 'react';

import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SlideProps {
  settings: SwiperProps;
  children: ReactNode;
}

export function Slide({ settings, children }: SlideProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
}
