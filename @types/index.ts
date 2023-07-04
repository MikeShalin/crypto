export type RequestStatus = 'idle' | 'pending' | 'rejected' | 'fulfilled';
export type Coins = {
    close: number;
    conversionSymbol: string;
    conversionType: string;
    high: number;
    low: number;
    open: number;
    time: number;
    volumefrom: number;
    volumeto: number;
};
