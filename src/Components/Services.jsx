import React from 'react'
import styles from './Services.module.css'

const Services = () => {
    return (
        <main className=' mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20'>
            <div>
                <section className="services mt-5">
                    <h1 className=' mb-5 text-center'>Bringing Happiness to Your Home. Learn More About our Delivery Services</h1>

                    <img src='https://drich-security.com/wp-content/uploads/2021/05/SECURE-COURIER-SERVICES.png' className='w-100 rounded-5'
                        width={100}
                    />
                </section>


                <section className='mt-5'>
                    <p className='mb-3'>
                        Our mission goes beyond just selling furniture. We're here to make every step of bringing new joy into your home as delightful as possible. From the moment you choose your perfect piece to the instant it finds its place in your home, we're here to ensure a smooth, happy journey.
                    </p>

                    <p>
                        But <strong className={`noStop text-danger ${styles.noStop}`}>it doesn't stop there</strong>; we offer a range of extra services designed to ease your experience further. Whether it's assembling your new pieces we delivered to perfection, <strong>packages delivery</strong>, help with relocation <strong className='text-success'>removing old items, or taking care of unwanted packaging</strong>, we're committed to providing a comprehensive service that covers all your needs, making room for happiness without any hassle.
                    </p>

                    <div>
                        <h3 className='mt-5 text-warning font-bold mb-3'>
                            Choose Your Perfect Delivery Option
                        </h3>
                        <p className='text-light'>At Beliani, we believe in making happiness accessible from the very first step. That's why our standard delivery service is offered at no extra charge, bringing your selected pieces right to the curbside. This hassle-free approach ensures that your journey to a happier home begins on a positive note, with minimal effort required from you.

                            For those looking for an extra touch of convenience and service, we go beyond the basics. Explore our premium delivery options designed to cater to your specific needs, ensuring your new furniture not only arrives safely but is also ready for immediate enjoyment.</p>
                    </div>

                </section>

                <section className='text-center mt-5 flex'>
                    <div className=' flex row'>
                        {/* bóxes */}
                        <div className='col-md-6 col-lg-6 col-sm-6'>
                            <img src='https://res.cloudinary.com/dzfrjt8bq/image/upload/v1725136699/room-of-choice-delivery-removebg-preview_zy71cy.png' className='col-md-6 col-lg-6 col-sm-6 inline' />
                            <h5 className='mt-4 text-center text-danger mb-4'>Home Delivery: Room of Choice</h5>
                            <p className='text-left text-secondary'>Imagine the comfort of having your new furniture piece carefully brought directly to the room you've prepared for it. Whether it's up a standard flight of stairs or just through the front door, our team handles every detail with care. Our Room of Choice delivery option does just that.</p>
                        </div>


                        {/* screwdriver */}
                        <div className='col-md-6 col-lg-6 col-sm-6'>
                            <img src='https://res.cloudinary.com/dzfrjt8bq/image/upload/v1725136709/furniture-assembly-removebg-preview_q3vsm6.png' className='col-md-6 col-lg-6 col-sm-6 inline' />
                            <h5 className='mt-4 text-center text-danger mb-4'>Home Delivery & Assembly</h5>
                            <p className='text-left text-secondary'>
                                For those who value ease and efficiency, our Delivery and Assembly option elevates your experience. Not only do we deliver your chosen furniture to your desired room, but we also take care of the assembly. Leave your tools in the drawer and let our skilled professionals transform flat-pack puzzles into stunning furniture, ready for you to enjoy.
                            </p>
                        </div>

                    </div>
                </section>


                <section className='text-center mt-5 flex'>
                    <div className="flex row">
                        {/* disposal */}
                        <div className='col-md-6 col-lg-6 col-sm-6'>
                            <img src='https://res.cloudinary.com/dzfrjt8bq/image/upload/v1725140085/delivery-and-disposal-removebg-preview_vnvwze.png' className='col-md-6 col-lg-6 col-sm-6 inline' />
                            <h5 className='mt-4 text-center text-danger mb-4'>Home Delivery & Old Furniture Disposal</h5>
                            <p className='text-left text-secondary'>
                                Transitioning your space with new furniture has never been easier. With our delivery and old furniture disposal service, we handle everything. After delivering your new piece to the designated room, we'll take away your old furniture, ensuring a smooth and effortless changeover. This service is ideal for those looking to refresh their home's look with minimal disruption, making space for new memories without the clutter of the old.
                            </p>
                        </div>


                        {/* assemble */}
                        <div className='col-md-6 col-lg-6 col-sm-6'>
                            <img src='https://res.cloudinary.com/dzfrjt8bq/image/upload/v1725140091/assembly-and-disposal-removebg-preview_ylqfmd.png' className='col-md-6 col-lg-6 col-sm-6 inline' />
                            <h5 className='mt-4 text-center text-danger mb-4'>Home Delivery, Assembly & Old Furniture Disposal</h5>
                            <p className='text-left text-secondary'>
                                Experience the ultimate convenience with our comprehensive service that combines delivery, assembly, and disposal. Perfect for those embarking on a fresh start or a major home makeover, this option ensures that every aspect of your furniture update is taken care of. From the moment your new furniture arrives to the assembly and disposal of your old pieces, we provide a full-circle service that leaves you with nothing but a beautifully furnished space to enjoy.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='mt-5'>
                    <h3 className='mt-5 font-bold mb-3 text-warning'>Few Things to Remember</h3>
                    <p className='text-light'>
                        We understand that happiness is in the details, which is why we offer tailored delivery services to fit your needs. With careful coordination and cooperation with external partners, we ensure your items arrive safely within 1-2 weeks, ready to add that touch of happiness to your space.
                    </p>

                    <p className='text-light mt-3'>Please note, while we strive to reach every home, our services might not be available in certain postal code areas due to logistical limitations. Besides that, there are some other restrictions to keep in mind.
                    </p>
                    
                    <ul className='ms-4 mt-4 text-decoration-visible'>
                        <li className='mb-2'>Our Home Delivery and Assembly isn't available in certain postal regions. To learn more about that, please visit our delivery page</li>
                        <li className='mb-2'>Our assembly doesn't include any electrical services, plumbing and wall or ceiling mounting - for these kinds of tasks you'll have to reach out to local, experienced professionals.</li>
                        <li>When it comes to disposal of old furniture, we only ask you to prepare the pieces you want to get rid of, so our team can fit them through the door and staircase. Please note that every piece you've ordered permits the disposal of one old piece that weights no more than 60kg.</li>
                    </ul>

                    <p className='mt-4 text-light'>We're constantly working to expand our reach and bring happiness to as many homes as possible. To learn more about deliveries, please head to this page or reach out to our <a className={`text-decoration-underline text-primary ${styles.cutomerService}`} href='./contactUs'>customer service</a>.</p>

                    <img src='https://beliani.info/Content_Marketing/delivery-services-3.png' className='inline w-100 mt-5 rounded-5' alt='man fixing a furniture'/>

                    <h3 className='mt-5 font-bold mb-3 text-warning'>Ready to Experience Joyful Deliveries?</h3>
                    <p className='text-light mt-3'>Your new beginning is just a click away. Choose the delivery service that best suits your needs and let us take care of the rest. At Beliani, we're not just delivering stuffs; we're <strong className='text-danger'><q>Delivering Happiness</q></strong>.</p>
                </section>
            </div>
        </main>

    )
}

export default Services
