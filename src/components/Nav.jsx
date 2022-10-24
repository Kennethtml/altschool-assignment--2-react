import React from "react";
import { NavLink,Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navigation">
        <h2>UserDb</h2>
        <div className="navigation-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to={"/about"}> About</NavLink>

          <NavLink to={"/users"}>Users</NavLink>
        </div>
      </nav>
      <Outlet/>
    </>

    // <>
    //   <ul>
    //     <NavLink to="home" className="nav">
    //       Home
    //     </NavLink>
    //     <NavLink to="/">About</NavLink>
    //     <NavLink to="users">users</NavLink>
    //     <NavLink to="signIn">signIn</NavLink>
    //   </ul>
    //   <Outlet />
    // </>
  );
}

export default Nav;
