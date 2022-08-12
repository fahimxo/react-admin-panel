import React from 'react'
import {Routes, Route } from 'react-router-dom'
import '../../../assets/css/paper-dashboard.css';
import '../../../assets/css/demo.css';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import  MainDashboard  from '../../Product-with-firebase/container';
import  Container  from '../../product-with-api/container';
import PageNotFound  from '../../page-not-found/pageNotFound';
import { ProductDetails } from '../../product-with-api/ProductDetails';
import { Login } from '../../auth/Login';
import CategoryList from '../../category/CategoryList';
import Userpost from '../../posts/UserPost';
import Crudaxios from '../../../crud/CrudAxios';



export const AdminLayout = () => {
 
  
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="main-panel">
          <TopNavbar />
          <div className="content">
            <Routes>
              <Route path="/"  element={<MainDashboard/>} />
              <Route path="/products"  element={<Container/>} />
              <Route path="/products/:id"  element={<ProductDetails/>} />
              <Route path="/category-list"  element={<CategoryList/>} />
              <Route path="/userpost"  element={<Userpost/>} />
              <Route path="/crudaxios"  element={<Crudaxios/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/*" element={<PageNotFound/>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}