import React from React.jsx;

const OurVehicles = () => {
    return (
        <section className="vehicles">
            {/* header */}
            <div>
                <h4>
                    Our Vehicles
                </h4>
            </div>

            {/* Vehicles 1 */}
            <div className="bicycle">
                <img src="https//" alt="Bicycle" width={200} height={200} />
                <p> With this vecihle, we deliver items up to 10KG ONLY!! </p>
            </div>

            {/* vehicle 2 */}
            <div className="motocycle">
            <img src="https//" alt="Motocycle" width={200} height={200} />
            <p>With this vehicle, we deliver items up to 30KG ONLY!!</p>
            </div>
            
            {/* vecihle 3 */}
            <div className="mini-van">
            <img src="https//" alt="Mini Van" width={200} height={200} />
            <p>This Vehicle is for deliveries and and can assist with a small relocation depending on the furnitures</p>
            </div>

            {/* vehicle 4 */}
            <div className="truck">
            <img src="https//" alt="Truck/Lorry" width={200} height={200} />
            <p>For Huge relocations, deliveries and many more</p>
            </div>

        </section>

    )
}

export default OurVehicles;