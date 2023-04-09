import { Copy } from 'src/types';

export type FavoriteButtonProps = Copy<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> & {
  isFavorite?: boolean;
};
