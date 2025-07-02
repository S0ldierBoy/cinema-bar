import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev/v1.4/',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', 'NTT18EY-JWYMFE5-K65YMCP-5ND3NRT');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<any, { movName: string }>({
      query: ({ movName }) => ({
        url: 'movie',
        params: { search: movName },
      }),
    }),
  }),
});

export const { useSearchMoviesQuery } = moviesApi;