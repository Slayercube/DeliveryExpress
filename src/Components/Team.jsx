import React, { useState } from 'react'
import styles from './Team.module.css'

const Team = () => {
    return (
        <section id={styles.team} className='py-20 team-container text-light  '>
            {/* Container */}
            <div className=" my-2 mx-auto w-full max-w-7xl px-5 md:px-10 py-4">


                {/* Title */}
                <h2 className=" text-center text-4xl font-bold lg:text-white">
                    Our Team Members
                </h2>
                <p className=" mx-auto mb-4 mt-3 text-center text-sm text-warning">
                    Graduated from 4geeks Academy
                </p>


                {/* Content */}
                <div className="my-20 justify-content-around mx-auto grid max-w-5xl justify-items-center gap-5 
                        sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">



                    {/* Joao */}
                    <div className=" flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                            alt=""
                            className="rounded team-card-img mb-4 inline-block h-56 w-full object-cover lg:h-72"
                        />
                        <p className=" font-bold card-title">Joao</p>
                        <p className="text-md text-white-900 card-text">FullStack Webapp Developer</p>
                    </div>


                    {/* Deepak */}
                    <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                            alt=""
                            className="rounded team-card-img mb-4 inline-block h-56 w-full object-cover lg:h-72"
                        />
                        <p className=" font-bold card-title">Deepak</p>
                        <p className="text-md text-white-900 card-text">FullStack Webapp Developer</p>
                    </div>


                    {/* Saeed */}
                    <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                            alt=""
                            className="rounded team-card-img mb-4 inline-block h-56 w-full object-cover lg:h-72"
                        />
                        <p className=" font-bold card-title">Saeed</p>
                        <p className="text-md text-white-900 card-text">FullStack Webapp Developer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;