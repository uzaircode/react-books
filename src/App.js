import './index.css';
import uuid from 'react-uuid';
import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBook] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, { id: uuid(), title: title }];

    setBook(updatedBooks);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
