import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
  id: string;
  name: string;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: ['users'],
    }),
    addUser: builder.mutation<User, Partial<User>>({
      query: (todo) => ({
        url: '/users',
        method: 'POST',
        body: todo,
      }),
      // Ekleme sonrası cache'i resetleyip, users'ın tekrar çekilmesini sağlıyoruz
      invalidatesTags: ['users'],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = api;
