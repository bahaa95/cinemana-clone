import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import { Aside, Box, Stack, StackItem, Image, Text, Header, Nav } from 'src/components';
import { links } from './links';
import styles from './Sidebar.module.scss';
import { SidebarProps } from './types';

export const Sidebar: React.FC<SidebarProps> = ({ showSidebar, hideSidebar }) => {
  const location = useLocation();

  //add active class to curent page
  useEffect(() => {
    const currentPage = window?.location.href.split('?')[0];
    const elements = document.querySelectorAll('#nav-link');

    for (let i = elements.length - 1; i >= 0; i--) {
      const element = elements[i];
      if (
        element instanceof HTMLAnchorElement &&
        currentPage.includes(element.href.split('?')[0])
      ) {
        element.classList.add(styles.active);
      } else {
        element.classList.remove(styles.active);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Aside className={`bg-dark-100 customScrollbar overflow-y-auto noselect  ${styles.sidebar}`}>
      {/* Hamburger Menu */}
      <Box className={`fixed ${styles.hamburger}`} onClick={showSidebar}>
        <GiHamburgerMenu className={`text-gray text-2xl pointer`} />
      </Box>
      <Box className={`relative z-index-40 ${styles.sidebarContainer}`}>
        <Stack>
          {/* header */}
          <StackItem>
            <Header className={`relative z-index-40 ${styles.header}`}>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <StackItem>
                  <Link to="/" className={`flex w-full alaign-center justify-between`}>
                    <Box className={`${styles.logoContainer}`}>
                      <Image src="/cinemana.svg" />
                    </Box>
                    <Text className={`text-gray capitalize ${styles.headerText}`}>
                      Cinemana-Clone
                    </Text>
                  </Link>
                </StackItem>
                <StackItem>
                  <Box className={`pointer ${styles.hideSidebar}`} onClick={hideSidebar}>
                    <FaArrowLeft />
                  </Box>
                </StackItem>
              </Stack>
            </Header>
          </StackItem>
          {/* nav */}
          <StackItem>
            <Nav className={`${styles.nav}`}>
              <Stack direction={'column'}>
                {links.map((link) => (
                  <StackItem key={link.title}>
                    <Link
                      to={link.link}
                      className={`flex alaign-center text-gray uppercase block relative ${styles.navLink}`}
                      id="nav-link"
                    >
                      <link.icon className={`${styles.icon}`} />
                      <Text>{link.title}</Text>
                    </Link>
                  </StackItem>
                ))}
              </Stack>
            </Nav>
          </StackItem>
        </Stack>
      </Box>
    </Aside>
  );
};
