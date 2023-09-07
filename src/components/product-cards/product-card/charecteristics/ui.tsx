import { type TCharacteristic } from 'types/product';

import styles from './product-card-characteristics.module.css';

type TProductCharacteristicsProps = {
  characteristics: TCharacteristic[];
};

export const ProductCardCharacteristics = ({ characteristics }: TProductCharacteristicsProps) => {
  const characteristicsColumns = characteristics.map(characteristic => (
    <div className={styles.row} key={characteristic.id}>
      <p className={styles.prop}>{characteristic.prop}</p>
      <p className={styles.value}>{characteristic.value}</p>
    </div>
  ));

  return <div className={styles.wrapper}>{characteristicsColumns}</div>;
};
