import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-retreat-22992.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    books.map(book => <Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;