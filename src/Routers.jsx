import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'

const Routers = () => {
  return (
    <Router>
        <Navbar />
      <Switch>
        <Route path='/' exact component={App} />
        {/* <Route path='/about' component={About} /> */}
        {/* <Route path='/contact' component={Contact} /> */}
      </Switch>
    </Router>
    
  )
}

export default Routers