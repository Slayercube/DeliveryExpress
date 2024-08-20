import React from 'react';
import styles from './Cards.module.css'

const Cards = () => {
    return (
        <section id={styles.card} className=" mx-auto w-full max-w-7xl px-5 py-1 md:px-10 md:py-10">
            {/* Container */}
            <div className=" my-20 mx-auto w-full max-w-7xl px-2 py-3 md:px-10 md:py-24 lg:py-32">
                {/* Title */}
                <h2 className="text-center font-bold text-5xl mb-5">
                    Our Vehicles
                </h2>
                {/* Content */}
                <div className="py-4 my-20 mx-auto grid justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:justify-items-stretch">



                    {/* Motobike*/}
                    <div className="motobike flex max-w-sm flex-col items-center px-8 py-6 md:max-w-full" id={styles.motobike}>
                        <img
                            src="https://www.scootercentral.com.au/wp-content/uploads/FIDDLEWH-8028PTOPCASE.png"
                            alt="Motobike"
                            className="verhicles-card-img mb-4 inline-block h-auto w-full object-cover"
                        />
                        <p className="font-bold card-title pb-3" id= {styles.cardtitle}  style={{color : "gold"}}>Motobike</p>
                        <p className=" text-md text-white-900 card-text" id= {styles.cardtext}>Delivers smaller packages like Documents.</p>
                    </div>



                    {/* Car */}
                    <div className=" car flex max-w-sm flex-col items-center gap-2 rounded-md px-8 py-6 md:max-w-full" id={styles.car}>
                        <img
                            src="https://qwestore.com/png_images_min/10/BMW-Cars-PNG-bBMWb-PNG-image-free-download-9628.png"
                            alt="Car"
                            className=" vehicles-card-img mb-3 inline-block h-auto w-full object-cover"
                        />
                        <p className="font-bold card-title mt-2" id= {styles.cardtitle}  style={{color : 'gold'}}  >Car</p>
                        <p className=" mt-3 text-md text-white-950 card-text" id= {styles.cardtext}>Express delivery, receive in same day</p>
                    </div>



                    {/* Mini-Van */}
                    <div className=" mini-van flex max-w-sm flex-col items-center gap-4 rounded-md px-8 py-6 md:max-w-full" id={styles.minivan}>
                        <img
                            src="https://provanhire.co.uk/wp-content/uploads/CarRentalGallery/1502765766_2017-ford-transit-connect-xlt-minivan-angular-front.png"
                            alt="Mini-Van"
                            className=" vehicles-card-img mb-5 inline-block h-auto w-full object-cover"
                        />
                        <p className="font-bold card-title" id= {styles.cardtitle}  style={{color : 'gold'}}>Mini-Van</p>
                        <p className="text-md text-white-950 card-text" id= {styles.cardtext}>Delivery for medium pacels and smaller relocation.</p>
                    </div>



                    {/* Truck */}
                    <div className=" truck flex max-w-sm flex-col items-center gap-4 rounded-md px-8 py-6 md:max-w-full" id={styles.truck}>
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/034/467/958/original/covered-van-truck-cargo-van-truck-transporting-cargo-transparent-background-ai-generated-png.png"
                            alt="Truck"
                            className=" vehicles-card-img mb-5 inline-block h-auto w-full object-cover"
                        />
                        <p className="font-bold card-title" id= {styles.cardtitle} style={{color : 'gold'}}>Truck</p>
                        <p className="text-md text-white-950 card-text" id= {styles.cardtext}>Big relocation, Restock delivery and any other</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Cards;