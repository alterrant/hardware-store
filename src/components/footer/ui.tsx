import { ContactFooter } from './contact-footer';
import { ContentFooter } from './content-footer';

import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.wrapper}>
    <ContentFooter />
    <ContactFooter />
  </footer>
);
