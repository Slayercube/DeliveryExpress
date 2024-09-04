import React from 'react'
import styles from './ContactUs.module.css'

const ContactUs = () => {
  return (
    <main className={`} mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20 ${styles.main1}`}>
      <section>
        <h2 className='mb-4'>Contact Details</h2>
        <img src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" className='rounded-5 w-100' alt="3 Developers" />
      </section>

      <section>
        <h3 className='mt-5 mb-2 text-warning font-bold mb-3'>Helpdesk & Orders</h3>
        <p className='text-light'>Please note that if you couldn't get us, we might be busy,just leave a voice note, we will get back to you.</p>
        <p className='text-light mt-2'>Would you like to place an order or ask about your purchase? You can also contact us via phone, email or chat. If available, please prepare your order number to help us process your request faster.</p>
        <p typeof='email' className='mt-3'><span className='text-success font-bold'>E-Mail</span>: <span className='text-decoration-underline'>ExpressDelivery@outlook.de</span></p>
        <p typeof='number' className='mt-2'><span className='text-success font-bold'>Phone</span>: <span className='text-decoration-underline'>043 508 22 33</span>
        </p>
        <p className='text-primary mt-2'>We're available from Monday to Saturday, between <time className='text-light'>8am</time> and <time className='text-light'>6pm</time>.</p>
        <p className='text-light mt-2'>Are you calling from <strong className='text-secondary'>abroad?</strong> Then please dial the following phone number: <span className='text-danger'>+41 43 508 22 33</span>
        </p>
      </section>


      <section>
        <h3 className='mt-5 mb-2 text-warning font-bold mb-3'>Marketing</h3>
        <p>Would you like to promote our <strong className='font-bold italic text-danger'>firm</strong> ? Feel free to contact us in matters related to promos, media, social media, etc.</p>
        <p typeof='email' className='mt-3'><span className='text-success font-bold'>E-Mail address</span>: <span className='text-decoration-underline'>marketing@ExpressDelivery.com</span></p>
      </section>


      <section>
        <h3 className='mt-5 mb-2 text-warning font-bold mb-3'>Become One of Our Drivers</h3>
        <p className='mt-2'>If you would like to become one of our drivers, get in touch with us using via mail drivers@ExpressDelivery.de.</p>
        <p className='mt-2'>To learn more about the whole process and our requirements, please see our page or contact us.</p>
      </section>


      <section>
        <h3 className='mt-5 mb-2 text-warning font-bold mb-3'>Return Address</h3>
        <address>
          <p>Express Delivery</p>
          <p>königsstr.27</p>
          <p>81253 giesing</p>
          <p>Deutschland</p>
        </address>
        <p className='mt-2 text-light'>Please kindly read about our Return Policy in our <a className={`text-decoration-underline policy2 ${styles.policy2}`} href='./termsOfServices'>Terms and Conditions</a>  or contact our Customer Service if you need more info regarding returns.</p>
      </section>
    </main>
  )
}

export default ContactUs
