import { BoxProps } from 'src/components';
import { Combine, Copy } from 'src/types';

export type FormFooterProps = Copy<
  Combine<
    Omit<BoxProps, 'children'>,
    {
      title: string;
      buttonText: string;
      link: string;
    }
  >
>;
