import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookDetails = () => {
  const [books, setBooks] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then(response => {
        setBooks(response.data.books)
      })
      .catch(err => {
        setError(err)
      })
  }, [])

  if (books.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <h1>{book.title}</h1>
          <img src={book.imageLinks.thumbnail} alt={book.title} />
          <p>{book.description}</p>
          <p>Authors: {book.authors.join(', ')}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default BookDetails;
