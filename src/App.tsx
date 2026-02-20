import './App.css';
import { mockData } from './mock/mockBoard';

export default function App() {
  const { board, columnsById, cardsById } = mockData;
  const { columnIds } = board;

  return (
    <>
      <h1>{board.title}</h1>
      <p>Scaffold is working ✅</p>
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

                  const { title: cardTitle } = card;
                  return <li key={cardId}>Card title: {cardTitle}</li>;
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
