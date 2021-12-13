import React from 'react'
import { Link } from "react-router-dom";
import logo from "../media/logo.jpeg"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent sticky-top">
            <div className="container-fluid">
                <img src={logo} alt="" style={{ width: "3.5rem", marginRight: "2vw" }} />
                <a className="navbar-brand text-center" href="/HackWIE-VCare">
                    <h4>VCare</h4>
                    <h6 className="my-0">We Care We Plant</h6>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active navbtn" aria-current="page" href="/HackWIE-VCare">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active navbtn" to="/threat">Threats</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active navbtn" to="/solution">Solutions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active navbtn" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active navbtn" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
