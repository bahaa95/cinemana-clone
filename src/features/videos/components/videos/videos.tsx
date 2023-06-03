import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Box } from 'src/components';
import { VideoCard } from '../videoCard';
import { VideosProps } from './types';

export const Videos: React.FC<VideosProps> = ({ videos, ...otherProps }) => {
  return (
    <Box {...otherProps}>
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
