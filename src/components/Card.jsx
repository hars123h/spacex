import wind_turbines from '../images/wind-turbines.svg';
import wind from '../images/wind.jpg';
import React from 'react';
import sample from '../images/simages/sample.jpg';


//[#0096D5] [#00bcd4]


const Card = ({ product_type, product_image, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle, handleClick }) => {


  return (
    <div className='mx-1 mb-2 shadow-md  bg-[#fafff9]  shadow-gray-400 border border-gray-100'  >
      <div className="info text-xs flex flex-col items-center ">
        <img src={sample} alt="comp_img" className='h-40 w-full' />
        {/*<img src={product_image} alt="comp_img" className='h-40 w-full' />*/}
        <div className='px-2 w-full'>
          <div className="title  w-full bg-[#f0f8ff] px-1 py-2 my-1 text-center  font-semibold text-lg">{plan_name}</div>
        </div>
        {product_type === 'long' && (<div className="text-xs font-black text-center px-1 ml-1 w-full text-orange-500">Daily Income, Daily Withdrawals</div>)}
        {/* {product_type==='short' && (<div className="text-xs p-1 w-full  text-red-500 font-extrabold">Daily Income, Daily Withdrawals</div>)} */}
        <div className='text-md p-2 w-full grid grid-cols-2 pt-2 pb-2 text-[10px]'>
          <div className="basic_info text-white flex justify-start gap-1 bg-red-800 py-3 px-2">
            <div className='font-bold'>Plan Price: </div>
            <div className=' text-white font-bold'>&#8377;{new Intl.NumberFormat().format(plan_amount)}</div>
          </div>
          <div className="basic_info text-white flex justify-start gap-1 bg-red-800 py-3 px-2 ">
            <div className='font-bold'>Daily Income: </div>
            <div className='text-white font-bold'>&#8377;{new Intl.NumberFormat().format(plan_daily_earning)}</div>
          </div>
          <div className="basic_info text-white flex justify-start gap-1 bg-red-800 py-3 px-2">
            <div className='font-bold'>Plan Cycle:</div>
            <div className='text-white font-bold'>{plan_cycle} days</div>
          </div>
          <div className="basic_info text-white flex justify-start gap-1 bg-red-800 py-3 px-2 ">
            <div className='font-bold'>Total Income: </div>
            <div className='text-white font-bold'>&#8377;{new Intl.NumberFormat().format(plan_cycle * plan_daily_earning)}</div>
          </div>
        </div>

        {/* {(plan_name==='Walton Plan 6' || plan_name==='Walton Plan 7' || plan_name==='Walton Plan 8' )?<div className="cursor-pointer btn text-white text-center p-2 mt-1 text-lg rounded-md  w-4/5 mx-auto bg-red-400"
            >Click to buy</div>: */}


      </div>
      <div className="cursor-pointer rounded-full btn text-white font-semibold text-center  py-2  px-2 mt-1 text-md mb-2 shadow-md  w-3/5 mx-auto bg-red-800"
        onClick={() => handleClick(product_type, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle)}>
        Buy Now
      </div>
    </div>
  )
}

export default Card