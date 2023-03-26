export type SectionProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export const Section = (props: SectionProps) => {
  const { children, ...otherProps } = props;

  return <section {...otherProps}>{children}</section>;
};
