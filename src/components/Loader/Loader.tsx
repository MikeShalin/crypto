import { Skeleton, Stack } from '@chakra-ui/react';

export const Loader = () => (
    <Stack>
        <Skeleton width={1200} height={115} />
        <Skeleton width={1200} height={115} />
        <Skeleton width={1200} height={115} />
        <Skeleton width={1200} height={115} />
    </Stack>
);
