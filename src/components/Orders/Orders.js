import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const { id } = useParams();
    const [book, setBook] = useState({})

    useEffect(() => {
        fetch(`https://peaceful-retreat-22992.herokuapp.com/books/${id}`)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [id])
    return (
        <div class="container" style={{textAlign: 'center', marginTop:'150px'}}>
            <h1>Order Successful</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Book Quantity</th>
                        <th scope="col">Book Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{book.name}</td>
                        <td>1</td>
                        <td>{book.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Orders;