// Domain model type definitions for Mini Jira Kanban board

type Brand<K, T> = K & { __brand: T };

export type ColumnId = Brand<string, 'ColumnId'>;
export type CardId = Brand<string, 'CardId'>;
export type BoardId = Brand<string, 'BoardId'>;

export interface Card {
  id: CardId;
  title: string;
  description?: string;
}

export interface Column {
  id: ColumnId;
  title: string;
  cardIds: CardId[];
}

export interface Board {
  id: BoardId;
  title: string;
  columnIds: ColumnId[];
}
