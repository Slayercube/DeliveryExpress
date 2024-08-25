import './bus.css'
import Road from './Road'

const Bus = () => {
  return (
    <div className="truck-container">
      <div className="truck translate-y-[160px]">
        <div className="truck-cab">
          <div className="window"></div>
          <div className="headlight"></div>
          <div className="grille"></div>
          <div className="bumper"></div>
          <div className="side-mirror left-mirror"></div>
          <div className="side-mirror right-mirror"></div>
          <div className="door">
            <div className="door-handle"></div>
          </div>
          <div className="roof-rack"></div>
          <div className="roof-light"></div>
          <div className="front-light left"></div>
          <div className="front-light right"></div>
          <div className="windshield"></div>
          <div className="exhaust-pipe-top">
            <div className="smoke"></div>
            <div className="smoke"></div>
            <div className="smoke"></div>
            <div className="smoke"></div>
            <div className="smoke"></div>
            <div className="smoke"></div>
          </div>

        </div>
        <div className="truck-bed">
          <div className="board">
          <div className='board-text'>
         Thanks for using our services!!
          <p>see you soon !! 😎</p> 
          </div>
          
          
           </div>
          <div className="exhaust-pipe"></div>
          <div className="backlight left"></div>
          <div className="backlight right"></div>
        </div>
        <div className="wheel front-wheel">
          <div className="hubcap">
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
          </div>
        </div>
        <div className="wheel back-wheel">
          <div className="hubcap">
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
          </div>
        </div>
        <div className="wheel back-wheel">
          <div className="hubcap">
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
            <div className="tread"></div>
          </div>
        </div>
      </div>

      <Road />
    </div>
  )
}

export default Bus
