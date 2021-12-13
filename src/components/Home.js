import React from 'react'
import logo from "../media/logo.jpeg"

export default function Home() {

    return (
        <div className='container'>
            <div class="heading">
                <div class="text">
                    <div class="text-center">
                        <h1>VCare</h1>
                        <p>We Care We Plant </p>
                    </div>
                    <button class="btn"> <a href="login.html">Log In</a></button>
                    <button class="btn"><a href="signup.html">Sign Up</a></button>
                </div>
            </div>
            <div class="text-box">
                <h3>We help the World deal with problems like </h3>
                <br />
                <h1><span class="auto-input"></span></h1>
                <button class="btn">
                    <a href="/index2.html">Let's Save the World</a>
                </button>
            </div>
        </div>
    )
}
