import { type TSiteGuideColumnConfig } from './types';

import styles from './site-guide-column.module.scss';

type TSiteGuideColumnProps = {
  siteGuideColumnConfig: TSiteGuideColumnConfig;
};

export const SiteGuideColumn = ({ siteGuideColumnConfig }: TSiteGuideColumnProps) => {
  const { title } = siteGuideColumnConfig;
  const paragraphs = siteGuideColumnConfig.paragraphs.map(paragraph => (
    <a href={paragraph.link} key={paragraph.id}>
      {paragraph.name}
    </a>
  ));

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.paragraphs}>{paragraphs}</div>
    </div>
  );
};
