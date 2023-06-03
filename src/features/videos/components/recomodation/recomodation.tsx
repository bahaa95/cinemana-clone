import { Box } from 'src/components';
import { SectionTitle } from '../sectionTitle';
import { Videos } from '../videos';
import { RecomodationProps } from './types';

export const Recomodation: React.FC<RecomodationProps> = ({ videos, className, ...props }) => {
  return (
    <Box className={`flex flex-col ${className || ''}`} {...props}>
      <SectionTitle style={{ paddingBottom: '.5em' }}>You may also like</SectionTitle>
      <Videos videos={videos} />
    </Box>
  );
};
