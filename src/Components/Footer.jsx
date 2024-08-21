


const Footer = () => {
  return (
   <div className="footer">
   <footer className="block" style={{ color: 'white' }}>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="grid grid-cols-[auto] justify-between gap-6 max-[991px]:grid-flow-col max-[991px]:[grid-template:'.'_auto_'.'_auto_/_0.75fr_0.75fr_0.75fr] max-[767px]:gap-y-8 max-[479px]:auto-cols-auto max-[479px]:grid-flow-dense sm:grid-cols-2 sm:gap-4 md:grid-cols-[max-content_auto_auto_auto_auto] lg:gap-10">
            <div className="flex max-w-sm grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:[grid-area:span_1/span_4/span_1/span_4] max-[767px]:flex-col max-[767px]:[grid-area:span_1/span_2/span_1/span_2] lg:mr-10">
              <div className="flex flex-col items-start gap-6">
                <a href="#" className="inline-block max-w-full text-white">
                  {/* <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d6f4e6cf96_Group%2047874-3.png"
                    alt=""
                    className="inline-block max-h-10"
                    style={{ filter: 'invert(1)' }}
                  /> */}
                   <strong>  Delivery express</strong>
                </a>
                <p className="text-gray-500">
                  Phasellus a nulla in neque lacinia posuere. Etiam auctor
                  facilisis augue vel gravida.
                </p>
              </div>
              <div className="mt-12 grid w-full max-w-52 grid-flow-col grid-cols-4 gap-3 mb-8 md:mb-0">
                <a
                  href="#"
                  className="mx-auto flex max-w-6 flex-col items-center justify-center text-white"
                >
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945b4ae6cf7b_Vector-1.svg"
                    alt=""
                    className="inline-block"
                    style={{ filter: 'invert(1)' }}
                  />
                </a>
                <a
                  href="#"
                  className="mx-auto flex max-w-6 flex-col items-center justify-center text-white"
                >
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945560e6cf77_Vector.svg"
                    alt=""
                    className="inline-block"
                    style={{ filter: 'invert(1)' }}
                  />
                </a>
  
             
              <a
                href="#"
                className="mx-auto flex max-w-6 flex-col items-center justify-center text-white"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940535e6cf7a_Vector-3.svg"
                  alt=""
                  className="inline-block"
                  style={{ filter: 'invert(1)' }}
                />
              </a>
              <a
                href="#"
                className="mx-auto flex max-w-6 flex-col items-center justify-center text-white"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9433a9e6cf88_Vector-2.svg"
                  alt=""
                  className="inline-block"
                  style={{ filter: 'invert(1)' }}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase" style={{color : 'white'}}>Solution</p>
            </div>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Marketing
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Analytics
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Commerce
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Insights
            </a>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase" style={{color : 'white'}}>Support</p>
            </div>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Pricing
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Documentation
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Guides
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              API&nbsp;Status
            </a>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase" style={{color : 'white'}}>Docs</p>
            </div>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Pricing
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              API&nbsp;Guide
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              API Status
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Dev Guide
            </a>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase" style={{color : 'white'}}>Comapny</p>
            </div>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Blog
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Jobs
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Press
            </a>
            <a
              href="#"
              className="py-2 text-sm font-normal text-gray-500 transition hover:text-blue-600"
            >
              Partners
            </a>
          </div>
        </div>
        {/* Divider */}
        <div className="mb-14 mt-16 w-full border-b border-white"></div>
        <div className="flex justify-between md:flex-row flex-col gap-8 md:gap-0">
          <div className="flex flex-col items-start gap-2">
            <h5 className="text-xl font-bold">Join our newsletter</h5>
            <p className="text-sm sm:text-sm">
              Keep up to date with everything 
            </p>
          </div>
          <div className="mb-4 w-full max-w-sm">
            <form
              name="email-form"
              method="get"
              className="relative max-w-full"
            >
              <input
                type="email"
                className="mb-2.5 block h-9 w-full rounded-md border border-solid border-white bg-gray-100 px-3 py-6 align-middle text-sm placeholder:text-black text-black focus:border-blue-600"
                maxLength="256"
                name="email-5"
                placeholder="Enter your email"
                required=""
              />
              <input
                type="submit"
                value="Join"
                className="sm:absolute right-0 top-0 inline-block h-full cursor-pointer bg-primary px-6 py-2.5 text-center font-semibold text-white relative w-full sm:w-auto sm:right-0 rounded-tr-md rounded-br-md"
                
              />
            </form>
          </div>
        </div>
        {/* Divider */}
        <div className="mb-14 mt-16 w-full border-b border-white"></div>
        <div className="flex md:flex-row items-start justify-between sm:flex-col flex-col-reverse md:items-center">
          <p className="text-sm sm:text-base">
            © Copyright 2021. All rights reserved.
          </p>
          <div className="text-center font-semibold">
            <a
              href="#"
              className="inline-block py-2 pl-5 font-normal text-white transition hover:text-blue-600 px-2.5 lg:pl-12"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="inline-block py-2 pl-5 font-normal text-white transition hover:text-blue-600 px-2.5 lg:pl-12"
            >
              License
            </a>
            <a
              href="#"
              className="inline-block py-2 pl-5 font-normal text-white transition hover:text-blue-600 px-2.5 lg:pl-12"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
   </div>
  );
};

export default Footer;