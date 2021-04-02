import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container" style={{backgroundColor: 'lightblue'}}>
            <nav class="navbar navbar-expand-lg navbar-light ms-5">
                <div class="container-fluid">
                    <a class="navbar-brand logo me-3" style={{color: 'black'}} id="Nav-logo" href="#">Books Paradise</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav fw-bold me-5">
                            <li class="nav-item p-2">
                                <Link to="/" style={{color: 'black'}}>Home</Link>
                            </li>
                            <li class="nav-item p-2">
                                <Link to="/orders" style={{color: 'black'}}>Orders</Link>
                            </li>
                            <li class="nav-item p-2">
                                <Link to="/admin" style={{color: 'black'}}>Admin</Link>
                            </li>
                            <li class="nav-item p-2">
                                <Link to="/deals" style={{color: 'black'}}>Deals</Link>
                            </li>
                            <Link to="/login"style={{ height: '40px', color: 'black'  }} class="btn btn-danger">Login</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;