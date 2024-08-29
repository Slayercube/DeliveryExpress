import { useContext, useEffect, useState } from 'react'
import { myContext } from '../Context'
import styles from './Itemspecs.module.css'

const Itemspecs = () => {
  const { setVehicle,
     setShowDrone,
      orderData,
     setOrderData,
     } = useContext(myContext)
  const [itemType, setItemType] = useState('')
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [error, setError] = useState(null)

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleBookClick = async () => {
    if (!orderData.itemType) {
      setError('Please select an item type.')
      return
    }
    if (!orderData.length || !orderData.width || !orderData.height || !orderData.weight) {
      setError('Please fill in all dimensions and weight.')
      return
    }

    setError('')
    console.log('Booking details:', { itemType, length, width, height, weight })
    if (!error) {
      handleSubmitClick()
      handleSubmitVehicle()
      setError(null)
      setShowDrone(true)
    }
  }

  const handleSubmitClick = () => {
    const l = parseFloat(orderData.length)
    const w = parseFloat(orderData.width)
    const h = parseFloat(orderData.height)
    const wt = parseFloat(orderData.weight)

    if (l <= 1 && w <= 1 && h <= 1 && wt <= 10) {
      setVehicle('bike')
    } else if (l <= 2 && w <= 2 && h <= 2 && wt <= 50) {
      setVehicle('car')
    } else if (l <= 3 && w <= 3 && h <= 3 && wt <= 200) {
      setVehicle('van')
    } else {
      setVehicle('truck')
    }
  }
  const handleSubmitVehicle = () => {
    const l = parseFloat(orderData.length);
    const w = parseFloat(orderData.width);
    const h = parseFloat(orderData.height);
    const wt = parseFloat(orderData.weight);

    let vehicleType = 'truck';
    if (l <= 1 && w <= 1 && h <= 1 && wt <= 10) {
      vehicleType = 'bike';
    } else if (l <= 2 && w <= 2 && h <= 2 && wt <= 50) {
      vehicleType = 'car';
    } else if (l <= 3 && w <= 3 && h <= 3 && wt <= 200) {
      vehicleType = 'van';
    }

    setOrderData({ ...orderData, vehicleType });
  };

  return (
    <div className="w-full max-w-md rounded-lg p-8 shadow-lg">
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <>

     
      <select
        className="mb-4 w-full rounded bg-gray-700 p-2 text-white"
        name='itemType'
        value={orderData.itemType}
        onChange={handleInputChange} 
      >
        <option value="">Select item</option>
        <option value="Documents">Documents</option>
        <option value="Box">Box</option>
        <option value="Furniture">Furniture</option>
        <option value="Electronics">Electronics</option>
      </select>
      <div className="space-y-4">
        <div>
          <label className="block text-white">Length:</label>
          <input
            className="w-full rounded bg-gray-700 p-2 text-white"
            type="number"
            name='length'
            value={orderData.length}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block text-white">Width:</label>
          <input
            className="w-full rounded bg-gray-700 p-2 text-white"
            type="number"
            name='width'
            value={orderData.width}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block text-white">Height:</label>
          <input
            className="w-full rounded bg-gray-700 p-2 text-white"
            type="number"
            name='height'
            value={orderData.height}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block text-white">Weight:</label>
          <input
            className="w-full rounded bg-gray-700 p-2 text-white"
            type="number"
            name='weight'
            value={orderData.weight}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button
        className="mt-4 w-24 rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        onClick={handleBookClick}
      >
        Submit
      </button>
      </>
    </div>
  )
}

export default Itemspecs
