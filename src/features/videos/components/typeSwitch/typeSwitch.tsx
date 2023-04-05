import { useEffect, useState } from 'react';
import { Box, Text } from 'src/components';
import { Video } from '../../types';
import { TypeSwitchProps } from './types';
import styles from './TypeSwitch.module.scss';

export const TypeSwitch = (props: TypeSwitchProps) => {
  const { defaultType, onChange } = props;
  const [type, setType] = useState<Video['type']>(defaultType || 'movie');

  useEffect(() => {
    onChange(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    setType(defaultType || 'movie');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultType]);

  return (
    <Box className={`bg-dark-100 text-gray pointer ${styles.typeSwitch}`}>
      <Box className={`flex justify-between alaign-center`}>
        <Box
          onClick={() => setType('movie')}
          className={`${type === 'movie' ? styles.active : ''} ${styles.type}`}
        >
          <Text>Movies</Text>
        </Box>
        <Box
          onClick={() => setType('series')}
          className={`${type === 'series' ? styles.active : ''} ${styles.type}`}
        >
          <Text>Series</Text>
        </Box>
      </Box>
    </Box>
  );
};
