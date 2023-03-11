import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';
import finCompany from '../images/simages/finCompany.jpg';
import c9 from '../images/simages/assets9.jpg';
import c10 from '../images/simages/assets10.jpg';
import c11 from '../images/simages/assets11.jpg';

import slide1 from '../images/simages/slide1.jpg';
import slide2 from '../images/simages/slide2.jpg';
import slide4 from '../images/simages/slide4.jpg';

const Company = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white w-full '>
            {/* [#2e9afe] */}
            <div className="options text-center text-white bg-red-800 py-2 px-1  items-center text-lg flex ">
                <svg xmlns="http://www.w3.org/2000/svg"
                    onClick={() => navigate('/home')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-4 h-4   storke-white  cursor-pointer stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <div className="flex-grow">Company Profile</div>
            </div>

            <div className="hp_company mt-4">
                <img src={finCompany} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={280} />
            </div>

            <div className='flex flex-col w-[88%] mx-auto justify-between items-center p-2'>
                <div className="flex items-center justify-between px-2 shadow-sm shadow-gray-200 py-3 mt-4 rounded-md w-full mx-auto">
                    <div className='text-sm'>Company Profile</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-4 h-4 stroke-gray-400 rotate-180  cursor-pointer ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col gap-2 px-2  py-2 mt-4 rounded-md w-full mx-auto">
                    <div className='font-semibold'>Finolex</div>
                    <div className='text-xs'>
                        Shri Pralhad P Chhabria
                        12th March 1930 - 5th May 2016
                        I leave behind my foundation of discipline, uncompromising product quality, a commitment to
                        technological advancements, and the highest quality of manufacturing facilities. One must always
                        strive to grow; but with quality in mind and sincerity in heart
                        Shri Pralhad P. Chhabria established the Finolex Group of companies in 1958 and over the years
                        built it into a well-known conglomerate. He continues to live in our midst through the values we have
                        imbibed from him. Humility and an ability to focus on the basics. With an emphasis on quality,
                        constant learning, and pushing for excellence, he is the one that has made Finolex the fine and
                        flexible company that it is today. And he did this, not by himself, but by bringing people together.
                    </div>
                    <img src={slide1} alt="spacex" />
                </div>

                <div className="flex flex-col gap-2 px-2  py-2 mt-4 rounded-md w-full mx-auto">
                    <div className='font-semibold'>Our Manufacturing Ethos</div>
                    <div className='text-xs'>
                        Our quality towers tall because of the solid foundation our manufacturing operations offer.
                        With ISO 9001:2015 certified plants – two in Maharashtra, in Ratnagiri and Urse; and a third in
                        Masar, Gujarat. Every plant has been instrumental in helping us deliver quality and reliable products
                        across the country. With every employee on the floor aligned to the bigger picture, holding themselves
                        personally accountable for the output, and the reputation we enjoy out in the world.

                        Our flagship facility in Ratnagiri, spread over 650 acres, consists of an open sea cryogenic jetty
                        and storage facility to receive raw materials, a PVC resin manufacturing facility in technical
                        collaboration with Uhde GmbH, Germany, with Hoechst technology, and a PVC pipe manufacturing facility.
                        In house resin manufacture ensures that all our pipe manufacturing facilities in all locations
                        receive a dedicated supply of consistent and superior quality resin. But the thing that really
                        drives our machines across all plants, is the ethos we share. Our common passion for quality.
                    </div>
                    <img src={slide2} alt="spacex" />
                </div>

                <div className="flex flex-col gap-2 px-2  py-2 mt-4 rounded-md w-full mx-auto">
                    <div className='font-semibold'>A Network of Trust</div>
                    <div className='text-xs'>
                    We have over 900 dealers and 21,000 retail touchpoints across the country. Many of the people in this 
                    network have been with us for over 30 years, as members of our parivaar, our family. Over the decades, 
                    we have earned their trust, and they, ours, as families do. Their faith in us has, in turn, inspired their 
                    customers, many of whom swear by our products. Creating a beautifully interwoven tapestry of partnerships. 
                    An interconnected network of collaboration and trust, that is as enduring as the pipes and fittings.
                    </div>
                    <img src={slide4} alt="spacex" />
                </div>
            </div>


        </div>
    )
}

export default Company