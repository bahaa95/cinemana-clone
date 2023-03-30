import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Image, Text } from 'src/components';
import { notify } from 'src/lib/notify';
import { formatDuration } from '../../utils';
import styles from './Episodes.module.scss';
import { EpisodesProps } from './types';

export const Episodes = (props: EpisodesProps) => {
  const { episodes, ...otherProps } = props;

  return (
    <Box {...otherProps}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className={`${styles.slider}`}
      >
        {episodes.map((episode) => (
          <SwiperSlide
            key={episode._id}
            className={`rounded-lg overflow-hidden pointer w-fit noselect ${styles.slide}`}
            onClick={() =>
              notify({
                type: 'info',
                message: "Sorry it's just a clone you can't watch anything here :)",
              })
            }
          >
            <Box className={`relative ${styles.slideContainer}`}>
              <Box className={`relative image-overlay noselect ${styles.imageContainer}`}>
                <Box className={`absolute top bottom right left rounded-lg ${styles.hover}`}></Box>
                <Image
                  src={episode.image.url}
                  alt={`episode ${episode.episode}`}
                  className={`rounded-lg ${styles.image}`}
                />
              </Box>
              <Box className={`text-gray flex justify-between alaign-center ${styles.info}`}>
                <Text className={`${styles.title}`}>Episode {episode.episode}</Text>
                <Text className={`${styles.title}`}>{formatDuration(episode.duration)}</Text>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
