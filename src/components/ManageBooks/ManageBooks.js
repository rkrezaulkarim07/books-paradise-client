import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`https://peaceful-retreat-22992.herokuapp.com/books`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Book Author</th>
                        <th scope="col">Book Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            books.map(book =>
                                <div>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                    <button class="btn btn-primary">Delete</button>
                                </div>
                            )
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageBooks;