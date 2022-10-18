import React from 'react';

const Book = ({ color = 'white' }) => {
  return <img id="book" src={`src/assets/img/book-${color}.png`}></img>;
};

export default Book;
