import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayoutEffect, useEffect } from 'react';
import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import axios from 'axios';
import BASE_URL from '../api_url';
import setting from '../images/assets/asset 1.png';
import asset3 from '../images/assets/asset 3.png';
import asset4 from '../images/assets/asset 4.png';
import asset5 from '../images/assets/asset 5.png';
import asset6 from '../images/assets/asset 6.png';
import asset7 from '../images/assets/asset 7.png';
import asset8 from '../images/assets/asset 8.png';
import asset9 from '../images/assets/asset 9.png';
import asset10 from '../images/assets/asset 10.png';
import asset11 from '../images/assets/asset 11.png';
import asset12 from '../images/assets/asset 12.png';
import asset13 from '../images/assets/asset 13.png';
import ReactModal from 'react-modal';
import tuborg_logo from '../images/tuborg_logo.svg';
import asset35 from '../images/assets3/asset 5.avif';
import asset36 from '../images/assets3/asset 6.avif';
import asset37 from '../images/assets3/asset 7.avif';
import asset38 from '../images/assets3/asset 8.avif';

import asset41 from '../images/assets4/asset 1.png'
import asset42 from '../images/assets4/asset 2.png'
import asset44 from '../images/assets4/asset 4.png'
import asset45 from '../images/assets4/asset 5.png'
import lenskart_logo from '../images/lenskart_logo.png';

import recharge_image from '../images/recharge_image.png';
import invite_image from '../images/invite_image.png';
import headset1 from '../images/headset1.png';
import ubon_home from '../images/ubon_home.png';
import ubon_user from '../images/ubon_user.png';
import ubon_group from '../images/ubon_group.png';
import book_image from '../images/book_image.png';
import paper_image from '../images/paper_image.png';
import adminSetting from '../images/adminSetting.png';
import money_bag from '../images/money_bag.png';
import logo from '../images/thar_images/logo.png';

import DateDifference from '../utility/DateDifference.js';
import assets4 from '../images/simages/asset 4.png';
import assets5 from '../images/simages/asset 5.png';
import assets6 from '../images/simages/asset 6.png';
import assets7 from '../images/simages/asset 7.png';
import my from '../images/simages/my.png';
import home2 from '../images/simages/home2.png';

import my0 from '../images/simages/temp/asset 0.jpeg';
import my1 from '../images/simages/temp/asset 1.png';
import my2 from '../images/simages/temp/asset 2.png';
import my3 from '../images/simages/temp/asset 3.png';
import my4 from '../images/simages/temp/asset 4.png';
import my5 from '../images/simages/temp/asset 5.png';
import my6 from '../images/simages/temp/asset 6.png';


const customStyles2 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: 'none',
    padding: 0,
    width: '80%'
  },
};

const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  //console.log(result);
  return result;
}

