import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Navigation from './component/Home/Navigation';
// import Register from './component/Home/Register';
// import Login from './component/Home/Login';
const App = () => {

    return (
        <div className='App'>
            <Router>
                <Navigation></Navigation>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    {/* <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/reg">
                        <Register />
                    </Route> */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;