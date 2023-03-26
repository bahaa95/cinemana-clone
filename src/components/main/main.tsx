type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export const Main = (props: Props) => {
  const { children, ...otherProps } = props;
  return <main {...otherProps}>{children}</main>;
};
