import React from 'react';

function Card({ item }) {
    return (
        <div className="card col-md-3">
            <img src={item.img} className=" rounded card-img-top" height={300} />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
            </div>
        </div>
    )
}

export default Card;