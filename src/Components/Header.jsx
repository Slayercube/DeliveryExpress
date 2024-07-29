import { useState } from 'react'


function Header() {
  const [count, setCount] = useState(0)

  return (
    <div className="d-flex Header">
      <div className="logo">
        <img src="logo" alt="logo" />
      </div>

      <div className="main_header">
        <h1>Delivery Express</h1>
      </div>

      <div className="login_section">

      </div>
    </div>
  )
}

export default Header
