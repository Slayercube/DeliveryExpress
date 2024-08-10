
import { myContext } from '../Context';
import { useMap } from 'react-leaflet';
import { useContext, useEffect } from 'react';




const CenterMap = () => {
    const {pickLocation , deliverLocation , setDistance } = useContext(myContext);
    const map = useMap();
  
    useEffect(() => {
      if (pickLocation && deliverLocation) {
        const bounds = [
          [pickLocation.lat, pickLocation.lng],
          [deliverLocation.lat, deliverLocation.lng]
        ];
        map.fitBounds(bounds);
  
        const distance = map.distance([pickLocation.lat, pickLocation.lng], [deliverLocation.lat, deliverLocation.lng]);
        setDistance(distance / 1000);
  
  
      } else if (pickLocation) {
        map.setView([pickLocation.lat, pickLocation.lng], 13);
      } else if (deliverLocation) {
        map.setView([deliverLocation.lat, deliverLocation.lng], 13);
      }
    }, [map, pickLocation, deliverLocation, setDistance]);
  
    return null;
  };

export default CenterMap;