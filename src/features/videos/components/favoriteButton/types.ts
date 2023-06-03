import { Combine } from 'src/types';

export type FavoriteButtonProps = Combine<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  {
    isFavorite?: boolean;
  }
>;
