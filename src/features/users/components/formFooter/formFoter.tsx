import { Link } from 'react-router-dom';
import { Box, Text } from 'src/components';
import { FormFooterProps } from './types';

export const FormFoter: React.FC<FormFooterProps> = ({
  title,
  buttonText,
  link,
  className,
  ...otherProps
}) => {
  return (
    <Box
      className={`flex flex-row justify-center w-full noselect w-full ${className || ''}`}
      {...otherProps}
    >
      <Text className="text-gray" style={{ paddingRight: '.3em' }}>
        {title}
      </Text>
      <Link to={link} className="text-danger">
        {buttonText}
      </Link>
    </Box>
  );
};
