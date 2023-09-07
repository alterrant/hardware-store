import { type TCharacteristic } from 'types/product';

export type TProductCardInfo = {
  id: number;
  imgSrc: string;
  title: string;
  productCharacteristics: TCharacteristic[];
  link: string;
  isAvailable: boolean;
};
