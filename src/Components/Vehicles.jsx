import  { useContext } from 'react';
import { myContext } from '../Context';
// import TimeDate from './TimeDate';

const Vehicles = () => {
  const { vehicle , estimatedPrice } = useContext(myContext);
 


  const vehicleImages = {
    van: 'https://assets.mbvans.com/e_trim/Mercedes-Benz-Vans/Sprinter/cargo-van/BYO/2019/MY19_M1CA46_SI_SR_9147_DS',

    car: 'https://www.firstcarrental.co.za/images/group-g-mercedes-c200.jpg',

    bike: 'https://m.media-amazon.com/images/I/714Wty8IvxL._AC_UF1000,1000_QL80_.jpg',

    truck: 'https://www.shutterstock.com/image-vector/white-box-truck-cargo-delivery-260nw-2176174231.jpg',
  };

  

  return (
    <div>
      {vehicle && (
        <div>
          <img src={vehicleImages[vehicle]} alt={vehicle} style={{ width: '100px', height: '100px' }} />
        </div>
      )}
      {estimatedPrice !== null && <div className='card' style={{backgroundColor : 'black', color : "white", width : '300px'}}>Estimated Price: ${estimatedPrice.toFixed(2)}</div>}

      
     
    </div>
    
  );
};

export default Vehicles;