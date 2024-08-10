import React, { useContext } from 'react';
import { myContext } from '../Context';

const TimeDate = () => {
  const {
    pickupDate, setPickupDate,
    pickupTime, setPickupTime,
    deliveryDate, setDeliveryDate,
    deliveryTime, setDeliveryTime
  } = useContext(myContext);

  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700">Pickup Date</label>
        <input
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          className="w-1/4 p-2 border border-gray-300 rounded"
            min={today}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Pickup Time</label>
        <input
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="w-1/4 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Delivery Date</label>
        <input
          type="date"
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
          className="w-1/4 p-2 border border-gray-300 rounded"
          min={today}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Delivery Time</label>
        <input
          type="time"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
          className="w-1/4 p-2 border border-gray-300 rounded"
          required
        />
      </div>
    </div>
  );
};

export default TimeDate;