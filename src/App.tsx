import './App.css';
import { mockData } from './mock/mockBoard';
import { Column } from './components/Column';

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

          return <Column key={colId} column={column} cardsById={cardsById} />;
        })}
      </div>
    </>
  );
}
