import React from 'react';

function Card({ item }) {
    return (
        <div className="card-container rounded col-sm-12 col-md-6 col-lg-3 mt-2 p-4 bg-success-subtle">
            <div>
                <img src={item.img} className=" rounded card-img-top" height={300} />
                <div className="card-body">
                    <h5 className="card-title mt-2 bg-light bg-opacity-20 rounded shadow-sm">{item.title}</h5>
                    <p className="card-text mt-1 mb-3 ">{item.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Card;