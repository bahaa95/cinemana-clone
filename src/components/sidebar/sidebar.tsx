import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import { Aside, Box, Stack, StackItem, Image, Text, Header, Nav } from 'src/components';
import { links } from './links';
import styles from './Sidebar.module.scss';
import { SidebarProps } from './types';

export const Sidebar = (props: SidebarProps) => {
  const { showSidebar, hideSidebar } = props;
  const location = useLocation();

  //add active class to curent nav-link
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
                  <Link to="/">
                    <Stack direction={'row'} alignItems={'center'} spacing={'1em'}>
                      <StackItem>
                        <Box className={`${styles.logoContainer}`}>
                          <Image src="/cinemana.svg" />
                        </Box>
                      </StackItem>
                      <StackItem>
                        <Text className={`text-gray capitalize ${styles.headerText}`}>
                          Cinemana-Clone
                        </Text>
                      </StackItem>
                    </Stack>
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
              <Stack>
                {links.map((link) => (
                  <StackItem key={link.title}>
                    <Link
                      to={link.link}
                      className={`text-gray uppercase block relative ${styles.navLink}`}
                      id="nav-link"
                    >
                      <Stack direction={'row'} alignItems={'center'} spacing={'1em'}>
                        <StackItem>{<link.icon className={`${styles.icon}`} />}</StackItem>
                        <StackItem>
                          <Text>{link.title}</Text>
                        </StackItem>
                      </Stack>
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
