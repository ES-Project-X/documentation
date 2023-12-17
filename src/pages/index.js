import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className="row">
                    <div className={clsx('col col--4')} style={{marginBottom: "2rem"}}>
                        <Link
                            className="button button--secondary button--lg margin-horiz--md"
                            to="/docs/category/user-stories">
                            Documentation
                        </Link>
                    </div>
                    <div className={clsx('col col--4')} style={{marginBottom: "2rem"}}>
                        <Link
                            className="button button--secondary button--lg margin-horiz--md"
                            href="https://web.project-x.pt">
                            Web App / PWA
                        </Link>
                    </div>
                    <div className={clsx('col col--4')} style={{marginBottom: "2rem"}}>
                        <Link
                            className="button button--secondary button--lg margin-horiz--md"
                            href="https://mega.nz/file/gPdB3T7K#GxBb6aAbAsNU_cKNILqXBND_S6Ztos2Arfs02c31srA">
                            Mobile App
                        </Link>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default function Home() {
    // const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title="Home"
            description="BiX - Community collaboration platform for bicycle users">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
