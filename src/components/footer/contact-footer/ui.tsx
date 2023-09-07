import { socialMediaContacts, CONTACTS_LABEL, COPYRIGHT } from './configs';
import { ContactUs } from './contacts-us';
import { Copyright } from './copyright';

import styles from './contact-footer.module.css';

export const ContactFooter = () => (
  <div className={styles.wrapper}>
    <div className={styles.contacts}>
      <p>{CONTACTS_LABEL}</p>
      <ContactUs socialMediaContacts={socialMediaContacts} />
    </div>
    <Copyright copyrightMessage={COPYRIGHT} />
  </div>
);
