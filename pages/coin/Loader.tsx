import { Box, Skeleton, Stack } from '@chakra-ui/react';

const Loader = () => (
    <Box paddingTop='4rem'>
        <Stack>
            <Skeleton width={1200} height={115} />
            <Skeleton width={1200} height={115} />
            <Skeleton width={1200} height={115} />
            <Skeleton width={1200} height={115} />
        </Stack>
    </Box>
);

export default Loader;
