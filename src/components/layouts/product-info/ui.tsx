import classNames from 'classnames';
import { type ReactNode } from 'react';

import styles from './product-info-layout.module.scss';

type TProductInfoLayoutProps = {
  className?: string;
  children: ReactNode;
};

export const ProductInfoLayout = ({ children, className }: TProductInfoLayoutProps) => {
  const sectionClassName = classNames(styles.wrapper, className);

  return <section className={sectionClassName}>{children}</section>;
};
