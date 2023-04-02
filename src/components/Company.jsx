import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';
import finCompany from '../images/simages/finCompany.jpg';
import c9 from '../images/simages/assets9.jpg';
import c10 from '../images/simages/assets10.jpg';
import c11 from '../images/simages/assets11.jpg';
import aelogo from '../images/aerocrics/aelogo.jpg';
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
                <img src={aelogo} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={280} />
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
                    <div className='font-semibold'>Aerocrics</div>
                    <div className='text-xs'>
                        Aero the story so far
                        Aero today is the product of over a decade's effort from people absolutely committed to the production of the best cricket protective equipment.
                        <br />
                        The research and development process that lead to Aero's creation started as far back as the late 1990s.
                        <br />
                        Underground play testing and trialling went on in New Zealand and South Africa through the early years of the last decade.
                        <br />
                        Our first products arrived on the market in 2004 with the introduction of the ground breaking leg , chest and lower body protectors ("Strippers").
                        <br />
                        All these products have been upgraded substantially since their introduction and have been joined over the last few years in the Aero product stable by a flurry of new market leading products:
                        <br />
                        The KPR wicketkeeping range of leg, inners and face protectors
                        The Aero luggage range including the award-winning stand up and stand up tour bags
                        The hand protector range in P1, P2 and P3
                        Forearm protectors in P1, P2 and P3
                        A comprehensive range of groin protection products that integrates with the Strippers
                        Accessories such as the new Fielding Practice Gloves and the wrap around Aero BatGrip
                        And most recently, the Aero Vintage range where substantial Aero DNA has been added to traditional technologies
                        Aero has its headquarters in the North Island of New Zealand and a wholly-owned operational base in Kent in the UK.  It has distribution and retail outlets throughout the cricket playing world.
                    </div>
                    
                </div>

                {/* <div className="flex flex-col gap-2 px-2  py-2 mt-4 rounded-md w-full mx-auto">
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
                </div> */}
            </div>


        </div>
    )
}

export default Company