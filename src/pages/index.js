import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/icons/css/animation.css'
import '../../static/icons/css/elysium-20-icons-embedded.css'
import '../../static/icons/css/elysium-20-icons-codes.css'
import '../../static/icons/css/elysium-20-icons-ie7-codes.css'
import '../../static/icons/css/elysium-20-icons.css'
import '../../static/icons/css/elysium-20-icons-ie7.css'
import styles from './index.module.css';
import SearchSection from '../components/SeaarchSection/SearchSection'
import CardSection from '../components/CardSection/CardSection'
import KnowledgeSection from '../components/KnowledgeSection/CardSection'

// function HomepageHeader() {
//     const {siteConfig} = useDocusaurusContext();
//     return (
//         <header className={clsx('hero hero--primary', styles.heroBanner)}>
//             <div className="container">
//                 <h1 className="hero__title">{siteConfig.title}</h1>
//                 <p className="hero__subtitle">{siteConfig.tagline}</p>
//                 <div className={styles.buttons}>
//                     <Link
//                         className="button button--secondary button--lg"
//                         to="/docs/intro">
//                         Get Started️
//                     </Link>
//                 </div>
//             </div>
//         </header>
//     );
// }
export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className={'my-body'}>
            <Layout
                title={``}
                description="Everything you need to know to get started developing, deploying, and interacting with smart contracts on Elysium."
            >
                {/*<HomepageHeader/>*/}
                <div className={"header-layout"}>
                    <Header />
                    <SearchSection />
                    <CardSection/>
                    <KnowledgeSection/>
                    {/*<main>*/}
                    {/*    <HomepageFeatures/>*/}
                    {/*</main>*/}
                </div>
                <Footer/>
            </Layout>
        </div>

    );
}
