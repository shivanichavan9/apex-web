import React from 'react';
import img from '../Images/web.svg';
import img2 from '../Images/app.svg';
import img3 from '../Images/hosting.svg';
import img4 from '../Images/consultation.svg';
 
import '../pages/Services.css';

const Services = () => {
    return (
        <div id="services" className="services-container bg-gray-100 py-12">
            <section className="services-section" data-aos="zoom-in-down">
                <div className="services-header my-4 py-4">
                    <h2 className="services-title my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                    <div className="services-line flex justify-center">
                        <div className="line w-24 border-b-4 border-blue-900"></div>
                    </div>
                    <h2 className="services-subtitle mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                        We are deeply committed to the growth and success of our clients.
                    </h2>
                </div>

                <div className="services-cards px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Service Card 1 */}
                        <div className="service-card bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="service-content m-2 text-justify text-sm">
                                <img alt="card img" className="service-image rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                <h2 className="service-title font-semibold my-4 text-2xl text-center">Web Development</h2>
                                <p className="service-description text-md font-medium">
                                    We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.
                                </p>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="service-card bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="service-content m-2 text-justify text-sm">
                                <img alt="card img" className="service-image rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                <h2 className="service-title font-semibold my-4 text-2xl text-center">Mobile App Development</h2>
                                <p className="service-description text-md font-medium">
                                    We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.
                                </p>
                            </div>
                        </div>

                        {/* Service Card 3 */}
                        <div className="service-card bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="service-content m-2 text-justify text-sm">
                                <img alt="card img" className="service-image rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                <h2 className="service-title font-semibold my-4 text-2xl text-center ">Domain and Hosting Services</h2>
                                <p className="service-description text-md font-medium">
                                    We provide domain registration and web hosting services to individuals and organizations to enable them gain visibility in the digital space.
                                </p>
                            </div>
                        </div>

                        {/* Service Card 4 */}
                        <div className="service-card bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="service-content m-2 text-justify text-sm">
                                <img alt="card img" className="service-image rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                <h2 className="service-title font-semibold my-4 text-2xl text-center ">General IT Consultations</h2>
                                <p className="service-description text-md font-medium">
                                    Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-details">
                <div className="services-detail-container m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="services-detail-content flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        {/* Detail Left Section */}
                        <div className="services-detail-left lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='services-detail-icon text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'>
                                    <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                                    <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
                                </svg>
                            </div>
                            <h3 className="services-detail-title text-3xl text-blue-900 font-bold">We <span className='font-black'>Build</span></h3>
                            <p className='services-detail-description my-3 text-xl text-gray-600 font-semibold'>
                                With over 10 years experience in software analysis and design and a deep understanding of the latest IT trends and solutions, we provide customized recommendations and strategies to help you improve your operations, reduce costs, and increase efficiency.
                            </p>
                        </div>

                        {/* Detail Right Section */}
                        <div className="services-detail-right lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='services-detail-icon text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'>
                                    <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                                </svg>
                            </div>
                            <h3 className="services-detail-title text-3xl text-blue-900 font-bold">We <span className='font-black'>Collaborate</span></h3>
                            <p className='services-detail-description my-3 text-xl text-gray-600 font-semibold'>
                                We can collaborate with your existing tech team to scale existing software applications or design customized software applications that suit your everyday needs and simplify various processes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
