
import './App.css'
import Body from './Components/Body'
import Navbar from "./Components/Navbar";
import Vehiclesinfo from './Components/Vehiclesinfo';
import Cards from './Components/Cards.jsx'
import { Login } from './Components/Login.jsx';



function App() {
  return (
    <>
      <Login />

      <Navbar />
      <div>
        <Body />
        
      </div>
      
   
  
      <Cards />
    </>
  )
}

export default App;
