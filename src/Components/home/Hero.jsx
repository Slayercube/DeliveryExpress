

import { useNavigate } from 'react-router-dom'
import styles from './home.module.css'
import mapImage from './map.png'
const Hero = () => {
 const navigate = useNavigate()

 function handleClick() {
  navigate('/app')
 }

 
  
  return (
    <div>
    <header>
      {/* Hero top */}
      <div className={styles.img} >
        {/* Container */}
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          
          {/* Title */}
          <h1 className="mb-6 mt-6  italic text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12">
            Welcome to the Fastest Delivery Service !
          </h1>
          {/* Buttons */}
          <div className="flex items-stretch">
            <a
              href="#" onClick={handleClick}
              className={`mr-6 rounded-5 px-20 py-4 text-center font-bold lg:mr-8 ${styles.clickToSendButton} `}
            >
              Click to send
            </a>
           
          </div>
        </div>
      </div>
      {/* Hero bottom */}
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="relative flex max-w-7xl flex-col gap-4 lg:flex-row lg:justify-end">
          {/* Arrow down */}
          <a href="#" className='mr-20 mt-5'>
           
        <img
          src={mapImage}
          alt="Map"
          
          
        />
      </a>
          <div className="max-w-xl lg:mr-[520px] lg:max-w-xs">
            {/* Title */}
            <h3 className="text-2xl font-bold md:text-3xl">Introduction</h3>
            {/* Divider */}
            <div className="my-6 w-16 border-t border-white"></div>
            <p className="text-sm text-gray-500">
              Welcome to best Delivery Service. Was establish in 2015, founded by our Members aka the Developers, <strong style={{color: 'gold'}}>Joao, Deepak and Saeed.</strong> We offer nothing but the top quality services for Delivery of any type of packages from <b style={{color: 'purple'}}>XS to L</b> you name it. Due to your package, we organise the best and safe vehicle for transport. You might be wondering, how will we calculate the price, we got u covered!, If you click the "<strong style={{color: 'purple'}}> Start button above</strong>", it links you to a page where you can enter the weight & size of your packages and aslo set a pickup location and a destination. For <b>new customers</b>, you get <b style={{color: 'gold'}}>70% off</b> plus with a customer card.
            </p>
          </div>
          {/* Image */}
          <img src="https://static.vecteezy.com/system/resources/previews/008/481/699/non_2x/3d-deliveryman-going-to-delivery-package-png.png"
            alt=""
            className="relative bottom-0 right-0 mt-12 w-[480px] object-cover lg:absolute lg:mt-0 lg:h-[480px]"
          />
        </div>
      </div>
    </header>

    </div>
  )
}

export default Hero