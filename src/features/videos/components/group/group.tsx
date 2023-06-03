import { Link } from 'react-router-dom';
import { Box, Stack, StackItem } from 'src/components';
import { Videos } from '../videos';
import styles from './Group.module.scss';
import { GroupProps } from './types';

export const Group: React.FC<GroupProps> = ({ group, className, style }) => {
  return (
    <Box className={`bg-dark-200 ${styles.group} ${className || ''}`} style={style}>
      <Stack direction={'column'}>
        {/* title */}
        <StackItem>
          <Link
            to={`/groups/_id/${group._id}`}
            className={`inline-block text-white capitalize pointer ${styles.title}`}
          >
            {group.title}
          </Link>
        </StackItem>
        {/* videos slides */}
        <StackItem>
          <Videos videos={group.videos} />
        </StackItem>
      </Stack>
    </Box>
  );
};
