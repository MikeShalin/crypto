import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
import numeral from 'numeral';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import { Tooltip as ChartTooltip } from '@/components/Tooltip';
import type { Coins } from '@/types';

export const Charts = ({ coins }: { coins: Coins[] }) => (
    <LineChart
        width={1200}
        height={500}
        data={coins?.map(({ close, time, open }) => ({
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
);
