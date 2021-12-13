import React from 'react'
import { Link } from "react-router-dom";
import logo from "../media/logo.jpeg"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent sticky-top">
            <div className="container-fluid">
                <img src={logo} alt="" style={{ width: "3.5rem", marginRight: "1vw" }} />
                <Link className="navbar-brand text-center" to="/">
                    <h4>VCare</h4>
                    <h6 className="my-0">We Care We Plant</h6>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="#">Link</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit"><strong>Search</strong></button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
