import { Contact } from './contact';

import styles from './contact-us.module.scss';

type TContactUsProps = {
  socialMediaContacts: TContact[];
};

export const ContactUs = ({ socialMediaContacts }: TContactUsProps) => {
  const contacts = socialMediaContacts.map(contact => (
    <Contact imgSrc={contact.imgSrc} name={contact.name} link={contact.link} key={contact.id} />
  ));

  return <div className={styles.wrapper}>{contacts}</div>;
};
