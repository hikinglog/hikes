import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Hike Log
        </Heading>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/hikes">
            Explore Our Hikes
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Explore hiking routes, challenges, and adventures with 702 Hikes."
    >
      <HomepageHeader />
    </Layout>
  );
}