import  { useContext } from 'react'
import TimeDate from './TimeDate';
import { myContext } from '../Context';
import { useNavigate } from 'react-router-dom';

const TimeDate1 = () => {
    const {
        pickupDate, 
        pickupTime, 
        deliveryDate, 
        deliveryTime, 
        vehicle, estimatedPrice, errorMessage, setErrorMessage,
      } = useContext(myContext);

      let navigate = useNavigate();

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
    <div className=''>
       
       {vehicle && estimatedPrice !== null && (
        <>
         <TimeDate />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <button onClick={handlePaymentClick} className='btn btn-success'>Payment</button>
        </>
      )}</div>
  )
}

export default TimeDate1