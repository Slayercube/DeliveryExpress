import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ContextProvider } from "./Context.jsx";
import Routers from "./Routers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Router>
      <Routers />
    </Router>
  </ContextProvider>
);