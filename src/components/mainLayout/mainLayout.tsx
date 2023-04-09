import { useState } from 'react';
import { Box, Toolbar, Footer, Sidebar } from 'src/components';
import styles from './MainLayout.module.scss';

type Props = {
  children?: React.ReactNode;
};

export const MainLayout = (props: Props) => {
  const { children, ...otherProps } = props;

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    const body = document.querySelector('body');

    // remove class sidebar from body
    body?.classList.remove('sidebar');

    // add sidebar class to body
    body?.classList.add('sidebar');

    setSidebar(true);
  };

  const hideSidebar = () => {
    const body = document.querySelector('body');

    // remove class sidebar from body
    body?.classList.remove('sidebar');

    setSidebar(false);
  };

  return (
    <Box {...otherProps} className={`relative ${styles.mainLayout}`}>
      <Box className={`${styles.container}`}>
        <Box className={`fixed top right z-index-50 ${styles.toolbar}`}>
          <Toolbar />
        </Box>
        <Box
          className={`absolute left top fixed z-index-50 ${styles.sidebar} ${
            sidebar && styles.showSidebar
          }`}
        >
          <Sidebar showSidebar={showSidebar} hideSidebar={hideSidebar} />
        </Box>
        <Box className={`relative customScrollbar bg-dark-200 ${styles.children}`}>{children}</Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
