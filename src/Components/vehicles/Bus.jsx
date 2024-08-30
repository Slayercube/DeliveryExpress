import InfoForm from '../Infoform'
import './bus.css'
import Road from './Road'

const Bus = () => {
  return (
    <div className="truck-container">
      <div className="truck translate-y-[330px]">
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
          <div className="exhaust-pipe"></div>
          <div className="exhaust-pipe1"></div>
          <div className="backlight left"></div>
          <div className="backlight right"></div>
          <div className="side-panel left"></div>
          <div className="side-panel right"></div>

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
        <div className="wheel back-wheel1">
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
        </div>{' '} 
        <div className="wheel back-wheel2">
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
        </div>{' '}

        </div>
      
        <div className="billboard1">
          <div className="billboard1-text">
            <InfoForm />
          </div>
        </div>
          <div className="pipe left-pipe"></div>
          <div className="pipe right-pipe"></div>
      </div>

      <Road />
    </div>
  )
}

export default Bus
