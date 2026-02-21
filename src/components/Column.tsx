import type { Card as CardType, CardId, Column as ColumnType } from '../types/kanban';
import { Card } from './Card';

interface ColumnProps {
  column: ColumnType;
  cardsById: Record<CardId, CardType>;
}

export const Column = ({ column, cardsById }: ColumnProps) => {
  const { title, cardIds } = column;

  return (
    <section>
      <h2>Column title: {title}</h2>
      <ul>
        {cardIds.map((id) => {
          const card = cardsById[id];
          if (!card) return null;

          return <Card key={card.id} card={card} />;
        })}
      </ul>
    </section>
  );
};
