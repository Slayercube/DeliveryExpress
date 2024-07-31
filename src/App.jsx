import { useState } from "react";

import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import ProductSpecs from "./Components/ProductSpecs";
import Map from "./Components/Map";

function App() {
  return (
    <>
      <Navbar />
      <div className="card d-flex">
        <Body />
        <ProductSpecs />
      </div>
        <Map />
    </>
  );
}

export default App;
