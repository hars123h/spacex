import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import { getAuth } from 'firebase/auth';
import axios from 'axios';
import BASE_URL from '../api_url';
import { AmountContext } from '../App';
import { useContext } from 'react';
import tuborg_logo from '../images/tuborg_logo.svg';
import asset35 from '../images/assets3/asset 5.avif';
import asset36 from '../images/assets3/asset 6.avif';
import asset37 from '../images/assets3/asset 7.avif';
import asset38 from '../images/assets3/asset 8.avif';
import lenskart_logo from '../images/lenskart_logo.png';
import ubon_home from '../images/ubon_home.png';
import ubon_user from '../images/ubon_user.png';
import ubon_group from '../images/ubon_group.png';
import book_image from '../images/book_image.png';
import logo from '../images/thar_images/logo.png';
import assets9 from '../images/simages/assets9.jpg';
import steam from '../images/simages/team.jpg';
import spacex from '../images/simages/ologo.png';
import aelogo from '../images/aerocrics/aelogo.jpg';


const Team = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [teamDetails, setTeamDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentVisible, setCurrentVisible] = useState('level1');
  const [level1, setLevel1] = useState([]);
  const [level2, setLevel2] = useState([]);
  const [level3, setLevel3] = useState([]);
  const amountDetails = useContext(AmountContext);
  const [assetValue, setAssetValue] = useState(0);


  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);


  const getUserDetails = async () => {
    const details = await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(({ data }) => data);
    const arr1 = await axios.post(`${BASE_URL}/lvl1`, { user_id: localStorage.getItem('uid') }).then(({ data }) => data.level1);
    const arr2 = await axios.post(`${BASE_URL}/lvl2`, { user_id: localStorage.getItem('uid') }).then(({ data }) => data.level2);
    const arr3 = await axios.post(`${BASE_URL}/lvl3`, { user_id: localStorage.getItem('uid') }).then(({ data }) => data.level3);
    console.log(details);
    setUserDetails(details);
    setLevel1(arr1);
    setLevel2(arr2);
    setLevel3(arr3);
    for (let i = 0; i < arr1.length; i++) {
      setAssetValue((prev) => prev + arr1[i].balance);
    }
    for (let i = 0; i < arr2.length; i++) {
      setAssetValue((prev) => prev + arr2[i].balance);
    }
    for (let i = 0; i < arr3.length; i++) {
      setAssetValue((prev) => prev + arr3[i].balance);
    }
  }

  // const wSummary = async({user_id}) => {
  //   const datas = await axios.post(`${BASE_URL}//withdrawalSum`, {user_id:user_id})
  //   .then(({data})=>data.wSum)
  //   console.log(datas);
  // }

  useLayoutEffect(() => {
    getUserDetails().then(() => {
      setLoading(false);
    })
  }, []);

  if (loading || userDetails === null) {
    return (
      <div className='h-screen grid place-items-center'>
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <div className='bg-white'>
      {/* [#2e9afe] */}
      <div className="top flex items-center my-auto text-center h-10 p-1 bg-red-800 text-white text-md font-medium">
        <div className='absolute flex w-32 cursor-pointer' onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  storke-white  cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className='flex-grow'>My Team</div>
      </div>

      {/* <div className="flex flex-row justify-between items-center p-2 border-b border-gray-300" >
        <div className='flex flex-row justify-between items-center flex-grow mx-2'>
          <input type="date" name="date_from" id="date_from" 
          className=' outline-none rounded-full bg-gray-100 py-[2px] w-[100px]' />
          <div className='font-medium mx-1'>to</div>
          <input type="date" name="date_from" id="date_from" 
          className='outline-none rounded-full bg-gray-100 py-[2px] w-[100px]' />
        </div>
        <div>
          <button className="bg-red-800 text-white text-xs px-2 rounded-full py-[3px] flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-3 h-3 stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <div>search for</div>
          </button>
        </div>
      </div> */}
      <div>
        <img src={aelogo} alt="team" />
      </div>
      {/*userDetails.directRecharge * (amountDetails.level1_percent) / 100) + (userDetails.indirectRecharge * (amountDetails.level2_percent) / 100) + (userDetails.in_indirectRecharge * (amountDetails.level3_percent) / 100 */}
      <div className="flex border-b border-gray-300">
        <div className="flex flex-col w-1/3 py-1 px-2 border-r border-gray-300">
          <div className='text-gray-700 text-[10px] leading-3'>Team Balance (&#8377;)</div>
          <div className='text-gray-800 text-2xl'><span className='text-sm'>&#8377;</span>{assetValue}</div>
        </div>
        <div className="flex flex-col w-1/3 py-1 px-2 border-r border-gray-300">
          <div className='text-gray-700 text-[10px] leading-3'>Team recharge (&#8377;)</div>
          <div className='text-gray-800 text-2xl'><span className='text-sm'>&#8377;</span>{(userDetails.directRecharge + userDetails.indirectRecharge + userDetails.in_indirectRecharge)}</div>
        </div>
        <div className="flex flex-col w-1/3 py-1 px-2">
          <div className='text-gray-700 text-[10px] leading-3'>Team Number</div>
          <div className='text-gray-800 text-2xl'>{userDetails.directMember.length + userDetails.indirectMember.length + userDetails.in_indirectMember.length}</div>
        </div>
      </div>

      <div className='flex flex-col items-center w-full   bg-white '>


        <div className="flex items-center w-full font-[300]">
          <div className={`${currentVisible === 'level1' ? 'bg-team_sl text-red-700 border-b-2 border-red-700' : 'border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-gray-200 text-gray-600'}  text-center text-sm w-1/3`} onClick={e => setCurrentVisible('level1')}>
            <div>Level 1</div>
            <div><span className='text-xs'>&#8377;</span>{userDetails.directRecharge}</div>
          </div>
          <div className={`${currentVisible === 'level2' ? 'bg-team_sl text-red-700 border-b-2 border-red-700' : 'border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-gray-200 text-gray-600'}  text-center text-sm w-1/3`} onClick={e => setCurrentVisible('level2')}>
            <div>Level 2</div>
            <div><span className='text-xs'>&#8377;</span>{userDetails.indirectRecharge}</div>
          </div>
          <div className={`${currentVisible === 'level3' ? 'bg-team_sl text-red-700 border-b-2 border-red-700' : 'border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-gray-200 text-gray-600'}  text-center text-sm w-1/3`} onClick={e => setCurrentVisible('level3')}>
            <div>Level 3</div>
            <div><span className='text-xs'>&#8377;</span>{userDetails.in_indirectRecharge}</div>
          </div>
        </div>

        {currentVisible === 'level1' && (
          <div className='flex text-red-800 items-center font-semibold flex-col w-full  text-lg  mt-0'>
            {/* <div className='flex flex-col w-full'>
              <div>Level 1 Member: {userDetails.directMember.length}</div>
              <div>Level 1 Earning: &#8377;{(userDetails.directRecharge) * (amountDetails.level1_percent / 100)}</div>
            </div> */}

            {level1.length === 0 ? (<div className='text-center text-gray-400 font-medium mt-5 text-sm'>No record</div>) : null}

            {/*{Math.max(0,element.recharge_amount + element.earning - element.balance)} */}
            {level1.map((element, index) => {
              return (
                <div key={index} className='flex flex-col font-semibold justify-between w-full border leading-3 border-gray-300 text-[10px] py-4 px-2'>
                  <div className='flex items-start gap-3 w-full'>
                    <img src={aelogo} alt="turbo_logo" width={70} className='m-1' />
                    <div className='text-sky-500 flex flex-col'>
                      <div className='text-gray-700'>Name: {String(element.mobno).substring(0, 3) + "****" + String(element.mobno).substring(7)}</div>
                      <div>Recharge: {(element.recharge_amount)}</div>
                      <div>withdraw:
                        {element.withdrawal_sum}
                      </div>
                    </div>
                    <div className='flex flex-col  items-end flex-grow'>
                      <div className='text-sky-500'>phone: {String(element.mobno).substring(0, 3) + "****" + String(element.mobno).substring(7)}</div>
                      <div className='text-green-500 font-medium'>Recommended number: {(element.directMember.length + element.indirectMember.length + element.in_indirectMember.length)}</div>
                      <div className='text-fuchsia-600'>Registration time: {new Date(element.time).getDate() + '-' + new Date(element.time).getMonth() + '-' + new Date(element.time).getFullYear()}</div>
                      <div className='text-right text-fuchsia-600'>{new Date(element.time).getHours() + ":" + new Date(element.time).getMinutes() + ":" + new Date(element.time).getSeconds()}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {currentVisible === 'level2' && (
          <div className='flex text-red-800 items-center font-semibold flex-col w-full  text-lg  mt-0'>
            {/* <div className='flex flex-col w-full'>
              <div>Level 2 Member: {userDetails.indirectMember.length}</div>
              <div>Level 2 Earning: &#8377;{(userDetails.indirectRecharge) * (amountDetails.level2_percent / 100)}</div>
            </div> */}

            {level2.length === 0 ? (<div className='text-center text-gray-400 font-medium mt-5 text-sm'>No record</div>) : null}


            {level2.map((element, index) => {
              return (
                <div key={index} className='flex flex-col font-semibold justify-between w-full border border-gray-300  text-[10px] leading-3 py-4 px-2'>
                  <div className='flex items-start gap-3 w-full'>
                    <img src={aelogo} alt="turbo_logo" width={80} className='m-1' />
                    <div className='text-sky-500 flex flex-col'>
                      <div className='text-gray-700'>Name: {String(element.mobno).substring(0, 3) + "****" + String(element.mobno).substring(7)}</div>
                      <div>Recharge: {(element.recharge_amount)}</div>
                      <div>withdraw: {element.withdrawal_sum}</div>
                    </div>
                    <div className='flex flex-col items-end flex-grow'>
                      <div className='text-sky-500'>phone: {String(element.mobno).substring(0, 3) + "****" + String(element.mobno).substring(7)}</div>
                      <div className='text-green-500 font-medium'>Recommended number: {(element.directMember.length + element.indirectMember.length + element.in_indirectMember.length)}</div>
                      <div className='text-fuchsia-600'>Registration time: {new Date(element.time).getDate() + '-' + new Date(element.time).getMonth() + '-' + new Date(element.time).getFullYear()}</div>
                      <div className='text-right text-fuchsia-600'>{new Date(element.time).getHours() + ":" + new Date(element.time).getMinutes() + ":" + new Date(element.time).getSeconds()}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {currentVisible === 'level3' && (
          <div className='flex text-red-800 items-center font-semibold flex-col w-full text-lg  mt-0'>
            {/* <div className='flex flex-col w-full'>
              <div>Level 3 Member: {userDetails.in_indirectMember.length}</div>
              <div>Level 3 Earning: &#8377;{(userDetails.in_indirectRecharge) * (amountDetails.level3_percent / 100)}</div>
            </div> */}

            {level3.length === 0 ? (<div className='text-center text-gray-400  font-medium mt-5 text-sm'>No record</div>) : null}

            {level3.map((element, index) => {
              return (
                <div key={index} className='flex flex-col font-semibold justify-between w-full border border-gray-300 leading-3 text-[10px] py-4 px-2'>
                  <div className='flex items-start gap-3 w-full'>
                    <img src={aelogo} alt="turbo_logo" width={80} className='m-1' />
                    <div className='text-sky-500 flex flex-col'>
                      <div className='text-gray-700'>Name: {String(element.mobno).substring(0, 3) + "****" + String(element.mobno).substring(7)}</div>
                      <div>Recharge: {(element.recharge_amount)}</div>
                      <div>withdraw: {element.withdrawal_sum}</div>
                    </div>
                    <div className='flex flex-col  items-end flex-grow'>
                      <div className='text-sky-500'>phone: {String(element.mobno).substring(0, 3) + "****" + String(element.mobno).substring(7)}</div>
                      <div className='text-green-500 font-medium'>Recommended number: {(element.directMember.length + element.indirectMember.length + element.in_indirectMember.length)}</div>
                      <div className='text-fuchsia-600'>Registration time: {new Date(element.time).getDate() + '-' + new Date(element.time).getMonth() + '-' + new Date(element.time).getFullYear()}</div>
                      <div className='text-right text-fuchsia-600'>{new Date(element.time).getHours() + ":" + new Date(element.time).getMinutes() + ":" + new Date(element.time).getSeconds()}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
      {/* <div className="fixed bottom-0 z-10 bg-red-800 rounded-none text-white flex overflow-x-hidden  mx-auto mt-2 border-2 border-gray-100 w-full overflow-y-hidden">
        <div className="flex flex-row justify-around items-center w-full py-2">
          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/home')}>
            <img src={ubon_home} alt="online" className='w-4' />
            <div>Home</div>
          </div>

          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/team')}>
            <img src={ubon_group} alt="recharge" className='w-4' />
            <div>Team</div>
          </div>
          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center ' onClick={() => navigate('/project')}>
            <img src={book_image} alt="app_dwd" className='w-4' />
            <div>Project</div>
          </div>


          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/mine')}>
            <img src={ubon_user} alt="invite" className='w-4' />
            <div>My</div>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default Team