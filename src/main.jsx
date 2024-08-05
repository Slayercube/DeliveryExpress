import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ContextProvider } from "./Context.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
);