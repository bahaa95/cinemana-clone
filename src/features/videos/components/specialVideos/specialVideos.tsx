import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Image, Text } from 'src/components';
import { SpecialVideo } from '../../types';
import { Stars } from '../stars';
import { Watch } from '../watch';
import styles from './SpecialVideos.module.scss';

export type SpecialVideosProps = {
  specialVideos: SpecialVideo[];
  className?: string;
  style?: React.CSSProperties;
};

export const SpecialVideos = (props: SpecialVideosProps) => {
  const { specialVideos, className, style } = props;
  const [activeVideo, setActiveVideo] = useState<SpecialVideo>(specialVideos[0]);
  const navigate = useNavigate();

  const handleWatchClick = () => navigate(`/video/_id/${activeVideo._id}`);

  return (
    <Box
      className={`relative bg-dark-200 flex flex-col justify-between ${className || ''} ${
        styles.specialVideos
      }`}
      style={style}
    >
      {/* background image */}
      <Box className={`absolute top bottom right left z-index-20 ${styles.background}`}>
        <Image
          src={activeVideo?.cover?.url}
          alt={activeVideo?.title}
          className={`relative ${styles.backgroundImage}`}
        />
      </Box>
      {/* backgroun overlay */}
      <Box className={`absolute top bottom right left z-index-30 ${styles.overlay}`}></Box>
      {/* info */}
      <Box className={`relative flex flex-col z-index-40 ${styles.info}`}>
        <Box className={`relative capitalize text-gray ${styles.release}`}>
          <Text>new releases</Text>
        </Box>
        {/* title */}
        <Box className={`flex alaign-center`}>
          <h3 className={`text-white font-semibold ${styles.title}`}>
            {activeVideo?.title}
            <Stars stars={activeVideo?.stars} />
          </h3>
        </Box>
        {/* description */}
        <Box>
          <Text className={`text-white ${styles.description}`}>{activeVideo?.description}</Text>
        </Box>
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
            // loop={true}
            modules={[Autoplay, Navigation]}
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
                  <Box className={`absolute top bottom right left`}>
                    <Image
                      src={video.cover.url}
                      alt={video.title}
                      className={`rounded-lg ${styles.slideImage}`}
                    />
                  </Box>
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
