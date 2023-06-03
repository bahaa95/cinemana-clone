import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autoplay, Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Text, BackgroundImage } from 'src/components';
import { TSpecialVideo } from '../../types';
import { NewRelease } from '../newRelease';
import { Stars } from '../stars';
import { Watch } from '../watch';
import styles from './SpecialVideos.module.scss';
import { SpecialVideosProps } from './types';

export const SpecialVideos: React.FC<SpecialVideosProps> = ({
  specialVideos,
  className,
  ...props
}) => {
  const [activeVideo, setActiveVideo] = useState<TSpecialVideo>(specialVideos[0]);
  const navigate = useNavigate();

  const handleWatchClick = () => navigate(`/video/_id/${activeVideo._id}`);

  return (
    <Box
      className={`relative bg-dark-200 flex flex-col justify-between ${className || ''} ${
        styles.specialVideos
      }`}
      {...props}
    >
      {/* background image */}
      <BackgroundImage
        src={activeVideo?.cover?.url}
        alt={activeVideo?.title}
        className={`z-index-20 ${styles.backgroundImage}`}
      />
      {/* info */}
      <Box className={`relative flex flex-col z-index-40 ${styles.info}`}>
        <NewRelease />
        {/* title and stars */}
        <Box className={`flex alaign-center`}>
          <h3 className={`text-white font-semibold ${styles.title}`}>{activeVideo?.title}</h3>
          <Stars stars={activeVideo?.stars} />
        </Box>
        {/* description */}
        <Text className={`text-white ${styles.description}`}>{activeVideo?.description}</Text>
      </Box>
      <Box className={`relative flex flex-col z-index-40`}>
        {/* actions */}
        <Box className={`${styles.actions}`}>
          <Watch onClick={handleWatchClick} className={`${styles.watchButton}`} />
        </Box>
        {/* slider */}
        <Box className={`flex flex-row justify-center alaign-center`}>
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            freeMode={true}
            modules={[Autoplay, Navigation, FreeMode]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onRealIndexChange={(swiper) => {
              setActiveVideo(specialVideos[swiper.realIndex]);
            }}
            className={`${styles.slider}`}
          >
            {specialVideos.map((video, index) => (
              <SwiperSlide
                key={video._id}
                onClick={() => setActiveVideo(specialVideos[index])}
                className={`rounded-lg overflow-hidden pointer ${styles.slide}`}
              >
                <Box className={`relative image-overlay noselect ${styles.slideContainer}`}>
                  <BackgroundImage
                    src={video.cover.url}
                    alt={video.title}
                    className={`rounded-lg ${styles.slideImage}`}
                  />
                  <Box
                    className={`absolute top bottom right left flex justify-center alaign-center rounded-lg ${styles.slideOverlay}`}
                  >
                    <Text className={`text-white text-center font-semibold ${styles.slideTitle}`}>
                      {video.title}
                    </Text>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};
