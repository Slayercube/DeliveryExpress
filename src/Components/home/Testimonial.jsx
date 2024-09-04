import React from 'react'
import styles from './home.module.css'

const Testimonial = () => {
  return (
    <div>
      <section className="relative -mt-40">
        <div className="mx-auto max-w-8xl px-5 py-20 md:px-10 md:py-24" id={styles.headertestimonial}>
          {/* Heading Text */}
          <h2 className="mx-auto mb-6 w-full max-w-3xl text-center text-3xl font-semibold md:mb-12  md:text-5xl">
            What our clients are saying
          </h2>
          {/* Testimonial Wall */}
          <div className="mb-8 gap-5 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]" >
            {/* Item */}
            <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8" id={styles.testimoniallucas}>
              <div className="mb-4 flex flex-row">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
                  
                />
                <div className="flex flex-col">
                  <h6 className="text-base text-dark font-semibold">Lucas Wos</h6>
                  <p className="text-sm text-gray-500">Mentor Teacher</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                “Fuck yea!! I love this shit. Now that's how u do it. <br />Mic Drop!!"
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
              </div>
            </div>
            {/* Item */}
            <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8" id={styles.testimoniallucia}>
              <div className="mb-4 flex flex-row">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <h6 className="text-base text-dark font-semibold">Lucia Belen</h6>
                  <p className="text-sm text-gray-500">Academic Operative Manager</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
                luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
              </div>
            </div>
            {/* Item */}
            <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8" id={styles.testimonialfourgeeks}>
              <div className="mb-4 flex flex-row">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <h6 className="text-base text-dark font-semibold">4geeks Academy</h6>
                  <p className="text-sm text-gray-500">CEO / chairman</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                "Eget dolor urna viverra urna rutrum lorem venenatis auctor. Id
                vitae egestas cursus iaculis sed sit parturient. Arcu eget
                fermentum cursus pretium duis auctor gravida nulla.“Lorem ipsum
                dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus
                venenatis elit ut aliquam, purus sit amet luctus venenatis"
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
              </div>
            </div>
            {/* Item */}
            <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8" id={styles.testimonialjavier}>
              <div className="mb-4 flex flex-row">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <h6 className="text-base text-dark font-semibold">Javier Seiglie</h6>
                  <p className="text-sm text-gray-500">Pre-work Advisor | Senior Mentor ES/EU</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
                luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
              </div>
            </div>
            {/* Item */}
            <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8" id={styles.testimonialruben}>
              <div className="mb-4 flex flex-row">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <h6 className="text-base text-dark font-semibold">Ruben Rebelo</h6>
                  <p className="text-sm text-gray-500">Teacher Assistant</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                "what!!?? Now i know this can't be real, this is finger lickin goodd"
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
              </div>
            </div>
            {/* Item */}
            <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8" id={styles.testimonialdavid}>
              <div className="mb-4 flex flex-row">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <h6 className="text-base text-dark font-semibold">David James</h6>
                  <p className="text-sm text-gray-500">Intern</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
                luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonial