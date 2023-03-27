import { Link } from 'react-router-dom';
import { Box, Stack, StackItem } from 'src/components';
import { Group as IGroup } from '../../types';
import { Videos } from '../videos';
import styles from './Group.module.scss';

export type GroupProps = { group: IGroup; className?: string; style?: React.CSSProperties };

export const Group = (props: GroupProps) => {
  const { group, className, style } = props;

  return (
    <Box className={`bg-dark-200 ${styles.group} ${className || ''}`} style={style}>
      <Stack direction={'column'}>
        {/* title */}
        <StackItem>
          <Box>
            <Link
              to={`/groups/_id/${group._id}`}
              className={`inline-block text-white capitalize pointer ${styles.title}`}
            >
              {group.title}
            </Link>
          </Box>
        </StackItem>
        {/* videos slides */}
        <StackItem>
          <Box>
            <Videos videos={group.videos} />
          </Box>
        </StackItem>
      </Stack>
    </Box>
  );
};
