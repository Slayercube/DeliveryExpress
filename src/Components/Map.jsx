
import { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { myContext } from "../Context";

const Map = () => {
  const { pickLocation, deliverLocation, pickAddress, deliverAddress } = useContext(myContext);
<<<<<<< HEAD
=======
  return (
    <MapContainer center={[38.722, -9.123]} zoom={13} style={{ height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {pickLocation && (
          <Marker position={[pickLocation.lat, pickLocation.lng]}>
            <Popup>{pickAddress}</Popup>
          </Marker>
        )}
        {deliverLocation && (
          <Marker position={[deliverLocation.lat, deliverLocation.lng]}>
            <Popup>{deliverAddress}</Popup>
          </Marker>
        )}
      </MapContainer>
  )
}
>>>>>>> c82727acaf383864280611eb40518c3503d9dcf3

  return (
    <MapContainer center={[38.722, -9.123]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {pickLocation && (
        <Marker position={[pickLocation.lat, pickLocation.lng]}>
          <Popup>{pickAddress}</Popup>
        </Marker>
      )}
      {deliverLocation && (
        <Marker position={[deliverLocation.lat, deliverLocation.lng]}>
          <Popup>{deliverAddress}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
