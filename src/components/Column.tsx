import type { Column as ColumnType } from '../types/kanban';
import { useAppSelector } from '../app/hooks';
import { selectCardsForColumn } from '../features/board/boardSelectors';
import { Card } from './Card';

interface ColumnProps {
  column: ColumnType;
}

export const Column = ({ column }: ColumnProps) => {
  const { title } = column;
  const cards = useAppSelector((state) => selectCardsForColumn(state, column.id));

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
};
