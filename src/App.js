import './index.css';
import uuid from 'react-uuid';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBook] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, { id: uuid(), title: title }];

    setBook(updatedBooks);
    console.log(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
