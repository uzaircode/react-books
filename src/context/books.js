import { createContext, useState } from 'react';

const BooksContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(0);

  const valuetoShare = {
    count: count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };

  return (
    <BooksContext.Provider value={valuetoShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
