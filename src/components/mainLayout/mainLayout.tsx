import { useState } from 'react';
import { Box, Toolbar, Footer, Sidebar } from 'src/components';
import styles from './MainLayout.module.scss';
import { MainLayoutProps } from './types';

export const MainLayout: React.FC<MainLayoutProps> = ({ children, className, ...otherProps }) => {
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
    <Box className={`relative ${styles.mainLayout} ${className || ''}`} {...otherProps}>
      <Box className={`${styles.container}`}>
        <Box className={`fixed top right z-index-50 ${styles.toolbar}`}>
          <Toolbar />
        </Box>
        <Box
          className={`absolute top fixed z-index-50 ${styles.sidebar} ${
            sidebar && styles.showSidebar
          }`}
        >
          <Sidebar showSidebar={showSidebar} hideSidebar={hideSidebar} />
        </Box>
        <Box className={`relative customScrollbar bg-dark-200 ${styles.children}`}>{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
};
