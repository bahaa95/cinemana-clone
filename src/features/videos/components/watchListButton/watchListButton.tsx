import { AiOutlinePlus } from 'react-icons/ai';
import { Stack, StackItem, Text } from 'src/components';
import { WatchListButtonProps } from './type';
import styles from './WatchListButton.module.scss';

export const WatchListButton = (props: WatchListButtonProps) => {
  const { className, ...otherProps } = props;

  return (
    <button className={`text-white ${styles.button} ${className || ''}`} {...otherProps}>
      <Stack direction={'row'} alignItems={'center'} spacing={'.1em'}>
        <StackItem>
          <AiOutlinePlus />
        </StackItem>
        <StackItem>
          <Text>Add to Watch List</Text>
        </StackItem>
      </Stack>
    </button>
  );
};
