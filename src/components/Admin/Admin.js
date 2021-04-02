import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import ManageBooks from '../ManageBooks/ManageBooks';
import AddBook from '../AddBook/AddBook';

const Admin = () => {
    let {path, url} = useRouteMatch();

    const sideBarStyle = {
        border: '1px solid',
        height: '1000px',
        backgroundColor: 'lightgrey'
    }
    return (
        <div class="container">
            <div className="row">
                <div className="col-md-4" style={sideBarStyle}>
                    <h1>Books Paradise</h1>
                    <br/>
                    <Link to={`${url}/manage-books`}><FontAwesomeIcon icon={faTasks}/> Manage books</Link>
                    <br/>
                    <Link to={`${url}/add-books`}><FontAwesomeIcon icon={faPlus}/> Add books</Link>
                </div>
                <div className="col-md-8">
                    <Switch>
                        <Route path={`${path}/manage-books`}>
                            <ManageBooks/>
                        </Route>
                        <Route path={`${path}/add-books`}>
                            <AddBook/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Admin;