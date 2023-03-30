import { Box, Tabs, Tab, TabList, TabPanels, TabPanel, Text } from 'src/components';
import { Episodes } from '../episodes';
import { SeasonsProps } from './types';

export const Seasons = (props: SeasonsProps) => {
  const { seasons, ...otherProps } = props;

  return (
    <Box {...otherProps}>
      <Tabs>
        <TabList>
          {seasons.map((season) => (
            <Tab key={season._id}>
              <Text className={`text-white`}>{season.season}</Text>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {seasons.map((season) => (
            <TabPanel key={season._id}>
              <Box>
                <Episodes episodes={season.episodes} />
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};
