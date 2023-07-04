// eslint-disable-next-line prettier/prettier
import type { SerializedError } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import postAPI from '@/services/postAPI';
import type { Coins, RequestStatus } from '@/types';

export type CoinState = {
    createRequestStatus: RequestStatus;
    data: Coins[];
    error?: SerializedError;
};

const initialState: CoinState = {
    createRequestStatus: 'idle',
    data: [],
    error: undefined,
};

const getCoinDataAsync = createAsyncThunk('coins/getData', postAPI.getCoinData);

export const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCoinDataAsync.pending, (state) => {
                // eslint-disable-next-line no-param-reassign
                state.createRequestStatus = 'pending';
            })
            .addCase(getCoinDataAsync.fulfilled, (state, action) => {
                // eslint-disable-next-line no-param-reassign
                state.createRequestStatus = 'fulfilled';
                // eslint-disable-next-line no-param-reassign
                state.data = action.payload.Data;
            })
            .addCase(getCoinDataAsync.rejected, (state, action) => {
                // eslint-disable-next-line no-param-reassign
                state.createRequestStatus = 'rejected';
                // eslint-disable-next-line no-param-reassign
                state.error = action.error;
            });
    },
});

export { getCoinDataAsync };

export default coinsSlice.reducer;
