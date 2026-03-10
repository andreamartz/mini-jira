import './App.css';
import { Column } from './components/Column';
import { useAppSelector } from './app/hooks';
import { selectBoard, selectColumnsInOrder } from './features/board/boardSelectors';

export default function App() {
  const board = useAppSelector(selectBoard);
  const columns = useAppSelector(selectColumnsInOrder);

  return (
    <>
      <h1>{board.title}</h1>
      <div>
        {columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </div>
    </>
  );
}
