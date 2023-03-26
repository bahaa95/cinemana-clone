import { Box } from '@chakra-ui/react';
import { Toolbar } from 'src/components';

type Props = {
  children?: React.ReactNode;
};

export const MainLayout = (props: Props) => {
  const { children, ...otherProps } = props;
  return (
    <Box {...otherProps}>
      <Box>
        <Toolbar />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};
