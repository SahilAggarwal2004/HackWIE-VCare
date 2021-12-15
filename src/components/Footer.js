import React from 'react'

export default function Footer(props) {
    return (
        <>
            <footer className={`text-center py-1 mt-4 ${props.bottom}`} style={{ backgroundColor: "rgba(255, 235, 205, 0.5)", borderTop: "1.5px solid black"}}>
                <p className='m-0'>
                    <a href="https://facebook.com/#Nature" target="_blank" rel="noreferrer"><i className="fa fa-footer fa-facebook" style={{ backgroundColor: "#3B5998" }} /></a>
                    <a href="https://twitter.com/#Nature" target="_blank" rel="noreferrer"><i className="fa fa-footer fa-twitter" style={{ backgroundColor: "#55ACEE" }} /></a>
                    <a href="https://pinterest.com/#Nature" target="_blank" rel="noreferrer"><i className="fa fa-footer fa-pinterest" style={{ backgroundColor: "#bb0000" }} /></a>
                    <a href="https://instagram.com/#Nature" target="_blank" rel="noreferrer"><i className="fa fa-footer fa-instagram" style={{ backgroundColor: "#125688" }} /></a>
                </p>
                <p className='m-0'>
                    &copy; Copyright <b>VCare</b> | All rights reserved
                </p>
            </footer>
        </>
    )
}
