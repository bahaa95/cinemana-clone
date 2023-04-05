import { IoIosHome } from 'react-icons/io';
import { MdMovie, MdFavorite } from 'react-icons/md';
import { RiPlayList2Line } from 'react-icons/ri';
import { TbDeviceTvOld } from 'react-icons/tb';

export const links = [
  {
    title: 'home',
    link: '/home',
    icon: IoIosHome,
  },
  {
    title: 'movies',
    link: '/movies/search?type=movie',
    icon: MdMovie,
  },
  {
    title: 'series',
    link: '/series/search?type=series',
    icon: TbDeviceTvOld,
  },
  {
    title: 'watch list',
    link: '/watchList',
    icon: RiPlayList2Line,
  },
  {
    title: 'favorites',
    link: '/favorites',
    icon: MdFavorite,
  },
];
