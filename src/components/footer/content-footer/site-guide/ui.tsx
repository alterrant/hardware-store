import { SiteGuideColumn, type TSiteGuideColumnConfig } from './site-guide-column';

import styles from './site-guide.module.css';

type TSiteGuideProps = {
  siteGuideColumns: TSiteGuideColumnConfig[];
};

export const SiteGuide = ({ siteGuideColumns }: TSiteGuideProps) => {
  const guideColumns = siteGuideColumns.map(siteGuide => (
    <SiteGuideColumn key={siteGuide.id} siteGuideColumnConfig={siteGuide} />
  ));

  return <div className={styles.wrapper}>{guideColumns}</div>;
};
