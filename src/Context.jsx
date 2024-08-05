import React, { useState } from 'react';

const myContext = React.createContext();

function ContextProvider({ children }) {
    const [pickLocation, setPickLocation] = useState(null);
    const [deliverLocation, setDeliverLocation] = useState(null);

   
   
   
   
   
   
    const context = {
        pickLocation,
        setPickLocation,
        deliverLocation,
        setDeliverLocation,
    };

    return (
        <myContext.Provider value={context}>
            {children}
        </myContext.Provider>
    );
}

export { myContext, ContextProvider };