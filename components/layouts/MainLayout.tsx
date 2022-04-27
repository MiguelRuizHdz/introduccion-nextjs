import Head from 'next/head';
import styles from './MainLayout.module.css';

import { Navbar } from '../Navbar'
import { FC, ReactNode } from 'react';

interface Props{
  children?: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Contact - Miguel</title>
            <meta name="description" content="Contact Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>
    
            { children }
    
          </main>
    
    
        </div>
      )
}
