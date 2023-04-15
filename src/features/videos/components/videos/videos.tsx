import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Box } from 'src/components';
import { VideoCard } from '../videoCard';
import { VideosProps } from './types';

export const Videos = (props: VideosProps) => {
  const { videos, className, ...otherProps } = props;

  return (
    <Box className={`${className || ''}`} {...otherProps}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        modules={[Navigation, FreeMode]}
      >
        {videos.map((video) => (
          <SwiperSlide key={video._id} className={`w-fit`}>
            <VideoCard video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
