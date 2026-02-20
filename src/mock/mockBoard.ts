// Normalized mock board data to render in UI

import type { Board, BoardId, Column, ColumnId, Card, CardId } from '../types/kanban';

const boardId1 = 'board-1' as BoardId;
const columnId1 = 'column-1' as ColumnId;
const columnId2 = 'column-2' as ColumnId;
const columnId3 = 'column-3' as ColumnId;
const columnId4 = 'column-4' as ColumnId;
const cardId1 = 'card-1' as CardId;
const cardId2 = 'card-2' as CardId;
const cardId3 = 'card-3' as CardId;
const cardId4 = 'card-4' as CardId;
const cardId5 = 'card-5' as CardId;
const cardId6 = 'card-6' as CardId;

const cardsById: Record<CardId, Card> = {
  [cardId1]: { id: cardId1, title: 'Card 1 Title' },
  [cardId2]: { id: cardId2, title: 'Card 2 Title' },
  [cardId3]: { id: cardId3, title: 'Card 3 Title' },
  [cardId4]: { id: cardId4, title: 'Card 4 Title' },
  [cardId5]: { id: cardId5, title: 'Card 5 Title' },
  [cardId6]: { id: cardId6, title: 'Card 6 Title' },
};

const columnsById: Record<ColumnId, Column> = {
  [columnId1]: {
    id: columnId1,
    title: 'Column 1 Title',
    cardIds: [cardId1, cardId2],
  },
  [columnId2]: {
    id: columnId2,
    title: 'Column 2 Title',
    cardIds: [cardId3],
  },
  [columnId3]: {
    id: columnId3,
    title: 'Column 3 Title',
    cardIds: [cardId4, cardId5],
  },
  [columnId4]: {
    id: columnId4,
    title: 'Column 4 Title',
    cardIds: [cardId6],
  },
};

const board: Board = {
  id: boardId1,
  title: 'Board 1 Title',
  columnIds: [columnId1, columnId2, columnId3, columnId4],
};

export const mockData = {
  board,
  columnsById,
  cardsById,
};
