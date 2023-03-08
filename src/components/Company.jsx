import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';

import c9 from '../images/simages/assets9.jpg';
import c10 from '../images/simages/assets10.jpg';
import c11 from '../images/simages/assets11.jpg';

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
                <img src={c9} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={280} />
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
                    <div className='font-semibold'>SpaceX</div>
                    <div className='text-xs'>
                        Space Exploration Technologies Corporation (commercial name: SpaceX) is an American private
                         aerospace manufacturer and space transportation company headquartered in Hawthorne, California,
                        USA. SpaceX was founded by entrepreneur Elon Musk in 2002 with the goal of reducing the cost of 
                        space transportation and colonizing Mars. SpaceX has developed the Falcon series of launch 
                        vehicles and the Dragon series of spacecraft for delivering payloads to the earth's center orbit.
                    </div>
                    <img src={c11} alt="spacex" />
                </div>

                <div className="flex flex-col gap-2 px-2  py-2 mt-4 rounded-md w-full mx-auto">
                    <div className='font-semibold'>Starlink</div>
                    <div className='text-xs'>
                    Starlink is a space service company SpaceX that provides high-speed Internet access services covering 
                    the world through a group of low-Earth orbit satellites. As of July 23, 2022, Starlink services are available 
                    in 36 countries and regions.
                    In 2015, SpaceX CEO Elon Musk announced in Seattle the launch of a space high-speed internet project: the Starlink 
                    project. With performance far exceeding that of traditional satellite internet, and a global network not limited by 
                    terrestrial infrastructure, Starlink can provide high-speed Internet service to locations where network service is 
                    unreliable, expensive, or completely non-existent, and may also end Internet blockades that exist in today's world. 
                    Designed to provide high-speed Internet services to everyone in the world. The purpose of the Starlink project is to 
                    develop a "global satellite Internet system" that can be used in environments such as Mars to deploy communication infrastructure 
                    in the solar system.

                    On February 22, 2018, SpaceX successfully launched a Falcon 9 carrier rocket at Vandenberg Air Force Base 
                    in California, USA, and sent two small experimental communication satellites into orbit, and the Starlink 
                    project began. On October 22, 2019, SpaceX CEO Elon Musk successfully tweeted through Starlink, saying that 
                    Starlink has been able to provide space-based Internet services. Starlink aims to provide service in the 
                    northern U.S. and Canada by 2020, and expand its service to nearly the entire globe by 2021. As of February 
                    2023, the number of Starlink satellites in orbit has exceeded 3,500. At the same time, SpaceX also proposed 
                    the second-generation Starlink project, which will rely on Starship to launch and form a satellite constellation 
                    with a number of 29,988 satellites.
                    </div>
                    <img src={c10} alt="spacex" />
                </div>

                <div className="flex flex-col gap-2 px-2  py-2 mt-4 rounded-md w-full mx-auto">
                    <div className='font-semibold'>Achievement</div>
                    <div className='text-xs'>
                        SpaceX has accomplished something that many other private companies, not even state-owned space 
                        agencies, have achieved. In 2008, it designed, built and launched the Falcon 1, the world's first 
                        privately funded orbital-class liquid fuel rocket. In 2009, SpaceX successfully launched a commercial 
                        satellite into orbit using a liquid-fueled rocket. In 2010, for the first time, the spacecraft was 
                        successfully sent to low earth orbit and recovered. Two years later, the spacecraft began to deliver 
                        cargo to the International Space Station. In 2015, the first stage of the Falcon 9 carrier rocket 
                        successfully landed on the landing field, which was the first time that humans successfully recovered 
                        an orbital-class carrier rocket. Today, SpaceX has the ability to launch, recover on land, recover at 
                        sea, reuse the launch vehicle, and launch a manned spacecraft into orbit.
                    </div>
                    <img src={c9} alt="spacex" />
                </div>
            </div>


        </div>
    )
}

export default Company