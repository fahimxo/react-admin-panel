import React from 'react'
import {Link } from 'react-router-dom'

export const TopNavbar = () => {
    //get data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    
    const deleteToken = ()=>{
        localStorage.removeItem('user')
        window.location.reload()
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
            <div className="container-fluid">
                <div className="navbar-wrapper">
                    <div className="navbar-toggle">
                        <button type="button" className="navbar-toggler">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <div className="navbar-brand" >
                        {user ? `${ user.firstName } ${user.lastName } خوش آمدید` : null}
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                    <form>
                        <div className="input-group no-border">
                            <input type="text" value="" className="form-control" placeholder="جستجو" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <i className="nc-icon nc-zoom-split"></i>
                                </div>
                            </div>
                        </div>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link btn-magnify" to="">
                                <i className="nc-icon nc-layout-11"></i>
                                <p>
                                    <span className="d-lg-none d-md-block">Stats</span>
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item btn-rotate dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="nc-icon nc-bell-55"></i>
                                <p>
                                    <span className="d-lg-none d-md-block">Some Actions</span>
                                </p>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="#">Action</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn-rotate" to="/login" onClick={deleteToken}>
                                <i className="nc-icon nc-user-run "  ></i>
                                خروج
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
