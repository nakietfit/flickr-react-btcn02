import React, { Component } from "react";
import './Header.css'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand">
                    flickr
                </a>

                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            id="navbardrop"
                            data-toggle="dropdown"
                        >
                            Explore
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item">
                                Recent Photos
                            </a>
                            <a className="dropdown-item">
                                Trending
                            </a>
                            <a className="dropdown-item">
                                Flickr VR
                            </a>
                            <a className="dropdown-item">
                                The Commons
                            </a>
                            <a className="dropdown-item">
                                Galleries
                            </a>
                            <a className="dropdown-item">
                                World Map
                            </a>
                            <a className="dropdown-item">
                                Camera Finder
                            </a>
                            <a className="dropdown-item">
                                The Weekly Flickr
                            </a>
                            <a className="dropdown-item">
                                Flickr Blog
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            Create
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >
                            Get Pro
                        </a>
                    </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default Header;
