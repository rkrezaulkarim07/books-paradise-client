import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import { createContext, useState } from 'react';
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";
import ManageBooks from "./components/ManageBooks/ManageBooks";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <CheckOut />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <Route path="/manage">
            <ManageBooks />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
