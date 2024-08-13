import React from 'react';

function Card({ item }) {
    return (
        <div className="card-container rounded col-sm-12 col-md-6 col-lg-3 mt-1 p-4 ">
            <div>
                <div className='row' >
                    <div className='cardsDescription'>
                        <img src={item.img} className=" rounded card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title mt-2 bg-light-subtle bg-opacity-20 rounded shadow-sm">{item.title}</h5>
                            <p className="card-text mt-1 mb-3 ">{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;