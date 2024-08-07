import React, { useState } from 'react';

const myContext = React.createContext();

function ContextProvider({ children }) {
    const [pickLocation, setPickLocation] = useState(null);
    const [deliverLocation, setDeliverLocation] = useState(null);
    const [isBooked, setIsBooked] = useState(false);
   


   
   
   
   
    const context = {
        pickLocation,
        setPickLocation,
        deliverLocation,
        setDeliverLocation,
        isBooked,
        setIsBooked,
    };

    return (
        <myContext.Provider value={context}>
            {children}
        </myContext.Provider>
    );
}

export { myContext, ContextProvider };