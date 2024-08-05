import React from "react";
import styles from "./Lowerbody.module.css"

const Lowerbody = () => {
    return (
        <section className="bicycle">

            {/* header */}
            <div className="text-center my-2 mt-3">
                <h3>
                    Our Vehicles
                </h3>
            </div>


            <div className="d-flex mx-3">
                {/* Bicycle */}
                <div class="card-bicycle bicycle">
                    <img src="https://plus.unsplash.com/premium_photo-1676795223634-3340063d1b11?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>


                {/* Motocycle */}
                <div class="card-motocycle motocycle">
                    <img src="https://plus.unsplash.com/premium_photo-1676795223634-3340063d1b11?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                {/* mini-van */}
                <div class="card-mini-van mini-van">
                    <img src="https://plus.unsplash.com/premium_photo-1676795223634-3340063d1b11?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                {/* Truck / Lorry */}
                <div class="card-truck truck">
                    <img src="https://plus.unsplash.com/premium_photo-1676795223634-3340063d1b11?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            {/* sub-header */}
            <div className="text-center">
                <h4>
                    Pillars
                </h4>
            </div>


            <div className="d-flex justify-content-around text-bold">
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





        </section>

    )

}

export default Lowerbody;