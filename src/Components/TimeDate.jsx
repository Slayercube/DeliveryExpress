import { useContext } from "react";
import { myContext } from "../Context";
import '../App.css';

const TimeDate = () => {
  const {
    pickupDate, setPickupDate,
    pickupTime, setPickupTime,
    deliveryDate, setDeliveryDate,
    deliveryTime, setDeliveryTime,
  } = useContext(myContext);

  const today = new Date().toISOString().split('T')[0];

  return (
    <div style={{color : 'white'}}>
      <div className="mb-4 flex space-x-4">
        <div>
          <label className="block text-gray-400 custom label" >Pickup Date</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="p-2 border border-white rounded bg-gray-700 text-gray-200"
            min={today}
            required
          />
        </div>
        <div>
          <label className="block text-gray-400">Pickup Time</label>
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
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
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            className="p-2 border border-gray-600 rounded bg-gray-700 text-gray-200"
            min={today}
            required
          />
        </div>
        <div>
          <label className="block text-gray-400">Delivery Time</label>
          <input
            type="time"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            className="w-40 p-2 border border-gray-600 rounded bg-gray-700 text-gray-200"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default TimeDate;