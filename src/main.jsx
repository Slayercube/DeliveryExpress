import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import myContext from "./Context";
import App from "./App.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <myContext.Provider value={{}}>
      <App />
    </myContext.Provider>
  </React.StrictMode>
);
