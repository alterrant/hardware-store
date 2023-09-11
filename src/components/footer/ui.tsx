import { ContactFooter } from './contact-footer';
import { ContentFooter } from './content-footer';

import styles from './footer.module.scss';

export const Footer = () => (
  <div className={styles.wrapper}>
    <ContentFooter />
    <ContactFooter />
  </div>
);
