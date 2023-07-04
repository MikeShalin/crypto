import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';

import { coinsList } from '../src/config';

const Home: NextPage = () => (
    <Box>
        <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='6xl' fontWeight='extrabold' textAlign='center'>
            Choose a coin
        </Text>
        <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
            {coinsList.map((coin) => (
                <Link href={`/coin/${coin}`} key={coin}>
                    <GridItem rowSpan={2} colSpan={1} cursor='pointer'>
                        <Box
                            color='white'
                            borderRadius={8}
                            boxShadow='base'
                            p='6'
                            bg='#00A3C4'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            opacity={0.7}
                        >
                            {coin}
                        </Box>
                    </GridItem>
                </Link>
            ))}
        </Grid>
    </Box>
);

export default Home;
