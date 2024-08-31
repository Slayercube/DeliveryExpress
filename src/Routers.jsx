import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Contact from './Components/Contact.jsx'
import { Rate } from './Components/Rate.jsx'
// import { Signup } from './Components/Signup';
import Payment from './Components/Payment';
import Footer from './Components/Footer.jsx'
import Home from './Home.jsx'
import Bus from './Components/vehicles/Bus';
import Body from './Components/Body.jsx'
import Register from './backend/view/auth/Register';
import Login from './backend/view/auth/Login';
import Profile from './backend/view/auth/Profile';
import About from './Components/About.jsx'
import Infoform from './Components/Infoform.jsx'
import Checkout from './Components/Checkout.jsx'
import Orders from './Components/Orders.jsx'



const Routers = () => {
  return (
    <>

    
  
      <Navbar />
      <Routes>
        {<Route path='/' element={<Home />} />}
        { <Route path='/contact' element={<Contact />} /> }
        { <Route path='/register' element={<Register />} /> }
        { <Route path='/rate' element={<Rate />} /> }
        { <Route path='/payment' element={<Payment />} /> }
        { <Route path='/foot' element={<Footer />} /> }
        { <Route path='/app' element={<App />} /> }
        { <Route path='/bus' element={<Bus />} /> }
        { <Route path='/body' element={<Body />} /> }
        { <Route path='/login' element={<Login />} /> }
        { <Route path='/profile' element={<Profile />} /> }
        { <Route path='/about' element={<About />} /> }
        { <Route path='/info' element={<Infoform />} /> }
        { <Route path='/checkout' element={<Checkout />} /> }
        { <Route path='/orders' element={<Orders />} /> }
      </Routes>
      <Footer />

    </>
   
    
  )
}

export default Routers