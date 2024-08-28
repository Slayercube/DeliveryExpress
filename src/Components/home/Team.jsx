
const Team = () => {
  return (
  <div>
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Our Team Members
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          The Founders of Delivery Express, graduated from 4Geeks Academy with some high skills.
        </p>
        {/* Content */}
        <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 md:gap-4 lg:gap-6">
         
          
         
          {/* Item */}
          <div className="mx-auto flex w-full flex-col items-center gap-4 py-8 text-center md:px-8 md:py-4 lg:px-12">
            <img
              src="https://static.vecteezy.com/system/resources/previews/035/094/277/non_2x/ai-generated-joyful-animated-cat-playing-in-vibrant-meadow-sunset-photo.jpg"
              alt=""
              className="mb-4 inline-block h-40 w-40 rounded-full object-cover"
            />
            <p className="font-bold">Saeed</p>
            <p className="text-center text-sm text-gray-500">Product Manager</p>
            <div className="mt-4 flex">
              <a
                href="#"
                className="mr-2 inline-block h-8 w-8 max-w-full text-black"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947193e6cf6a_FacebookLogo%20(4).svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <a
                href="#"
                className="inline-block h-8 w-8 max-w-full text-black"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94e916e6cf66_InstagramLogo%20(4).svg"
                  alt=""
                  className="inline-block"
                />
              </a>
            </div>
          </div>
          {/* Item */}
          <div className="mx-auto flex w-full flex-col items-center gap-4 py-8 text-center md:px-8 md:py-4 lg:px-12">
            <img
              src="https://preview.redd.it/cute-cartoon-cats-v0-rmd70w7dy13b1.png?width=640&crop=smart&auto=webp&s=65acf7d096d04ae41972e89e97cba305b49eb6b4"
              alt=""
              className="mb-4 inline-block h-40 w-40 rounded-full object-cover"
            />
            <p className="font-bold">Jaouu</p>
            <p className="text-center text-sm text-gray-500">
              Webflow Developer
            </p>
            <div className="mt-4 flex">
              <a
                href="#"
                className="mr-2 inline-block h-8 w-8 max-w-full text-black"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947193e6cf6a_FacebookLogo%20(4).svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <a
                href="#"
                className="inline-block h-8 w-8 max-w-full text-black"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94e916e6cf66_InstagramLogo%20(4).svg"
                  alt=""
                  className="inline-block"
                />
              </a>
            </div>
          </div>
          {/* Item */}
          <div className="mx-auto flex w-full flex-col items-center gap-4 py-8 text-center md:px-8 md:py-4 lg:px-12">
            <img
              src="https://i.redd.it/cute-cartoon-cats-v0-20bojqidy13b1.png?width=1456&format=png&auto=webp&s=93e496f91016809a038cf36dba84950e5a3b5634"
              alt=""
              className="mb-4 inline-block h-40 w-40 rounded-full object-cover"
            />
            <p className="font-bold">Sidhu</p>
            <p className="text-center text-sm text-gray-500">Web Desiner</p>
            <div className="mt-4 flex">
              <a
                href="#"
                className="mr-2 inline-block h-8 w-8 max-w-full text-black"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947193e6cf6a_FacebookLogo%20(4).svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <a
                href="#"
                className="inline-block h-8 w-8 max-w-full text-black"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94e916e6cf66_InstagramLogo%20(4).svg"
                  alt=""
                  className="inline-block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Team