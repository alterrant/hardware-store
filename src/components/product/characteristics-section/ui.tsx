import { ProductInfoLayout } from 'components/layouts/product-info';
import { Button } from 'components/common/button';
import { MAIN_CHARACTERISTICS, MORE_CHARACTERISTICS } from './config';
import { ProductCharacteristics } from './characteristics';

import styles from './characteristics-section.module.scss';

type TCharacteristicsProps = {
  characteristics: { id: number; prop: string; value: string }[];
};

export const CharacteristicsSection = ({ characteristics }: TCharacteristicsProps) => (
  <ProductInfoLayout className={styles.section}>
    <h3 className={styles.title}>{MAIN_CHARACTERISTICS}</h3>
    <div className={styles.wrapper}>
      <ProductCharacteristics characteristics={characteristics} />
    </div>
    <Button btnText={MORE_CHARACTERISTICS} btnClassName={styles.moreCharacteristics} />
  </ProductInfoLayout>
);
