import React, {Component} from 'react';
import AllUsersComponent from "../Users/AllUsers/AllUsersComponent";
import AllPosts from "../Posts/AllPosts/AllPosts";
import AllComments from "../Comments/AllComments";
import './App.css';
import {BrowserRouter as Router, NavLink, Route, Routes, Outlet} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <NavLink to={'/users'} activeClassName={'activeLink'}>Users</NavLink>
                    <NavLink to={'/posts'} activeClassName={'activeLink'}>Posts</NavLink>
                    <NavLink to={'/comments'} activeClassName={'activeLink'}>Comments</NavLink>
                </nav>
                    <div className={'app-route'}>
                        <Routes>
                            <Route path={'/users'} element={<AllUsersComponent/>} />
                            <Route path={'/posts'} element={<AllPosts/>} />
                            <Route path={'/comments'} element={<AllComments/>} />
                        </Routes>
                    </div>
                <Outlet />
            </Router>
        );
    }
}
export default App;