import { Box, Skeleton, Stack } from '@chakra-ui/react';
// eslint-disable-next-line prettier/prettier
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import postAPI from '@/services/postAPI';
import type { Coins } from '@/types';

import styles from './coin.module.css';

const DynamicComponent = dynamic<{ coins: Coins[] }>(() => import('@/components/Charts').then((module) => module.Charts), {
    loading: () => (
        <Box paddingTop='4rem'>
            <Stack>
                <Skeleton width={1200} height={115} />
                <Skeleton width={1200} height={115} />
                <Skeleton width={1200} height={115} />
                <Skeleton width={1200} height={115} />
            </Stack>
        </Box>
    ),
});

const DynamicLoader = dynamic(() => import('./Loader'), { ssr: false });

export async function getServerSideProps(context: any) {
    const { id } = context.params;
    const coins = await postAPI.getCoinData(id);
    return { props: { coins: coins.Data } };
}

const CoinDetails: NextPage<{ coins: Coins[] }> = ({ coins }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, [coins]);
    if (!coins) {
        return <DynamicLoader />; // todo если я перехожу по роуту - next js ждет загрузку данных и тормозит - это заметно на маленькой скорости интернета
    }
    if (router.isFallback || loading) {
        return <DynamicLoader />;
    }

    return (
        <main className={styles.main}>
            <DynamicComponent coins={coins} />
        </main>
    );
};

export default CoinDetails;
