import { createSlice } from '@reduxjs/toolkit';
import { mockData } from '../../mock/mockBoard';
import type { Board, Column, Card, ColumnId, CardId } from '../../types/kanban';

export type BoardState = {
  board: Board;
  columnsById: Record<ColumnId, Column>;
  cardsById: Record<CardId, Card>;
};

const initialState: BoardState = mockData;

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
});

export const boardReducer = boardSlice.reducer;
