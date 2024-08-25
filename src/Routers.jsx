import { Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Contact from './Components/Contact.jsx'
import { Rate } from './Components/Rate.jsx'
import { Login } from './Components/Login.jsx'
import { Signup } from './Components/Signup';
import Payment from './Components/Payment';
import Footer from './Components/Footer.jsx'
import Home from './Home.jsx'
import Bus from './Components/vehicles/Bus';
import Body from './Components/Body.jsx'

const Routers = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
<<<<<<< HEAD
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/rate' element={<Rate />} />
        <Route path='/userinfo' element={<UserInfoForm />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/foot' element={<Footer />} />
        <Route path='/app' element={<App />} />
=======
        { <Route path='/contact' element={<Contact />} /> }
        { <Route path='/login' element={<Login />} /> }
        { <Route path='/signup' element={<Signup />} /> }
        { <Route path='/rate' element={<Rate />} /> }
        { <Route path='/payment' element={<Payment />} /> }
        { <Route path='/foot' element={<Footer />} /> }
        { <Route path='/app' element={<App />} /> }
        { <Route path='/bus' element={<Bus />} /> }
        { <Route path='/body' element={<Body />} /> }
>>>>>>> dd476b203d2aa108f8422defae0ee891350e3cdd
      </Routes>
      <Footer />
    </div>


  )
}

export default Routers;