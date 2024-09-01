import React from 'react'
import styles from './TermsOfServices.module.css'

const TermsOfServices = () => {
  return (
    <section>
    {/* Container */}
    <div className={`mx-auto flex justify-center text-center mt-20  w-full max-w-7xl px-5 md:px-10 lg:px-24 ${styles.TermsOfServices}`}>
      {/* Component */}
      <div className="flex max-w-3xl flex-col py-16 md:py-24 lg:py-32">
        {/* Title */}
        <h1 className="mb-10 text-3xl text-danger font-bold md:text-5xl">Terms Of Services</h1>
        <p className="mb-5 text-sm font-bold sm:text-base text-light">Last updated as of October 17, 2022</p>
        {/* Term */}
        <div className="mb-6 flex flex-col gap-y-3">
          <p className="font-bold uppercase text-warning sm:text-base">1. Services</p>
          <p className="text-sm sm:text-base">1.1. Delivery Express offers a range of design services, including but not limited to graphic design, web design, branding, and illustration. <br />1.2. The Company will provide the agreed-upon services with professionalism and expertise, following industry standards and best practices. <br />1.3. The specific details, deliverables, timelines, and pricing for each project will be</p>
        </div>
        {/* Term */}
        <div className="mb-6 flex flex-col gap-y-3">
          <p className="font-bold uppercase text-warning sm:text-base">2. Client Responsibilities</p>
          <p className="text-sm sm:text-base">2.1. The client agrees to provide accurate and timely information, materials, and feedback necessary for the successful completion of the project. <br />2.2. The client is responsible for obtaining any necessary permissions, licenses, or copyrights for materials provided to the Company for use in the project. <br />2.3. The client acknowledges that delays or failures in providing required materials or feedback may impact project timelines and deliverables.</p>
        </div>
        {/* Term */}
        <div className="mb-6 flex flex-col gap-y-3">
          <p className="font-bold uppercase text-warning sm:text-base">3. Intellectual Property</p>
          <p className="text-sm sm:text-base">3.1. Any intellectual property rights, including but not limited to copyrights and trademarks, in the final deliverables created by the Company shall be transferred to the client upon receipt of full payment, unless otherwise agreed upon in writing. <br />3.2. The client warrants that any materials provided to the Company for use in the project do not infringe upon the intellectual property rights of any third party.</p>
        </div>
        {/* Term */}
        <div className="mb-6 flex flex-col gap-y-3">
          <p className="font-bold uppercase text-warning sm:text-base">4. Payment</p>
          <p className="text-sm sm:text-base">4.1. The client agrees to pay the Company the agreed-upon fees for the services rendered. <br />4.2. Payment terms, including the amount, method, and schedule, will be specified in the separate agreement or proposal. <br />4.3. The Company reserves the right to suspend or terminate services in the event of non-payment or late payment.</p>
        </div>
        {/* Term */}
        <div className="mb-6 flex flex-col gap-y-3">
          <p className="font-bold uppercase text-warning sm:text-base">5. Confidentiality</p>
          <p className="text-sm sm:text-base">5.1. The Company and the client agree to keep confidential any proprietary or sensitive information disclosed during the course of the project. <br />5.2. Both parties shall take reasonable measures to protect such information from unauthorized access or disclosure.</p>
        </div>
        {/* Term */}
        <div className="mb-6 flex flex-col gap-y-3">
          <p className="font-bold uppercase text-warning sm:text-base">6. Limitation of Liability</p>
          <p className="text-sm sm:text-base">6.1. The Company shall not be liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use the services provided. <br />6.2. The client acknowledges that the Company's liability is limited to the amount paid for the services rendered.</p>
        </div>
        {/* Term */}
        <div className="mb-6 flex flex-col gap-y-3">
          <p className="font-bold uppercase text-warning sm:text-base">7. Termination</p>
          <p className="text-sm sm:text-base">7.1. Either party may terminate this Agreement with written notice if the other party breaches any material provision and fails to remedy the breach within a reasonable time. <br />7.2. In the event of termination, the client shall pay the Company for the services provided up to the termination date.</p>
        </div>
        {/* Term */}
        <div className="mb-6 flex flex-col gap-y-3">
          <p className="font-bold uppercase text-warning sm:text-base">8. Governing Law</p>
          <p className="text-sm sm:text-base">8.1. This Agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. <br />8.2. Any disputes arising out of this Agreement shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].</p>
        </div>
        {/* Term */}
        <div className="mb-6 min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
        <p className="mb-6 text-sm sm:text-base">By accessing, browsing, or utilizing any design services, communication channels, or materials provided by Express, including but not limited to graphic design, web design, branding, illustration, and user interface design, whether through our website, email, phone, or any other means, you expressly acknowledge, understand, and agree that you have carefully read, comprehended, and fully consent to be legally.</p>
      </div>
    </div>
  </section>
  )
}

export default TermsOfServices
