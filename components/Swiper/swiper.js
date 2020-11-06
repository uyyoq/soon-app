import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SwiperComp = () => {
  return (
      <div className="w-11/12 h-full flex justify-center item-center my-0 mx-0 px-6">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="">
          <img className="w-64 h-full" src="/promotion/promotion1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="w-64 h-full" src="/promotion/promotion2.jpg"/>
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="w-64 h-full" src="/promotion/promotion3.jpg"/>
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="w-64 h-full" src="/promotion/promotion4.jpg"/>
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="w-64 h-full" src="/promotion/promotion5.jpg"/>
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="w-64 h-full" src="/promotion/promotion6.jpg"/>
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="w-64 h-full" src="/promotion/promotion7.jpg"/>
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="w-64 h-full" src="/promotion/promotion8.jpg"/>
        </SwiperSlide>
      </Swiper>
      </div>
  )
}


export default SwiperComp