import React from 'react';
import Card from './Card.jsx';

const arr = [
    {
        img: "https://plus.unsplash.com/premium_photo-1681488124242-c58c37c79af6?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: 'Bicycle',
        description: "Dispatch for smaller packages & Documents."
    },
    {
        img: 'https://images.unsplash.com/photo-1595267433529-8e29dd995ac3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Motocycle',
        description: "Medium packages delivery, reliable and safe."
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1682141929497-97402f35d45e?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: 'Mini-Van',
        description: "For large size packages, relocation and more."
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Truck/Lorry',
        description: "Big relocation, Restock delivery and any other."
    }
];

const Cards = () => {
    return (
        <div className='container-fluid text-center'>
            <section className='one my-4 py-1 bg-tertiary'>
                <div className='text-start'>
                </div>

            </section>

            <div className="text-center my-2 mt-3">
                <h3>
                    Our Vehicles
                </h3>
            </div>

            <section className='two row'>
                {arr.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </section>
            <div className="text-center mb-3 mt-4">
                <h4>
                    Pillars
                </h4>
            </div>


            <div className=" box-text d-flex justify-content-evenly text-bold">

                <div>
                    <p>Security</p>
                </div>


                <div>
                    Speed
                </div>

                <div>
                    Reliability
                </div>

            </div>

            <div className='boxes d-flex text-center justify-content-evenly'>
                <div>

                    <div className='bg-danger w-20px h-50'>s</div>
                </div>


                <div>
                    <div className='bg-danger w-400 h-100'>s</div>

                </div>

                <div>

                    <div className='bg-danger w-20px h-50'>s</div>
                </div>




            </div>


        </div>
    );
};

export default Cards;