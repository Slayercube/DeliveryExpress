
import { useNavigate } from 'react-router-dom'
import styles from './home.module.css'
import mapImage from './map.png'
const Hero = () => {
  let navigate = useNavigate()

  function handleClick() {
    navigate('/app')
  }

  return (
    <div id={styles.headerhero}>
      <header>
        {/* Hero top */}
        <div className={styles.img} id={styles.headerimg} >
          {/* Container */}
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
            {/* Title */}
            <h1 className="mb-6 max-w-3xl text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12">
              Welcome to the Fastest Delivery Service
            </h1>
            {/* Buttons */}
            <div className="flex items-stretch">
              <a
                href="#" onClick={handleClick}
                className="mr-6 rounded-md bg-primary px-20 py-4 text-center font-bold text-white lg:mr-8"
              >
                CLick to Send
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
                className='me-5 w-80'


              />
            </a>
            <div className="max-w-xl lg:mr-[520px] lg:max-w-xs">
              {/* Title */}
              <h3 className="text-2xl font-bold md:text-3xl">Introduction</h3>
              {/* Divider */}
              <div className="my-6 w-16 border-t border-white"></div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
                lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
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