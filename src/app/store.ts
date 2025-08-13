import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '@/api/moviesApi.ts';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
