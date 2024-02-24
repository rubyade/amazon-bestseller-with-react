import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { books } from './books';
import Bestseller from './Bestseller';

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return <Bestseller {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
