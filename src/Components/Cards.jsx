import React from 'react';
import styles from './Cards.module.css'


//     {
//         img: 'https://static.vecteezy.com/system/resources/previews/034/467/958/original/covered-van-truck-cargo-van-truck-transporting-cargo-transparent-background-ai-generated-png.png',
//         title: 'Truck/Lorry',
//         description: "Big relocation, Restock delivery and any other."
//     }
// ];

const Cards = () => {
    return (


        <section id={styles.Card}>

            {/* Container */}
            <div className=" mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                {/* Title */}
                <h2 className="text-center text-3xl font-bold md:text-3xl mb-4">
                    Our Vehicles
                </h2>
                


                {/* Content */}
                <div className="mx-auto grid justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:justify-items-stretch">



                    {/* Motobike*/}
                    <div className=" motobike flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
                        <img
                            src="https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-pearl-precious-white-1674535479295.png?q=80"
                            alt=""
                            className="card-img-top mb-5 inline-block h-auto w-full object-cover"
                        />
                        <p className="font-bold card-title">Motobike</p>
                        <p className="text-sm text-gray-900 card-text">Delivers smaller packages like Documents.</p>
                    </div>



                    {/* Car */}
                    <div className=" car flex max-w-sm flex-col items-center gap-2 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
                        <img
                            src="https://qwestore.com/png_images_min/10/BMW-Cars-PNG-bBMWb-PNG-image-free-download-9628.png"
                            alt=""
                            className=" card-img-top mb-4 inline-block h-auto w-full object-cover"
                        />
                        <p className="font-bold card-title mt-2">Car</p>
                        <p className=" mt-3 text-sm text-gray-900 card-text">Express delivery, receive in same day</p>
                    </div>



                    {/* Mini-Van */}
                    <div className=" mini-van flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
                        <img
                            src="https://provanhire.co.uk/wp-content/uploads/CarRentalGallery/1502765766_2017-ford-transit-connect-xlt-minivan-angular-front.png"
                            alt=""
                            className=" card-img-top mb-4 inline-block h-auto w-full object-cover"
                        />
                        <p className="font-bold card-title">Mini-Van</p>
                        <p className="text-sm text-gray-900 card-text">Delivery for medium pacels and smaller relocation.</p>
                    </div>



                    {/* Truck */}
                    <div className=" truck flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/034/467/958/original/covered-van-truck-cargo-van-truck-transporting-cargo-transparent-background-ai-generated-png.png"
                            alt=""
                            className=" card-img-top mb-4 inline-block h-auto w-full object-cover"
                        />
                        <p className="font-bold card-title">Truck</p>
                        <p className="text-sm text-gray-900 card-text">Big relocation, Restock delivery and any other</p>
                    </div>
                </div>
            </div>







            

        </section>
    );
};

export default Cards;