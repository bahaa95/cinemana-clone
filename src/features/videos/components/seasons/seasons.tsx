import { Box, Tabs, Tab, TabList, TabPanels, TabPanel, Text } from 'src/components';
import { Episodes } from '../episodes';
import { SeasonsProps } from './types';

export const Seasons: React.FC<SeasonsProps> = ({ seasons, ...otherProps }) => {
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
              <Episodes episodes={season.episodes} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};
