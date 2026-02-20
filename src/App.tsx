import './App.css';
import { mockData } from './mock/mockBoard';
import { Card } from './components/Card';

export default function App() {
  const { board, columnsById, cardsById } = mockData;
  const { columnIds } = board;

  return (
    <>
      <h1>{board.title}</h1>
      <div>
        {columnIds.map((colId) => {
          const column = columnsById[colId];
          if (!column) return null;

          const { cardIds } = column;
          const { title: colTitle } = column;
          return (
            <section key={colId}>
              <h2>Column title: {colTitle}</h2>
              <ul>
                {cardIds.map((cardId) => {
                  const card = cardsById[cardId];
                  if (!card) return null;

                  return <Card key={card.id} card={card} />;
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
