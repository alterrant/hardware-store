type TContactProps = Omit<TContact, 'id'>;

export const Contact = ({ imgSrc, name, link }: TContactProps) => (
  <a href={link}>
    <img src={imgSrc} alt={name} />
  </a>
);
