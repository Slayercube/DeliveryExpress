import { useContext } from 'react'
import './Car.css'
import Vehicles from '../Vehicles'

import TimeDate from './../TimeDate'
import { myContext } from '../../Context'

const Car = () => {
  const { vehicle, estimatedPrice, errorMessage,setErrorMessage, orderData ,} = useContext(myContext)



  return (
    <div className="drone-container">
      <div className="drone translate-y-[10px]">
        <div className="drone-body">
          <div className="billboard">
            <Vehicles />
          </div>
          <div className="arm arm-top-left"></div>
          <div className="arm arm-top-right"></div>
          <div className="arm arm-bottom-left"></div>
          <div className="arm arm-bottom-right"></div>
          <div className="propeller propeller-top-left"></div>
          <div className="propeller propeller-top-right"></div>
          <div className="propeller propeller-bottom-left"></div>
          <div className="propeller propeller-bottom-right"></div>
          <div className="light light-top-left"></div>
          <div className="light light-top-right"></div>
          <div className="light light-bottom-left"></div>
          <div className="light light-bottom-right"></div>

          <div className="camera">
            <div className="camera-light"></div>
          </div>

          <div className="landing-gear landing-gear-left"></div>
          <div className="landing-gear landing-gear-right"></div>
          <div className="antenna antenna-left"></div>
          <div className="antenna antenna-right"></div>
          <div className="sensor sensor-front"></div>
          <div className="sensor sensor-back"></div>
        </div>

        {/* <TimeDate /> */}

        <div className="rope">
          <div className="link-container">
            <div>
              {vehicle && estimatedPrice !== null && (
                <>
                  <TimeDate />
                  {errorMessage && (
                    <div style={{ color: 'red' }}>{errorMessage}</div>
                  )}
                  <div className='container d-flex'>
                  {/* <button className="btn btn-primary" onClick={handleConfirmClick}>Confirm</button> */}
                  
                  {orderData.estimatedPrice !== null && <div className='m-2' style={{color : 'white'}}>Estimated price : ${estimatedPrice.toFixed(2)}</div>}
                  </div>
                  
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Car
