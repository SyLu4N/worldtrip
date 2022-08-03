import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { Content } from './Content';

export function Slide() {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    rewind: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      <SwiperSlide>
        <Content continent={'Europa'} text={'O continente mais antigo.'} />
      </SwiperSlide>

      <SwiperSlide>
        <Content
          continent={'America do Sul'}
          text={'O subcontinente Tropical.'}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Content
          continent={'America do Norte'}
          text={'O centro economico do mundo'}
        />
      </SwiperSlide>
    </Swiper>
  );
}
