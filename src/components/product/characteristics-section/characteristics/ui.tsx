import { Fragment } from 'react';

import styles from './characteristics.module.scss';

type TProductCharacteristicsProps = {
  characteristics: { id: number; prop: string; value: string }[];
};

export const ProductCharacteristics = ({ characteristics }: TProductCharacteristicsProps) => {
  return characteristics.map(characteristic => (
    <Fragment key={characteristic.id}>
      <p className={styles.prop}>{characteristic.prop}</p>
      <p className={styles.value}>{characteristic.value}</p>
      <div className={styles.divider} />
    </Fragment>
  ));
};
