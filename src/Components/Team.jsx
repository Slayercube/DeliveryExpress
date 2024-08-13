import React, { useState } from 'react'
import styles from './Team.module.css'

const Team = () => {
    return (
        <section id= {styles.team}>
            {/* Container */}
            <div className="mx-auto w-full  max-w-7xl px-5 py-16 md:px-10 md:py-20">


                {/* Title */}
                <h2 className="text-center text-3xl font-bold md:text-">
                    Our Team Members
                </h2>
                <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-700 sm:text-base md:mb-12 lg:mb-16">
                    Graduated from 4geeks Academy
                </p>


                {/* Content */}
                <div className=" justify-content-around mx-auto grid max-w-5xl justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">

                    {/* Item */}
                    <div className=" flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                            alt=""
                            className=" mb-4 inline-block h-56 w-full object-cover lg:h-72"
                        />
                        <p className="font-bold">Deepak</p>
                        <p className="text-sm text-gray-900">FullStack Webapp Developer</p>
                    </div>

                    
                    {/* Item */}
                    <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                            alt=""
                            className=" mb-4 inline-block h-56 w-full object-cover lg:h-72"
                        />
                        <p className="font-bold">Joao</p>
                        <p className="text-sm text-gray-900">FullStack Webapp Developer</p>
                    </div>


                    {/* Item */}
                    <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                            alt=""
                            className=" mb-4 inline-block h-56 w-full object-cover lg:h-72"
                        />
                        <p className="font-bold">Saeed</p>
                        <p className="text-sm text-gray-900">FullStack Webapp Developer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;