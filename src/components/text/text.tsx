import React from 'react';
import styles from './Text.module.scss';

export type TextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const Text = (props: TextProps) => {
  const { children, className, ...otherProps } = props;

  return (
    <p className={`${styles.text} ${className || ''}`} {...otherProps}>
      {children}
    </p>
  );
};
