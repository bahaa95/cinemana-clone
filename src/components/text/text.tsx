import React from 'react';
import styles from './Text.module.scss';
import { TextProps } from './types';

export const Text: React.FC<TextProps> = ({ children, className, ...otherProps }) => {
  return (
    <p className={`${styles.text} ${className || ''}`} {...otherProps}>
      {children}
    </p>
  );
};
