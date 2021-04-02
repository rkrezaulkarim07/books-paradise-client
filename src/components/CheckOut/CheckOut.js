import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const CheckOut = () => {
    const { id } = useParams();
    const [book, setBook] = useState({})

    const history = useHistory()
    const handleOrder = () => {
        history.push(`/orders/${id}`);
    }

    useEffect(() => {
        fetch(`https://peaceful-retreat-22992.herokuapp.com/books/${id}`)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [id])

    return (
        <div class="container" style={{ marginTop: '150px' }}>
            <h1>Checkout</h1>
            <br/>
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
                <button class="btn btn-primary"onClick={handleOrder}>Checkout</button>
            </table>
        </div>
    );
};

export default CheckOut;