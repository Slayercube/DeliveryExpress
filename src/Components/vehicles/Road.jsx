import './road.css'
const Road = () => {
  return (
    <div>
      <div className="road-sign-pole">
        <div className="road-sign" style={{ left: '100%' }}></div>{' '}
      </div> 
      
      <div className="road-sign-pole">
        <div className="road-sign" style={{ left: '100%' }}></div>{' '}
      </div> 
      
      {/* <div className="road-sign-pole">
        <div className="road-sign" style={{ left: '100%' }}></div>{' '}
      </div> */}

      <div className="road translate-y-[20px]">
        {' '}
        {/* Move the road down by 20px */}
      </div>
    </div>
  )
}

export default Road
