import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Layout from "./pages/Layout";
import About from "./pages/About";
import Albums from "./pages/Albums";
import Posts from "./pages/Posts";
import UserDetails from "./Components/Users/UserDetails/UserDetails";
import MyAccount from "./pages/My-account";
import AllUsersComponent from "./Components/Users/AllUsers/AllUsersComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function  App (){
        return (
            <main>
                <nav>
                    <NavLink index to={'/'}>Home</NavLink>
                    <NavLink to={'/layout'}>Layout</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/my-account'}>My account</NavLink>
                </nav>
                    <section className={'app-content'}>
                        <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/layout'} element={<Layout/>}>
                                <Route path={'users'} element={<AllUsersComponent/>}/>
                                <Route path={'albums'} element={<Albums/>}/>
                                <Route path={'posts'} element={<Posts/>}/>
                                <Route path={'users/:id'} element={<UserDetails/>}/>
                            </Route>
                            <Route path={'/about'} element={<About/>}/>
                            <Route path={'/my-account'} element={<MyAccount/>}/>
                        </Routes>
                        <Outlet/>
                    </section>
            </main>
        );
    }