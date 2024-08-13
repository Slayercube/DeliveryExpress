import React from 'react';
import Card from './Card.jsx';
import styles from './Cards.module.css'

const arr = [
    
    {
        img: 'https://www.euroscooter.es/wp-content/uploads/2020/09/med_fiddleblanca50cctocashe10-1-400x450.png',
        title: 'Mini-Van',
        description: "For large size packages, relocation and more."
    },

    {
        img: 'https://www.shutterstock.com/image-illustration/white-city-car-isolated-on-600nw-2350699241.jpg',
        title: 'car',
        description: "Faster delivery, recive in same day."
    },

    {
        img: 'https://provanhire.co.uk/wp-content/uploads/CarRentalGallery/1502765766_2017-ford-transit-connect-xlt-minivan-angular-front.png',
        title: 'Mini-Van',
        description: "For large size packages, relocation and more."
    },
    {
        img: 'https://static.vecteezy.com/system/resources/previews/034/467/958/original/covered-van-truck-cargo-van-truck-transporting-cargo-transparent-background-ai-generated-png.png',
        title: 'Truck/Lorry',
        description: "Big relocation, Restock delivery and any other."
    }
];

const Cards = () => {
    return (
        <div className= 'container-fluid text-center' id= {styles.Card}>
            <section className='one my-4 py-1 bg-tertiary'>
                <div className='text-start'>
                </div>

            </section>

            <div className="text-center my-2 mt-3">
                <h3 className='vehiclesHeader'>
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

                    <div className=' leftbox bg-danger'>s</div>
                </div>


                <div>
                    <div className=' middlebox bg-danger w-400 h-100'>s</div>

                </div>

                <div>

                    <div className=' rightbox bg-danger w-20px h-50'>s</div>
                </div>




            </div>


        </div>
    );
};

export default Cards;