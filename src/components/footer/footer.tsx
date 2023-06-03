import { OuterLink, Text } from 'src/components';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <OuterLink
      href="https://bahaa-adel.vercel.app/"
      target={'_blank'}
      className={`block w-full bg-dark-300 flex justify-center alaign-center pointer noselect ${styles.footer}`}
    >
      <Text className={`text-white capitalize ${styles.title}`}>build by bahaa adel</Text>
    </OuterLink>
  );
};
