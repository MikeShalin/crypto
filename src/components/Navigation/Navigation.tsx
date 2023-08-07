import { Box, Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './navigation.module.scss';

export const Navigation = () => {
    const router = useRouter();
    const { query } = router;
    const { id } = query;
    return (
        <Box boxShadow='base' p='6' bg='white' display='flex' alignItems='center'>
            <img src='/logo.svg' alt='' className={styles.logo} />
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link href='/'>Home</Link>
                </BreadcrumbItem>
                {id && (
                    <BreadcrumbItem>
                        <Link href={`/coin/${id}`} passHref>
                            {id}
                        </Link>
                    </BreadcrumbItem>
                )}
            </Breadcrumb>
        </Box>
    );
};
