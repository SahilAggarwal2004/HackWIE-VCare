import React from 'react'
import About from './About'
import Carousel from './Carousel'
import Experiences from './Experiences'
import Footer from './Footer'
import Navbar from './Navbar'
import Partners from './Partners'
import Places from './Places'

export default function Home() {
    return (
        <>
            <Navbar />
            <div style={{ margin: "0", padding: "0", width: "100%" }}>
                <Carousel />
                <hr />
                <About />
                <hr />
                <Places />
            </div>
            <hr />
            <Experiences />
            <hr />
            <Partners />
            <Footer />
        </>
    )
}