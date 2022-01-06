import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Solution(props) {

    useEffect(() => {
        window.scrollTo(0, 0) // window.scrollTo(0, 0) scrolls the window to the top
    }, [])

    return (
        <>
            <Navbar />
            <div className='container' style={{ marginTop: "5vh" }}>
                <h2 className='text-center'>{props.head}</h2>
                <div className="row">
                    {props.items.map(element => {
                        return (
                            <div key={element.props.title} className={`${props.col} d-flex justify-content-center`}>
                                {element}
                            </div>
                        )
                    })}
                </div>
                {props.link ? <h3 className='text-center'><a href="https://www.google.com/search?q=%23savetheplanet" target="_blank" rel="noreferrer">#savetheplanet</a></h3> : <></>}
            </div >
            <Footer />
        </>
    )
}
