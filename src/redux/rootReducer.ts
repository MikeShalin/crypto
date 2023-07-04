import { combineReducers } from '@reduxjs/toolkit';

import CoinsReducer from './slices/coinsSlice';

const rootReducer = combineReducers({
    coins: CoinsReducer,
});

export default rootReducer;
