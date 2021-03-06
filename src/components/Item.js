import React from 'react'

export default function Item(props) {
    return (
        <div className="card m-3" style={{ border: "1.5px solid black", backgroundColor: "rgba(255, 235, 205, 0.5)" }}>
            <img src={props.url} className="card-img-top" alt="" style={{ height: "30vh", borderBottom: "1.5px solid black" }} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <hr />
                {props.description ? (<p className="card-text" style={{ fontWeight: "500" }}>{props.description}</p>) :
                    props.list.map((element, index) => {
                        return <li key={index} style={{ fontWeight: "500" }}>{element}</li>
                    })}
            </div>
        </div>
    )
}
