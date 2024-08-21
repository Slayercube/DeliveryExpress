import React from 'react';
import styles from './Cards.module.css';

const Cards = () => {
    return (
        <section id={styles.card} className="mx-auto w-full max-w-7xl px-5 py-15 md:px-10 md:py-24">
            {/* Container */}
            <div className="my-20 mx-auto w-full max-w-7xl px-2 py-3 md:px-10 md:py-24 lg:py-32">
                {/* Title */}
                <h2 className="text-center font-bold text-4xl mb-5">
                    Our Vehicles
                </h2>
                {/* Content */}
                <div className="py-4 my-20 mx-auto grid justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:justify-items-stretch">
                    {/* Motobike */}
                    <div className="relative flex max-w-sm flex-col items-center overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:max-w-full">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="relative flex flex-col items-center rounded-md bg-slate-950 px-8 py-6">
                            <img
                                src="https://www.scootercentral.com.au/wp-content/uploads/FIDDLEWH-8028PTOPCASE.png"
                                alt="Motobike"
                                className="verhicles-card-img mb-4 inline-block h-auto w-full object-cover"
                            />
                            <p className="font-bold card-title pb-3" style={{ color: "gold" }}>Motobike</p>
                            <p className="text-md text-white-900 card-text">Delivers smaller packages like Documents.</p>
                        </div>
                    </div>
                    {/* Car */}
                    <div className="relative flex max-w-sm flex-col items-center overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:max-w-full">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="relative flex flex-col items-center rounded-md bg-slate-950 px-8 py-6 h-full">
                            <img
                                src="https://qwestore.com/png_images_min/10/BMW-Cars-PNG-bBMWb-PNG-image-free-download-9628.png"
                                alt="Car"
                                className="verhicles-card-img mb-4 inline-block h-auto w-full object-cover"
                            />
                            <p className="font-bold card-title pb-3" style={{ color: "gold" }}>Car</p>
                            <p className="text-md text-white-900 card-text">Delivers larger packages like Boxes.</p>
                        </div>

                    </div> {/* Car */}
                 
                 
                    {/* van */}
                    <div className="relative flex max-w-sm flex-col items-center overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:max-w-full">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="relative flex flex-col items-center rounded-md bg-slate-950 px-8 py-6 h-full">
                            <img
                                src="https://provanhire.co.uk/wp-content/uploads/CarRentalGallery/1502765766_2017-ford-transit-connect-xlt-minivan-angular-front.png"
                                alt="Car"
                                className="verhicles-card-img mb-4 inline-block h-auto w-full object-cover"
                            />
                            <p className="font-bold card-title pb-3" style={{ color: "gold" }}>Car</p>
                            <p className="text-md text-white-900 card-text">Delivery for medium pacels and smaller relocation..</p>
                        </div>
                    </div> {/* Car */}
                 
                 {/* truck */}
                    <div className="relative flex max-w-sm flex-col items-center overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:max-w-full">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="relative flex flex-col items-center rounded-md bg-slate-950 px-8 py-6 h-full">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/034/467/958/original/covered-van-truck-cargo-van-truck-transporting-cargo-transparent-background-ai-generated-png.png"
                                alt="Car"
                                className="verhicles-card-img mb-4 inline-block h-auto w-full object-cover"
                            />
                            <p className="font-bold card-title pb-3" style={{ color: "gold" }}>Car</p>
                            <p className="text-md text-white-900 card-text">Big relocation, Restock delivery and any other</p>
                        </div>
                    </div>
                    {/* Add more cards as needed */}
                </div>
            </div>
        </section>
    );
};

export default Cards;