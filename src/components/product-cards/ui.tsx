import React from 'react';

import { Button, ButtonColors, ButtonVariants } from 'components/common/button';
import { type TProductCardInfo, ProductCard } from './product-card';
import { BOOKING_AVAILABLE } from './configs';

import styles from './product-cards.module.css';

type TProductCardsProps = {
  productCardsInfo: TProductCardInfo[];
};

export const ProductCards = ({ productCardsInfo }: TProductCardsProps) => {
  const handleClickCardBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const productCards = productCardsInfo.map(productCard => (
    <ProductCard
      productCharacteristics={productCard.productCharacteristics}
      imgSrc={productCard.imgSrc}
      title={productCard.title}
      link={productCard.link}
      key={productCard.id}>
      <Button
        btnText={productCard.isAvailable ? BOOKING_AVAILABLE : BOOKING_AVAILABLE}
        variants={ButtonVariants.ELLIPSE}
        textColor={ButtonColors.DARK_GREY}
        bgColor={ButtonColors.WHITE}
        btnClassName={styles.button}
        onClick={handleClickCardBtn}
      />
    </ProductCard>
  ));

  return <section className={styles.container}>{productCards}</section>;
};
