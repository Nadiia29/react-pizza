import { RootState } from '@/redux/store';

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
