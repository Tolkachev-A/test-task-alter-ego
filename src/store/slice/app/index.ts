import { slice } from './appSlice';

export const appReducer = slice.reducer;
export const { setLoading, setInitializeApp, setError } = slice.actions;
