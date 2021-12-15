import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Success() {
    return (
        <>
            <Navbar />
            <div className='container d-flex'>
                <div className="login" style={{ marginTop: "20vh" }}>
                    <h3>Thank you your application has been successfully submitted!</h3>
                    <h4>We will get in touch with you over provided mail id.</h4>
                </div>
            </div>
            <Footer bottom='fixed-bottom' />
        </>
    )
}
