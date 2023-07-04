import { Box, Skeleton, Stack } from '@chakra-ui/react';
import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
// eslint-disable-next-line prettier/prettier
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import { useEffect } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { Tooltip as ChartTooltip } from '@/components/Tooltip';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getCoinDataAsync } from '@/redux/slices/coinsSlice';

import styles from './coin.module.css';

const CoinDetails: NextPage = () => {
    const { query, isReady } = useRouter();
    const { id } = query;
    const dispatch = useAppDispatch();
    const { coins } = useAppSelector((state) => state);

    useEffect(() => {
        if (typeof id === 'string') {
            dispatch(getCoinDataAsync(id)).unwrap().then();
        }
    }, [isReady]);

    if (coins.createRequestStatus === 'pending') {
        return (
            <Box paddingTop='4rem'>
                <Stack>
                    <Skeleton width={1200} height={115} />
                    <Skeleton width={1200} height={115} />
                    <Skeleton width={1200} height={115} />
                    <Skeleton width={1200} height={115} />
                </Stack>
            </Box>
        );
    }
    return (
        <main className={styles.main}>
            <ResponsiveContainer width={1200} height={500}>
                <LineChart
                    data={coins.data?.map(({ close, time, open }) => ({
                        price: close,
                        date: format(fromUnixTime(time), 'MM/dd/yyyy'),
                        time: format(fromUnixTime(time), 'p'),
                        open,
                    }))}
                >
                    <XAxis dataKey='time' minTickGap={90} padding={{ right: 20 }} />
                    <YAxis width={90} domain={['dataMin', 'dataMax']} orientation='right' padding={{ bottom: 50 }} />
                    <CartesianGrid vertical={false} />
                    <Tooltip
                        // eslint-disable-next-line react/no-unstable-nested-components
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const {
                                    payload: { date, time, ...props },
                                } = payload[0];
                                const price = numeral(props.price).format('0,0.0000').replace(/0*$/, '');
                                const open = numeral(props.open).format('0,0.00');
                                return <ChartTooltip date={date} time={time} price={`$ ${price}`} open={`$ ${open}`} />;
                            }

                            return null;
                        }}
                    />
                    <Line type='monotone' dataKey='price' stroke='#8884d8' fillOpacity={1} fill='url(#colorUv)' dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </main>
    );
};

export default CoinDetails;
