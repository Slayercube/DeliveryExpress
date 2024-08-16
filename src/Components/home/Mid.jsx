import React from 'react'
import './style.css'
import { color } from 'framer-motion'

const Mid = () => {
  return (
    <div className="container mx-auto p-4">
      <section id="features">
        <div className="bb ze ki yn 2xl:ud-px-12.5">
          <div className="tc uf zo xf ap zf bp mq">
            {/* <!-- Small Features Item --> */}
            <div className="animate_top kn to/3 tc cg oq">
              <div className="tc wf xf cf ae cd rg mh">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 h-16"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-.75-13a.75.75 0 01.75.75v4.25h3.25a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75V7.75a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                </svg>
              </div>
              <div>
                <h4 className="ek yj go kk wm xb" style={{ color: 'white' }}>
                  24/7 Support
                </h4>
                <p style={{ color: 'gray' }}>
                  Lorem ipsum dolor sit amet conse adipiscing elit.
                </p>
              </div>
            </div>

            {/* <!-- Small Features Item --> */}
            <div className="animate_top kn to/3 tc cg oq">
              <div className="tc wf xf cf ae cd rg nh">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                </svg>
              </div>
              <div>
                <h4 className="ek yj go kk wm xb" style={{ color: 'white' }}>
                  Fast Delivery
                </h4>
                <p style={{ color: 'gray' }}>
                  Lorem ipsum dolor sit amet conse adipiscing elit.
                </p>
              </div>
            </div>

            {/* <!-- Small Features Item --> */}
            <div className="animate_top kn to/3 tc cg oq">
              <div className="tc wf xf cf ae cd rg oh">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
              </div>
              <div>
                <h2 className="ek yj go kk wm xb" style={{ color: 'white' }}>
                  Team Work
                </h2>
                <p style={{ color: 'gray' }}>
                  Lorem ipsum dolor sit amet conse adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mid
