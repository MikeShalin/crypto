import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import type { FC, ReactElement } from 'react';

import { Navigation } from '@/components/Navigation';

import styles from './layout.module.scss';

interface LayoutProps {
    children: ReactElement;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
    <div className={styles.container}>
        <Head>
            <title>Charts</title>
            <meta name='description' content='Charts' />
        </Head>
        <header className={styles.header}>
            <nav>
                <Navigation />
            </nav>
        </header>
        <main className={styles.main}>
            <Box paddingTop='24px' paddingBottom='4rem'>
                {children}
            </Box>
        </main>
        <footer className={styles.footer}>
            <span className={styles.logo}>
                <Image src='/github-mark.svg' alt='github Logo' width={30} height={30} />
            </span>{' '}
            <a href='https://github.com/MikeShalin/crypto' target='_blank' rel='noopener noreferrer'>
                Github
            </a>
        </footer>
    </div>
);
