import { useContext } from "react";
import { myContext } from "../Context";
import '../App.css';

const TimeDate = () => {
  const {
    pickupDate, setPickupDate,
    pickupTime, setPickupTime,
    deliveryDate, setDeliveryDate,
    deliveryTime, setDeliveryTime,
    orderData , setOrderData
  } = useContext(myContext);

  const today = new Date().toISOString().split('T')[0];

  
  const handlePickupDateChange = (e) => {
    const pickupDate = e.target.value;
    const pickupDateTime = `${pickupDate} ${orderData.pickupTime || '00:00:00'}`;
    setOrderData({ ...orderData, pickupDate, pickupDateTime });
  };
  
  const handlePickupTimeChange = (e) => {
    const pickupTime = e.target.value;
    const pickupDateTime = `${orderData.pickupDate || today} ${pickupTime}`;
    setOrderData({ ...orderData, pickupTime, pickupDateTime });
  };
  
  const handleDeliveryDateChange = (e) => {
    const deliveryDate = e.target.value;
    const deliveryDateTime = `${deliveryDate} ${orderData.deliveryTime || '00:00:00'}`;
    setOrderData({ ...orderData, deliveryDate, deliveryDateTime });
  };
  
  const handleDeliveryTimeChange = (e) => {
    const deliveryTime = e.target.value;
    const deliveryDateTime = `${orderData.deliveryDate || today} ${deliveryTime}`;
    setOrderData({ ...orderData, deliveryTime, deliveryDateTime });
  };


  return (
    <div style={{color : 'white'}}>
      <div className="mb-4 flex space-x-4">
        <div>
          <label className="block text-gray-400 custom label" >Pickup Date</label>
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            value={orderData.pickupDate  || today}
            onChange={handlePickupDateChange}
            className="p-2 border border-white rounded bg-gray-700 text-gray-200"
            min={today}
            required
          />
        </div>
        <div>
          <label className="block text-gray-400">Pickup Time</label>
          <input
            type="time"
            id="pickupTime"
            name="pickupTime"
            value={orderData.pickupTime || ''}
            onChange={handlePickupTimeChange}
            className="w-40 p-2 border border-gray-600 rounded bg-gray-700 text-gray-200"
            required
          />
        </div>
      </div>
      <div className="mb-4 flex space-x-4">
        <div>
          <label className="block text-gray-400">Delivery Date</label>
          <input
            type="date"
            id="deliveryDate"
            name="deliveryDate"
            value={orderData.deliveryDate || today}
            onChange={handleDeliveryDateChange}
            className="p-2 border border-gray-600 rounded bg-gray-700 text-gray-200"
            min={today}
            required
          />
        </div>
        <div>
          <label className="block text-gray-400">Delivery Time</label>
          <input
            type="time"
            id="deliveryTime"
            name="deliveryTime"
            value={orderData.deliveryTime || ''}
            onChange={handleDeliveryTimeChange}
            className="w-40 p-2 border border-gray-600 rounded bg-gray-700 text-gray-200"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default TimeDate;