import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev/v1.4/',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', import.meta.env.VITE_KINOPOISK_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<any, { query: string }>({
      query: ({ query }) => ({
        url: 'movie/search',
        params: { page: 1, limit: 10, query: query },
      }),
    }),
  }),
});

export const { useSearchMoviesQuery, useLazySearchMoviesQuery } = moviesApi;
