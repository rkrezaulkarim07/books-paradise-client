import React from 'react';
import { useHistory } from 'react-router';

const Book = ({ book }) => {
    const {_id} = book;
    const history = useHistory()
    const handleCheckOut = (id) => {
        history.push(`/checkout/${id}`);
    }
    return (
        <div class="col">
            <div class="card h-100">
                <img src={book.imageURL} style={{ height: '300px' }} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h3 class="card-title">{book.name}</h3>
                    <p class="card-text">{book.author}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <h3>{book.price}</h3>
                    <button class="btn btn-primary" onClick={() => handleCheckOut(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;