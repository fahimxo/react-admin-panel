import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const user= JSON.parse(localStorage.getItem('user'))

  return (
    <div className="sidebar" data-color="white" data-active-color="danger">
      <div className="logo">
        <NavLink className="simple-text logo-normal" to="/">
          <h2 className="text-center mt-3 p-2">DASHBOARD</h2>
        </NavLink>
        <h6 className=" text-center py-3">دسترسی : {user.role}</h6>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              className="simple-text logo-normal"
              to="/"
            >
              <i className="nc-icon nc-bank"></i>
              مدیریت محصولات با firebase 
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName=""
              className="simple-text logo-normal"
              to="/products"
            >
              <i className="nc-icon nc-bag-16"></i>
              مدیریت محصولات با fake api
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="simple-text logo-normal"
              to="/category-list"
            >
              <i className="nc-icon nc-bullet-list-67"></i>
              گروه بندی محصولات
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="simple-text logo-normal"
              to="/userpost"
            >
              <i className="nc-icon nc-paper"></i>
             پست های کاربران
            </NavLink>
          </li>

          <li>
            <NavLink
              activeClassName="active"
              className="simple-text logo-normal"
              to="/crudaxios"
            >
              <i className="nc-icon nc-diamond"></i>
             Crud with axios
            </NavLink>
          </li>
          
          
        </ul>
      </div>
    </div>
  );
};
