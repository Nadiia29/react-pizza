import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizza } from './types';

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
  'pizza/fetchPizzasStatus',

  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;

    const { data } = await axios.get<Pizza[]>(
      `https://67d0026e823da0212a8431d9.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );

    return data;
  },
);
