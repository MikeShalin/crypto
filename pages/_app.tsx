import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Layout } from '@/components/Layout';
import { Loader } from '@/components/Loader';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleRouteChange = () => {
            setLoading(true);
        };

        const handleRouteChangeComplete = () => {
            setLoading(false);
        };

        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, [router.events]);

    return (
        <ChakraProvider>
            <Layout>{loading ? <Loader /> : <Component {...pageProps} />}</Layout>
        </ChakraProvider>
    );
}

export default MyApp;
