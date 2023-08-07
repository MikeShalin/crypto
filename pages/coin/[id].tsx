// eslint-disable-next-line prettier/prettier
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { Loader } from '@/components/Loader';
import postAPI from '@/services/postAPI';
import type { Coins } from '@/types';

const DynamicComponent = dynamic<{ coins: Coins[] }>(() => import('@/components/Charts').then((module) => module.Charts), {
    loading: () => <Loader />,
    ssr: false,
});

export async function getServerSideProps(context: any) {
    const { id } = context.params;
    const coins = await postAPI.getCoinData(id);
    return { props: { coins: coins.Data } };
}

const CoinDetails: NextPage<{ coins: Coins[] }> = ({ coins }) => {
    return <DynamicComponent coins={coins} />;
};

export default CoinDetails;
