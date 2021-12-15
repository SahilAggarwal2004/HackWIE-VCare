import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Success(props) {
    return (
        <>
            <Navbar />
            <div className='container d-flex'>
                <div className="login" style={{ marginTop: "20vh" }}>
                    <h3>{props.head}</h3>
                    <h4>{props.sub}</h4>
                </div>
            </div>
            <Footer bottom='fixed-bottom' />
        </>
    )
}
