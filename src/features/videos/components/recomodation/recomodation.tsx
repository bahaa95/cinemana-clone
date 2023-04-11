import { Box, Stack, StackItem } from 'src/components';
import { SectionTitle } from '../sectionTitle';
import { Videos } from '../videos';
import { RecomodationProps } from './types';

export const Recomodation = (props: RecomodationProps) => {
  const { videos } = props;

  return (
    <Box>
      <Stack direction={'column'}>
        <StackItem>
          <SectionTitle>You may also like</SectionTitle>
        </StackItem>
        <StackItem>
          <Videos videos={videos} />
        </StackItem>
      </Stack>
    </Box>
  );
};
