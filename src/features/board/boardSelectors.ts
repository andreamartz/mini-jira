import type { RootState } from '../../app/store';
import type { Card, Column, ColumnId } from '../../types/kanban';

export const selectBoard = (state: RootState) => state.board.board;

export const selectColumnsById = (state: RootState) => state.board.columnsById;

export const selectCardsById = (state: RootState) => state.board.cardsById;

export const selectColumnsInOrder = (state: RootState): Column[] =>
  state.board.board.columnIds
    .map((columnId) => state.board.columnsById[columnId])
    .filter((column): column is Column => Boolean(column));

export const selectCardsForColumn = (
  state: RootState,
  columnId: ColumnId,
): Card[] => {
  const column = state.board.columnsById[columnId];

  if (!column) {
    return [];
  }

  return column.cardIds
    .map((cardId) => state.board.cardsById[cardId])
    .filter((card): card is Card => Boolean(card));
};
