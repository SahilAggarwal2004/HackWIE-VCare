import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="container" style={{marginTop:"20vh"}}>
            <h2>We help the World deal with problems like </h2>
            <h1 style={{color:'green'}}><span className="auto-input"></span></h1>
            <button className="button">
                <Link to="/solution">Let's Save the World &#10148;</Link>
            </button>
        </div>
    )
}
