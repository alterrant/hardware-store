import { ProductInfoLayout } from 'components/layouts/product-info';
import { SKU } from './config';
import { ProductActions } from '../product-actions';

import styles from './main-info.module.css';

type TMainInfoSectionProps = {
  id: number;
  title: string;
  imgSrc: string;
  category: string;
  sku: number;
  description: string;
};

export const MainInfoSection = ({
  id,
  title,
  imgSrc,
  category,
  sku,
  description,
}: TMainInfoSectionProps) => {
  const handleAddToCart = () => {};

  return (
    <ProductInfoLayout>
      <div className={styles.wrapper}>
        <div className={styles.productImgWrapper}>
          <img className={styles.productImg} src={imgSrc} alt={title} />
        </div>
        <div className={styles.container}>
          <div className={styles.mainInfo}>
            <h1>{title}</h1>
            <p className={styles.category}>{category}</p>
          </div>

          <p>
            {SKU}
            <span className={styles.sku}>{sku}</span>
          </p>

          <p>{description}</p>

          <ProductActions handleAddToCart={handleAddToCart} />
        </div>
      </div>
    </ProductInfoLayout>
  );
};
