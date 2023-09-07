import { LogoAndAuthBtn } from './logo-and-auth-btn';
import { SiteGuide } from './site-guide';
import { siteGuideColumns } from './configs';

import styles from './content-footer.module.css';

export const ContentFooter = () => (
  <div className={styles.wrapper}>
    <LogoAndAuthBtn />
    <SiteGuide siteGuideColumns={siteGuideColumns} />
  </div>
);
