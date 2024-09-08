import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import PomodoroTimer from '../PomodoroTimer'; // Import the Pomodoro Timer component

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx(styles.header)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Documents and Projects
            </Link>
          </div>
        </div>
      </header>

      {/* New Section for Pomodoro Timer */}
      <main style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Pomodoro Timer</h2>
        <PomodoroTimer /> {/* Render the Pomodoro Timer */}
      </main>
    </Layout>
  );
}
