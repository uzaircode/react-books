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

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBook(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBook(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
