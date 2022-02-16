import {NavLink, Outlet} from "react-router-dom";
import React from "react";
import './../index.css'

export default function Layout(){
    return(
        <section className={'layoutBody'}>
            <aside className={'layoutMenu'}>
                <NavLink to={'posts'}>Posts</NavLink>
                <NavLink to={'users'}>Users</NavLink>
                <NavLink to={'albums'}>Albums</NavLink>
            </aside>
            <div className={'layoutContent'}>
                <Outlet/>
            </div>
        </section>
    )
}