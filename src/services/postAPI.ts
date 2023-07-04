import axios from 'axios';

import { API_KEY, apiCoinData } from '../config';

const getCoinData = async (coin: string) => {
    const res = await axios.get(apiCoinData, {
        params: {
            fsym: coin,
            tsym: 'USD',
            aggregate: 5,
            api_key: API_KEY,
        },
    });
    return res.data.Data;
};

const postAPI = { getCoinData };

export default postAPI;
