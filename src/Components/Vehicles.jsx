import  { useContext } from 'react';
import { myContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import TimeDate from './TimeDate';

const Vehicles = () => {
  const { pickupDate, pickupTime, deliveryDate, deliveryTime,errorMessage, setErrorMessage ,vehicle ,distance } = useContext(myContext);
  const navigate = useNavigate()

  const calculateEstimatedPrice = (distance, vehicle) => {
    if (!distance || !vehicle) return null;

    let pricePerKm;
    switch (vehicle) {
      case 'van':
        pricePerKm = 2.0;
        break;
      case 'car':
        pricePerKm = 1.5;
        break;
      case 'bike':
        pricePerKm = 1.0;
        break;
      case 'truck':
        pricePerKm = 2.5;
        break;
      default:
        pricePerKm = 1.0;
    }

    return distance * pricePerKm;
  };

  const vehicleImages = {
    van: 'https://assets.mbvans.com/e_trim/Mercedes-Benz-Vans/Sprinter/cargo-van/BYO/2019/MY19_M1CA46_SI_SR_9147_DS',

    car: 'https://www.firstcarrental.co.za/images/group-g-mercedes-c200.jpg',

    bike: 'https://m.media-amazon.com/images/I/714Wty8IvxL._AC_UF1000,1000_QL80_.jpg',

    truck: 'https://www.shutterstock.com/image-vector/white-box-truck-cargo-delivery-260nw-2176174231.jpg',
  };


  const estimatedPrice = calculateEstimatedPrice(distance, vehicle);

  const handlePaymentClick = () => {
    if (!pickupDate || !pickupTime || !deliveryDate || !deliveryTime) {
      setErrorMessage('Please select both pickup and delivery date and time.');
      return;
    }
    setErrorMessage('');
    navigate('/userinfo', {
      state: {
        pickupDate,
        pickupTime,
        deliveryDate,
        deliveryTime,
      },
    });
  };

  return (
    <div>
      {vehicle && (
        <div>
          <img src={vehicleImages[vehicle]} alt={vehicle} style={{ width: '100px', height: '100px' }} />
        </div>
      )}
      {estimatedPrice !== null && <div className='card' style={{backgroundColor : 'black', color : "white", width : '300px'}}>Estimated Price: ${estimatedPrice.toFixed(2)}</div>}

      
      {vehicle && estimatedPrice !== null && (
        <>
        <TimeDate />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <button onClick={handlePaymentClick} className='btn btn-success'>Payment</button>
        </>
      )}
    </div>
    
  );
};

export default Vehicles;