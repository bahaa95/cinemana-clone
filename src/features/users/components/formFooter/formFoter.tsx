import { Link } from 'react-router-dom';
import { Box, Stack, StackItem, Text } from 'src/components';
import { FormFooterProps } from './types';

export const FormFoter = (props: FormFooterProps) => {
  const { title, buttonText, link, ...otherProps } = props;

  return (
    <Box {...otherProps}>
      <Stack className="text-gray noselect" direction={'row'}>
        <StackItem>
          <Text>{title}</Text>
        </StackItem>
        <StackItem>
          <Link to={link} className="text-danger">
            {buttonText}
          </Link>
        </StackItem>
      </Stack>
    </Box>
  );
};
