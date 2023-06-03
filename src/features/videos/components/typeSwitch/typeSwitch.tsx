import { useEffect, useState } from 'react';
import { Box, Text } from 'src/components';
import { IVideo } from '../../types';
import { TypeSwitchProps } from './types';
import styles from './TypeSwitch.module.scss';

export const TypeSwitch: React.FC<TypeSwitchProps> = ({
  defaultType = 'movie',
  onChange,
  className,
  ...props
}) => {
  const [type, setType] = useState<IVideo['type']>(defaultType);

  useEffect(() => {
    onChange(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <Box
      className={`bg-dark-100 text-gray pointer ${styles.typeSwitch} ${className || ''}`}
      {...props}
    >
      <Box className={`flex justify-between alaign-center`}>
        <Box
          onClick={() => setType('movie')}
          className={`${defaultType === 'movie' ? styles.active : ''} ${styles.type}`}
        >
          <Text>Movies</Text>
        </Box>
        <Box
          onClick={() => setType('series')}
          className={`${defaultType === 'series' ? styles.active : ''} ${styles.type}`}
        >
          <Text>Series</Text>
        </Box>
      </Box>
    </Box>
  );
};
