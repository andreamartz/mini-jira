import { createSlice } from '@reduxjs/toolkit';

export type BoardState = Record<string, never>;

const initialState: BoardState = {};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
});

export const boardReducer = boardSlice.reducer;
