const express = require('express')
const router = express.Router()
const pool = require('../db/pool')
// const authenticate = require('../middleware/authenticate')


router.post('/',  async (req, res) => {
  let {
    toCustomer,
    pickupLocation,
    dropLocation,
    itemType,
    weight,
    width,
    length,
    height,
    vehicleType,
    pickupTime,
    deliveryTime,
  } = req.body

  const formatDateTime = (time) => {
    const date = new Date();
    const [hours, minutes] = time.split(':');
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    return date.toISOString().slice(0, 19).replace('T', ' ');
  };

  pickupTime = formatDateTime(pickupTime);
  deliveryTime = formatDateTime(deliveryTime);
  
  let query = `insert into orders (toCustomer, pickupLocation, dropLocation, itemType, weight, width, length, height, vehicleType, pickupTime, deliveryTime)
    values ('${toCustomer}', '${pickupLocation}', '${dropLocation}', '${itemType}', '${weight}', '${width}', '${length}', '${height}', '${vehicleType}', '${pickupTime}', '${deliveryTime}') ;`

    pool.query(query, (err, data) => {
      if (err) {
        res.status(500).send(err);
        console.log(err)
      } else {
        res.status(200).send(data);
        
      }
    });

  // res.send(data)
})

module.exports = router
