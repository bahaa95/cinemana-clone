import { useNavigate } from 'react-router-dom';
import { Box } from 'src/components';
import styles from './Layout.module.scss';
import { LayoutProps } from './types';

export const Layout = (props: LayoutProps) => {
  const { children, className, ...otherProps } = props;
  const navigate = useNavigate();

  return (
    <Box
      {...otherProps}
      className={`relative bg-dark-200 min-h-screen min-w-screen flex justify-center alaign-center ${
        styles.layout
      } ${className || ''}`}
    >
      {children}
      <Box className={`absolute bottom left right noselect`}>
        <button className={`w-full ${styles.button}`} onClick={() => navigate('/home')}>
          Continue as a Guest
        </button>
      </Box>
    </Box>
  );
};
