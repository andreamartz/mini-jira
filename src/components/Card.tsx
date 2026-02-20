import type { Card as CardType } from '../types/kanban';

interface CardProps {
  card: CardType;
}

export const Card = ({ card }: CardProps) => {
  return <li>Card title: {card.title}</li>;
};
