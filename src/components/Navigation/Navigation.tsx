'use client';

import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './navigation.module.scss';

export const Navigation = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Box boxShadow='base' p='6' bg='white' display='flex' alignItems='center'>
            <img src='/logo.svg' alt='' className={styles.logo} />
            {id && (
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link href='/'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={String(id)}>{id}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            )}
        </Box>
    );
};
