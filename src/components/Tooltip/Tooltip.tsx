import { Box } from '@chakra-ui/react';
import type { FC } from 'react';

interface TooltipProps {
    date: string;
    time: string;
    price: string;
    open: string;
}

export const Tooltip: FC<TooltipProps> = ({ date, time, price, open }) => (
    <Box bg='white' width='220px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Box p='6'>
            <Box display='flex' justifyContent='space-between' marginBottom={1}>
                <Box fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                    {date}
                </Box>
                <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                    {time}
                </Box>
            </Box>
            <Box display='flex' flexDirection='row'>
                <Box color='gray.500' fontSize='xs'>
                    price:
                </Box>
                <Box fontWeight='semibold' fontSize='xs'>
                    &nbsp;{price}
                </Box>
            </Box>
            <Box display='flex' flexDirection='row'>
                <Box color='gray.500' fontSize='xs'>
                    open:
                </Box>
                <Box fontWeight='semibold' fontSize='xs'>
                    &nbsp;{open}
                </Box>
            </Box>
        </Box>
    </Box>
);