const Mine = () => {

  const navigate = useNavigate();
  const [mobileno, setMobileno] = useState('');
  const [recharge_amount, setRecharge_amount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [originalwpwd, setOriginalwpwd] = useState(null);
  const [originalpwd, setOriginalpwd] = useState(null);
  const [earning, setEarning] = useState(0);
  const [loading, setLoading] = useState(true);
  const [toasterShow, setToasterShow] = useState(false);
  const [toasterText, setToasterText] = useState('');
  const [user_refer, setUser_refer] = useState(null);
  const [logout_popup, setLogout_popup] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [current_tab, setCurrent_tab] = useState('earning');
  const [investment_amount, setInvestment_amount] = useState(0);
  const [accumulated_income, setAccumulated_income] = useState(0);
  const [today_income, setToday_income] = useState(0);


  const toaster = (text) => {
    setToasterText(text);
    setToasterShow(true);
    setTimeout(() => {
      setToasterShow(false);
      //navigate('/mine');
    }, 5000);
  }

  const getUserDetails = async () => {
    // const docRef = doc(db, 'users', auth.currentUser.uid);
    await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(async ({ data: document }) => {
      if (document) {
        setUserDetails(document);
        //console.log(document);
        if (('plans_purchased' in document) === false) {
          // toaster('Please buy a plan first!');
          return;
        }
        if (document.plans_purchased.length > 0) {
          var earn = 0;
          var ia = 0, ai = 0, ti = 0;
          var temp = document.plans_purchased.map((element) => {
            ia += element.plan_amount;

            var days = DateDifference(new Date(element.date_till_rewarded), new Date(Math.min(new Date(), addDays(new Date(element.date_purchased), element.plan_cycle))));
            var days2 = DateDifference(new Date(element.date_till_rewarded), addDays(new Date(element.date_purchased), element.plan_cycle));
            //console.log(days);
            if (element.product_type === 'short') {
              if (days === element.plan_cycle) {
                ti += element.plan_daily_earning;
                ai += (days * element.quantity * element.plan_daily_earning);
                earn = (days * element.quantity * element.plan_daily_earning);
                return {
                  ...element,
                  date_till_rewarded: new Date(Math.min(new Date(), addDays(new Date(element.date_purchased), element.plan_cycle))).toDateString()
                }
              } else {
                return {
                  ...element
                }
              }
            }

            if (days > element.plan_cycle) {
              return {
                ...element
              }
            }
            if ((DateDifference(new Date(element.date_purchased), new Date(element.date_till_rewarded))) >= 1) {
              ti += element.plan_daily_earning;
            }
            ai += DateDifference(new Date(element.date_purchased), new Date(element.date_till_rewarded)) * element.quantity * element.plan_daily_earning;
            //console.log(ai);
            earn = earn + (days * element.quantity * element.plan_daily_earning);
            return {
              ...element,
              date_till_rewarded: new Date(Math.min(new Date(), addDays(new Date(element.date_purchased), element.plan_cycle))).toDateString()
            }
          });

          setInvestment_amount(ia);
          setAccumulated_income(ai);
          setToday_income(ti);


          await axios.post(`${BASE_URL}/update_earning`, {
            earn: earn,
            temp: temp,
            user_id: localStorage.getItem('uid')
          })
            .then(() => console.log('Reward successfully updated'))
            .catch(error => console.log('Some error Occured'));
        }

        await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
          setEarning(data.earning);
          //console.log(data);
        });

      } else {
        console.log('Data not found');
      }

    }).then(() => {
      //console.log('This is working');
    })
      .catch(error => console.log('Some error occured', error));
  }

  useEffect(() => {
    getUserDetails();
  }, []);


  useLayoutEffect(() => {
    document.body.style.backgroundColor = "white";
    const getUserInfo = async () => {
      const docRef = await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(({ data }) => data);
      if (docRef) {
        //console.log(docRef.data());
        setMobileno(docRef.mobno);
        setRecharge_amount(docRef.recharge_amount);
        setBalance(docRef.balance);
        setEarning(docRef.earning);
        setOriginalwpwd(docRef.wpwd);
        setOriginalpwd(docRef.pwd);
        setUser_refer(docRef.user_invite);
        //console.log(new Date(((docRef.data().time.toDate()))));
      } else {
        console.log('Document does not exits');
      }
    }
    setLoading(true);
    getUserInfo()
      .then(() => setLoading(false));
  }, []);

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/login');
  }

  const isBetween = () => {
    var startTime = '9:00:00';
    var endTime = '19:00:00';

    var currentDate = new Date()

    var startDate = new Date(currentDate.getTime());
    startDate.setHours(startTime.split(":")[0]);
    startDate.setMinutes(startTime.split(":")[1]);
    startDate.setSeconds(startTime.split(":")[2]);

    var endDate = new Date(currentDate.getTime());
    endDate.setHours(endTime.split(":")[0]);
    endDate.setMinutes(endTime.split(":")[1]);
    endDate.setSeconds(endTime.split(":")[2]);


    var valid = startDate < currentDate && endDate > currentDate;
    //console.log(valid);
    return valid;
  }

  if (loading) {
    return (
      <div className='flex flex-col justify-center items-center  h-screen bg-gray-50 z-10 opacity-90'>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="2"
          animationDuration="0.75"
          width="40"
          visible={true}
        />
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <div className='relative h-screen bg-red-800'>
      {toasterShow ?
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='flex gap-2 bg-black opacity-80 text-white px-2 py-1 rounded-md'>
            <div>{toasterText}</div>
          </div>
        </div> : null}

      <div>
        <ReactModal
          isOpen={logout_popup}
          style={customStyles2}
          contentLabel="Notice"
          ariaHideApp={false}
        >
          <div className='w-full  shadow-xl z-10 border border-gray-200'>
            <div className='flex gap-2 flex-col bg-white w-full '>
              <div className=' text-lg px-3  py-3'>Are you sure to log out?</div>
              <div className="flex text-blue-400 justify-end">
                <div className='text-center w-[80px]  text-gray-400   font-semibold p-2'
                  onClick={(e) => {
                    setLogout_popup(false);
                  }}>
                  no
                </div>
                <div className='text-center w-[80px]  font-semibold p-2'
                  onClick={(e) => {
                    setLogout_popup(false);
                    handleSignOut();
                  }}>
                  Ok
                </div>

              </div>
            </div>
          </div>
        </ReactModal>
      </div>


      <div className="flex flex-col bg-red-800 gap-2  border-b border-gray-100 pt-6 mb-2 justify-center">
        <div className="info gap-4  flex flex-col items-center ">
          <img src={my0} alt="logo" className='w-20 rounded-full' />
          <div className="user_no flex flex-col text-white ">
            <div className="no text-xl font-medium mb-2">ID: {mobileno} <span className='text-red-500 text-sm font-bold'>VIP 0</span></div>
          </div>
        </div>

        <div className="overflow-y-visible info_box bg-red-800 text-white grid grid-cols-2 w-[95%] mx-auto">
          <div className='flex flex-col items-center border border-gray-100 p-3'>
            <div>Balance</div>
            <div className='text-sm mb-2'>{new Intl.NumberFormat().format(balance)}</div>
          </div>

          <div className='flex flex-col items-center border border-gray-100 p-3'>
            <div>Recharge</div>
            <div className='text-sm mb-2'>{new Intl.NumberFormat().format(recharge_amount)}</div>
          </div>

          <div className='flex flex-col items-center border border-gray-100 p-3'>
            <div>Earning</div>
            <div className='text-sm mb-2'>{new Intl.NumberFormat().format(earning)}</div>
          </div>

          <div className='flex flex-col items-center border border-gray-100 p-3'>
            <div>Pending</div>
            <div className='text-sm mb-2'> 0.00</div>
          </div>
        </div>
      </div>


      <div className='grid grid-cols-2 border-t border-gray-300'>

        {(isBetween() || true) === false ? <div className='bg-red-800 border-r border-gray-300 flex-col flex items-center justify-around p-9   cursor-pointer' onClick={() => toaster('You can withdraw only between 9:00 to 19:00 hours only.')}>
          <img src={my1} alt="invite" className='w-10 h-10 mb-1 mx-auto' />
          <div className='text-center text-white text-md font-semibold'>Withdrawl</div>
        </div> : <div className='bg-red-800 border-r border-gray-300 flex-col flex items-center justify-around p-9  cursor-pointer' onClick={() => navigate('/withdrawal', { state: { withdrawalPassword: originalwpwd, loginPassword: originalpwd } })}>
          <img src={my1} alt="invite" className='w-10 h-10 mb-1 mx-auto' />
          <div className='text-center text-white text-md font-semibold'>Withdrawl</div>
        </div>}

        <div className='bg-red-800 border-b border-gray-300 flex-col flex items-center justify-around p-9   cursor-pointer' onClick={() => navigate('/project')}>
          <img src={my2} alt="invite" className='w-10 h-10 mx-auto mb-1' />
          <div className='text-center text-white text-md font-semibold'>My Starlink Plans</div>
        </div>

        <div className='bg-red-800 border-t border-b border-gray-300 flex-col flex items-center justify-around p-9   cursor-pointer' onClick={() => navigate('/record')}>
          <img src={my3} alt="invite" className='w-10 h-10 mx-auto mb-1' />
          <div className='text-center text-white text-md font-semibold'>Fund records</div>
        </div>

        <div className='bg-red-800 border-l border-gray-300 flex-col flex items-center justify-around p-9 cursor-pointer' onClick={() => navigate('/company')}>
          <img src={my4} alt="invite" className='w-10 h-10 mx-auto mb-1' />
          <div className='text-center text-white text-md font-semibold'>Company</div>
        </div>


        <div className='bg-red-800 border-r border-gray-300 flex-col flex items-center justify-around p-9   cursor-pointer' onClick={() => navigate('/settings', { state: { withdrawalPassword: originalwpwd, loginPassword: originalpwd } })}>
          <img src={my5} alt="invite" className='w-10 h-10 mx-auto mb-1' />
          <div className='text-center text-white text-md font-semibold'>Bank account settings</div>
        </div>


        <div className='bg-red-800 border-t border-gray-300 flex-col flex items-center justify-around p-9   cursor-pointer' onClick={() => setLogout_popup(true)}>
          <img src={my6} alt="invite" className='w-10 h-10 mx-auto mb-1' />
          <div className='text-center text-white text-md font-semibold'>Sign Out</div>
        </div>

      </div>






      {/* <div onClick={() => setLogout_popup(true)} className="flex flex-row justify-center text-xl
        w-[80%] mx-auto py-1 mt-14 text-center rounded-lg bg-red-800 text-white">
        <div>Sign out</div>
      </div> */}

      <div className="fixed bottom-0 text-xs z-10 bg-white rounded-none text-ntxt flex overflow-x-hidden  mx-auto mt-2 border-2 border-gray-100 w-full overflow-y-hidden">
        <div className="flex flex-row justify-around items-center w-full py-1">
          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/home')}  >
            <img src={home2} alt="online" className='w-8' />
            <div>Home</div>
          </div>

          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/invite')}>
            <img src={assets5} alt="recharge" className='w-8' />
            <div>Invite</div>
          </div>
          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center ' onClick={() => navigate('/team')}>
            <img src={assets6} alt="app_dwd" className='w-8' />
            <div>Team</div>
          </div>


          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/mine')}>
            <img src={my} alt="invite" className='w-8' />
            <div>My</div>
          </div>
        </div>
      </div>



    </div>
  )
}


export default Mine;