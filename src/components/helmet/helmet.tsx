import { Helmet as ReactHelmet } from 'react-helmet';

type Props = {
  title: string;
};

export const Helmet: React.FC<Props> = ({ title }) => {
  return (
    <ReactHelmet>
      <meta charSet="utf-8" />
      <title>{title || '...Loding'}</title>
    </ReactHelmet>
  );
};
