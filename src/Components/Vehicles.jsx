import  { useContext } from 'react';
import { myContext } from '../Context';
// import TimeDate from './TimeDate';
import carVideo from './vehicales-videos/car.mp4';
import vanVideo from './vehicales-videos/van.mp4';
import bikeVideo from './vehicales-videos/bike.mp4';
import truckVideo from './vehicales-videos/truck.mp4';

const Vehicles = () => {
  const { vehicle , estimatedPrice } = useContext(myContext);
 


  const vehicleMedia = {
    van: vanVideo,

    car: carVideo,

    bike: bikeVideo,

    truck: truckVideo,
  };

  

  return (
    <div>
      {vehicle && (
        <div>
        <video
              src={vehicleMedia[vehicle]}
              alt={vehicle}
              style={{ width: '100%', height: '100%' }}
              controls
              autoPlay
              loop
            />
        </div>
      )}
      {/* {estimatedPrice !== null && <div className='card' style={{backgroundColor : 'black', color : "white", width : '300px'}}>Estimated Price: ${estimatedPrice.toFixed(2)}</div>} */}

      
     
    </div>
    
  );
};

export default Vehicles;