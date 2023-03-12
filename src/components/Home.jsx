import React, { useEffect, useLayoutEffect, useState } from 'react';
import Slider from './Slider';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import ReactModal from 'react-modal';

import { useContext } from 'react';
import { AmountContext } from '../App.js';
import money_bag from '../images/money_bag.png';
import axios from 'axios';
import BASE_URL from '../api_url';
import { VolumeUpOutlined } from '@material-ui/icons';
// import new_invite_image from '../images/new_invite_image.png';
// import invite_bg from '../images/invite_bg.png';
// import windharvester_logo from '../images/windharvester_logo.png';
// import rent from '../images/rent.png';
// import financial from '../images/financial.png';
// import user from '../images/user.png';
// import make_money from '../images/make_money.png';
// import dividend from '../images/dividend.png';
// import wind1 from '../images/wind1.jpg';
// import wind2 from '../images/wind2.jpg';
// import wind3 from '../images/wind3.jpg';
// import wind4 from '../images/wind4.jpg';
// import asset0 from '../images/assets2/asset 0.png';
// import asset1 from '../images/assets2/asset 1.png';
// import asset2 from '../images/assets2/asset 2.png';
// import asset3 from '../images/assets2/asset 3.png';
// import asset4 from '../images/assets2/asset 4.png';
// import asset5 from '../images/assets2/asset 5.png';
// import asset6 from '../images/assets2/asset 6.png';
// import asset7 from '../images/assets2/asset 7.png';

// import tuborg1 from '../images/tuborg1.jpg';
// import tuborg2 from '../images/tuborg2.jpg';
// import tuborg3 from '../images/tuborg3.jpg';
// import tuborg4 from '../images/tuborg4.jpg';
// import tuborg5 from '../images/tuborg5.jpg';
// import tuborg6 from '../images/tuborg6.jpg';

// import asset30 from '../images/assets3/asset 0.png';
// import asset31 from '../images/assets3/asset 1.png';
// import asset32 from '../images/assets3/asset 2.png';
// import asset33 from '../images/assets3/asset 3.png';
// import asset35 from '../images/assets3/asset 5.avif';
// import asset36 from '../images/assets3/asset 6.avif';
// import asset37 from '../images/assets3/asset 7.avif';
// import asset38 from '../images/assets3/asset 8.avif';


import lenskart1 from '../images/assets5/lenskart1.jpg';
import lenskart2 from '../images/assets5/lenskart2.jpg';
import lenskart3 from '../images/assets5/lenskart3.jpg';
import lenskart4 from '../images/assets5/lenskart4.jpg';
import lenskart5 from '../images/assets5/lenskart5.jpg';
import lenskart6 from '../images/assets5/lenskart6.jpg';
import lenskart7 from '../images/assets5/lenskart7.jpg';
import lenskart8 from '../images/assets5/lenskart8.jpg';
import lenskart9 from '../images/assets5/lenskart9.jpg';
import lenskart10 from '../images/assets5/lenskart10.jpg';
import lenskart11 from '../images/assets5/lenskart11.jpg';
import lenskart12 from '../images/assets5/lenskart12.jpg';

import recharge_image from '../images/recharge_image.png';
import invite_image from '../images/invite_image.png';
import headset1 from '../images/headset1.png';
import ubon_home from '../images/ubon_home.png';
import ubon_user from '../images/ubon_user.png';
import ubon_group from '../images/ubon_group.png';
import book_image from '../images/book_image.png';

import asset1 from '../images/thar_images/asset1.jpg';
import asset2 from '../images/thar_images/asset2.jpg';
import asset3 from '../images/thar_images/asset3.jpg';
import asset4 from '../images/thar_images/asset4.jpg';
import asset5 from '../images/thar_images/asset5.jpg';
import asset6 from '../images/thar_images/asset6.jpg';
import asset7 from '../images/thar_images/asset7.jpg';
import asset8 from '../images/thar_images/asset8.jpg';
import asset9 from '../images/thar_images/asset9.jpg';
import asset10 from '../images/thar_images/asset10.jpg';

import assets9 from '../images/simages/assets9.jpg';
import assets0 from '../images/simages/asset 0.png';
import assets1 from '../images/simages/asset 1.png';
import assets2 from '../images/simages/asset 2.png';
import assets3 from '../images/simages/asset 3.png';
import assets4 from '../images/simages/asset 4.png';
import assets5 from '../images/simages/asset 5.png';
import assets6 from '../images/simages/asset 6.png';
import assets7 from '../images/simages/asset 7.png';

import pl1 from '../images/simages/pl1.png';
import pl2 from '../images/simages/pl2.png';
import pl3 from '../images/simages/pl3.png';
import pl4 from '../images/simages/pl4.png';
import pl5 from '../images/simages/pl5.png';
import pl6 from '../images/simages/pl6.png';
import slide1 from '../images/simages/slide1.jpg';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        overflow: 'hidden',
        position: 'relative',
        width: '95%',
        border: 'none',
        backgroundColor: 'transparent'

    },
};

const customStyles2 = {
    content: {
        top: '45%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'relative',
        border: 'none',
        padding: 0,
        width: '97%',
        borderRadius: '16px'
    },
};


const Home = () => {

    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [quantity, setQuantity] = React.useState(1);
    const [currPlan, setCurrPlan] = React.useState(null);
    const [currentVisible, setCurrentVisible] = React.useState('big');
    const [userDetails, setUserDetails] = React.useState(null);
    const amountDetails = useContext(AmountContext);
    const [toasterShow, setToasterShow] = useState(false);
    const [welcomeShow, setWelcomeShow] = useState(false);
    const [toasterText, setToasterText] = useState('');
    const [originalwpwd, setOriginalwpwd] = useState(null);
    const [originalpwd, setOriginalpwd] = useState(null);
    const [planPurchaseShow, setPlanPurchaseShow] = useState(false);
    const [balanceIndicator, setBalanceIndicator] = useState(false);

    const toaster = (text, arg = '') => {
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
        if (text === 'Plan purchased!') {
            setTimeout(() => {
                navigate('/project');
            }, 2000);
        } else {
            setToasterText(text);
            setToasterShow(true);
            setTimeout(() => {
                setToasterShow(false);
                //navigate('/mine');
                if (arg !== '') {
                    navigate('/project');
                }
            }, 2000);
        }
    }

    const openModal = () => {
        setIsOpen(true);
    }

    const getUserDetails = async () => {
        await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
            if (data) {
                setUserDetails(data);
                setOriginalwpwd(data.wpwd);
                setOriginalpwd(data.pwd);
                localStorage.setItem('user_invite', data.user_invite);
            } else {
                //console.log('Data not found');
            }
        }).catch(error => console.log('Some error occured', error));
    }

    useEffect(() => {
        if (localStorage.getItem('pop_up_closed') === null) {
            setWelcomeShow(true);
        }
    }, []);

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#f2f2f2";
        getUserDetails();
    }, []);

    const closeModal = async (action) => {
        if (action === 'cancel') {
            setIsOpen(false);
        } else if (quantity <= 0) {
            toaster('Please a positive value!');
        } else {
            if ((Number(quantity) * Number(currPlan.plan_amount)) > Number(userDetails.balance)) {
                //toaster("The available balance is insufficient, please recharge");
                setBalanceIndicator(true);
                setTimeout(() => {
                    setBalanceIndicator(false);
                }, 3000);
            } else {
                await axios.post(`${BASE_URL}/purchase`, {
                    balance: Number(userDetails.balance) - Number(Number(quantity) * Number(currPlan.plan_amount)),
                    boughtLong: (currPlan.product_type === 'long' ? 1 : 0),
                    boughtShort: (currPlan.product_type === 'short' ? 1 : 0),
                    user_id: localStorage.getItem('uid'),
                    plans_purchased: {
                        ...currPlan,
                        quantity: quantity,
                        date_purchased: new Date().toDateString(),
                        date_till_rewarded: new Date().toDateString(),
                        time: new Date().toDateString(),
                        ddmmyy: new Date().getMilliseconds()
                    }
                }).then(() => {
                    console.log('Product successfully purchased');
                    toaster('Plan purchased!', '/project');
                    setPlanPurchaseShow(true);
                }).catch((error) => {
                    console.log('Some error occured', error);
                    toaster('Some error occured, try again after some time');
                })
            }
            setIsOpen(false);
        }
    }

    const isBetween = () => {
        var startTime = '10:00:00';
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

    const handleClick = (product_type, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle) => {
        setCurrPlan({ product_type, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle });
        openModal();
    }



    return (
        <div className='relative bg-recharge-bg '>
            {toasterShow ? <div className='w-[90%] absolute z-50 top-[500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex gap-2 text-center bg-black opacity-80 text-white px-4 py-1 rounded-md'>
                    <div>{toasterText}</div>
                </div>
            </div> : null}

            {planPurchaseShow ? <div className='w-[60%] absolute z-50 top-[500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex gap-2 justify-center bg-black opacity-80 text-white px-4 py-1 rounded-md'>
                    <div className='my-1'>Successful Purchase</div>
                </div>
            </div> : null}

            <div >
                <ReactModal
                    isOpen={balanceIndicator}
                    style={customStyles2}
                    contentLabel="Not enough balance"
                    ariaHideApp={false}
                >
                    <div className='relative bg-black text-center text-white opacity-80 p-2 w-full rounded-md '>
                        The available balance is insufficient, please recharge
                    </div>
                </ReactModal>
            </div>



            <Slider />
            <div >
                <ReactModal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    contentLabel="Enter Project Quantity"
                    ariaHideApp={false}
                >

                    <div className='relative bg-white p-2 w-full rounded-sm '>
                        <div
                            onClick={() => closeModal('cancel')}
                            className='absolute  right-[-10px] top-[-10px] bg-white font-extrabold  w-10 h-10 text-white  flex justify-center items-center rounded-full'>
                            <div className='bg-slate-500 w-7 h-7 rounded-full text-center text-xl'>
                                X
                            </div>
                        </div>
                        <div>
                            <h1 className='text-gray-600 mb-2 mt-2 text-md mr-5 font-semibold'>Are you sure you want to buy this plan?</h1>

                            <div className='flex justify-end pt-2'>
                                <button onClick={() => closeModal('ok')} className='bg-red-800 text-white px-2 py-1   w-[64px]'>Yes</button>
                                <button onClick={() => closeModal('cancel')} className='border border-gray-300  px-2 py-1   w-[64px] ml-2'>No</button>
                            </div>
                        </div>
                    </div>
                </ReactModal>
            </div>

            <div>
                <ReactModal
                    isOpen={welcomeShow}
                    style={customStyles2}
                    contentLabel="Notice"
                    ariaHideApp={false}
                >
                    <div className='w-full rounded-lg shadow-xl z-10 border border-gray-200'>
                        <div className='flex  flex-col bg-white w-full text-white rounded-md'>
                            <div className='bg-red-800 text-center px-1 py-2 text-md shadow-md text-white'>Notice</div>
                            <div className='flex flex-col  p-2 text-sm gap-2 font-normal bg-white text-red-800  pt-4 mb-[20px]'>
                                <img src={slide1} alt="notice_image" width={"90%"} />
                                <div className='text-semibold mb-[100px]'>
                                    🔥🔥🔥Signup bonus: 100 <br />
                                    🔥🔥🔥Minimum withdrawal: 150 <br />
                                    🔥🔥🔥All plan are Daily Withdrawal <br />
                                </div>
                                {/* <div>Welcome to Mahindra Thar App</div>
                                <div>Finolex is a long term earning app</div>
                                <div>Daily Income Daily Withdrawal</div>
                                <div>Users can invest and make money by themselves</div>
                                <div>You can also form your own team to earn generous commissions</div>
                                <div>Invite team memebers to join by sharing the invitation link, the more people you invite
                                    , the more commissions you earn
                                </div>
                                <div>
                                    Level 1 {amountDetails.level1_percent}% For example, team members invest 1000rs, you will get {amountDetails.level1_percent * 10}rs
                                </div>
                                <div>
                                    Level 2 {amountDetails.level2_percent}% For example, team members invest 1000rs, you will get {amountDetails.level2_percent * 10}rs
                                </div>
                                <div>
                                    Level 3 {amountDetails.level3_percent}% For example, team members invest 1000rs, you will get {amountDetails.level3_percent * 10}rs
                                </div>
                                <div>show strength, make youself rich</div> */}

                            </div>

                            <div className='border-t border-gray-200 my-1'></div>

                        </div>
                        <div className='flex justify-end'>
                            <button className='text-center w-16 mx-2 border border-blue-300 mt-1  text-white font-semibold py-[2px]  mb-3 mr-3 bg-gray-800'
                                onClick={(e) => {
                                    setWelcomeShow(false);
                                    localStorage.setItem('pop_up_closed', 1);
                                }}>
                                Ok
                            </button>
                        </div>
                    </div>
                </ReactModal>
            </div>

            {/*Marquee Implementation*/}
            {/* <div className="bg-red-800 rounded-md items-center px-2 text-white relative flex overflow-x-hidden h-12 mx-1 mt-2 border-2 border-gray-100 sm:w-3/5 lg:w-3/5 overflow-y-hidden">
                <div>
                    <VolumeUpOutlined />
                </div>
                <div className="py-12 animate-marquee flex flex-col whitespace-nowrap">
                    <span className="mx-4 text-sm">91915***05 Member withdrawl 100000 Rs</span>
                    <span className="mx-4 text-sm">91702***84 Member withdrawl 30000 Rs</span>
                    <span className="mx-4 text sm">91827***42 Member withdrawl 2000 Rs</span>
                    <span className="mx-4 text sm">91770***28 Member withdrawl 500 Rs</span>
                    <span className="mx-4 text sm">91983***17 Member withdrawl 100000 Rs</span>
                </div>
            </div> */}

            {/*Navigation bar */}
            <div className="bg-red-800  text-white font-semibold relative flex overflow-x-hidden  mx-1 my-1 rounded-md   sm:w-3/5 lg:w-3/5 overflow-y-hidden">
                <div className="grid grid-cols-2 justify-around text-xs items-center w-full  ">

                    <div className='cursor-pointer  flex flex-col justify-center items-center p-6 border-r border-b border-white'>
                        <img src={assets0} alt="recharge" className='w-12' onClick={() => navigate('/recharge')} />
                        <div className='font-bold mt-[3px]'>Recharge</div>
                    </div>

                    <div className='cursor-pointer  flex flex-col justify-center items-center p-6 border-b border-white '>
                        <img src={assets1} alt="invite" className='w-12' onClick={() => (isBetween()) ?
                            navigate('/withdrawal', { state: { withdrawalPassword: originalwpwd, loginPassword: originalpwd } }) : toaster('You can withdraw only between 10:00 AM to 7:00 PM')
                        } />
                        <div className='font-bold mt-[3px]'>Withdrawal</div>
                    </div>

                    <a href="https://t.me/finolexpipesty54" className='no-underline text-white cursor-pointer'>
                        <div className='cursor-pointer  flex flex-col justify-center items-center p-6 border-r border-white'>
                            <img src={assets2} alt="online" className='w-12' />
                            <div className='font-bold mt-[3px]'>Online</div>
                        </div>
                    </a>

                    <div className='cursor-pointer  flex flex-col justify-center items-center p-6 '>
                        <img src={assets3} alt="invite" className='w-12' onClick={() => navigate('/invite')} />
                        <div className='font-bold mt-[3px]'>Download</div>
                    </div>
                </div>
            </div>

            <div className='mt-2 text-sm  text-white flex items-center shadow-lg  mb-2 sm:w-3/5 lg:w-3/5 mx-2'>
                <div className={`w-1/2 text-center py-4 ${currentVisible === 'big' ? ' bg-red-800' : 'bg-[#efefef] text-red-800'}`} onClick={() => setCurrentVisible('big')}>Finolex Daily Income</div>
                <div className={`w-1/2 text-center py-4 ${currentVisible === 'short' ? ' bg-red-800' : 'bg-[#efefef] text-red-800'}`} onClick={() => setCurrentVisible('short')}>Finolex High Income</div>
            </div>

            {/*Plans Cards*/}
            <div className={`card_grid grid grid-cols-1 sm:w-3/5 lg:w-3/5 w-[97%] mx-auto mt-2 ${currentVisible === 'big' ? 'mb-20' : ''}`}>

                {currentVisible === 'big' && (
                    <div className='grid grid-cols-1 '>
                        {userDetails && amountDetails?.plan_state && (
                            <div className='grid grid-cols-1'>
                                {userDetails && (amountDetails.plan_state[0] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={pl1} handleClick={handleClick} plan_name={"Finolex 1"} plan_cycle={120} plan_daily_earning={105} plan_amount={490} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={pl1} handleClick={handleClick} plan_name={"Finolex 1"} plan_cycle={120} plan_daily_earning={105} plan_amount={490} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {userDetails && (amountDetails.plan_state[1] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={pl2} handleClick={handleClick} plan_name={"Finolex 2"} plan_cycle={120} plan_daily_earning={410} plan_amount={1800} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={pl2} handleClick={handleClick} plan_name={"Finolex 2"} plan_cycle={120} plan_daily_earning={410} plan_amount={1800} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {userDetails && (amountDetails.plan_state[2] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={pl3} handleClick={handleClick} plan_name={"Finolex 3"} plan_cycle={80} plan_daily_earning={1210} plan_amount={4950} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={pl3} handleClick={handleClick} plan_name={"Finolex 3"} plan_cycle={80} plan_daily_earning={1210} plan_amount={4950} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {userDetails && (amountDetails.plan_state[3] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={pl4} handleClick={handleClick} plan_name={"Finolex 4"} plan_cycle={80} plan_daily_earning={3770} plan_amount={13500} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={pl4} handleClick={handleClick} plan_name={"Finolex 4"} plan_cycle={80} plan_daily_earning={3770} plan_amount={13500} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {userDetails && (amountDetails.plan_state[4] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={pl5} handleClick={handleClick} plan_name={"Finolex 5"} plan_cycle={80} plan_daily_earning={9100} plan_amount={29500} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={pl5} handleClick={handleClick} plan_name={"Finolex 5"} plan_cycle={80} plan_daily_earning={9100} plan_amount={29500} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {userDetails && (amountDetails.plan_state[5] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={pl6} handleClick={handleClick} plan_name={"Finolex 6"} plan_cycle={80} plan_daily_earning={15700} plan_amount={48600} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={pl6} handleClick={handleClick} plan_name={"Finolex 6"} plan_cycle={80} plan_daily_earning={15700} plan_amount={48600} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {userDetails && (amountDetails.plan_state[6] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={pl1} handleClick={handleClick} plan_name={"Finolex 7"} plan_cycle={30} plan_daily_earning={35800} plan_amount={69500} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={pl1} handleClick={handleClick} plan_name={"Finolex 7"} plan_cycle={30} plan_daily_earning={35800} plan_amount={69500} plan_type={'Big Plan'} />
                                    </span>
                                )}



                                {/* {userDetails && (amountDetails.plan_state[5] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={asset6} handleClick={handleClick} plan_name={"Finolex 6"} plan_cycle={80} plan_daily_earning={16550} plan_amount={48000} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={asset6} handleClick={handleClick} plan_name={"Finolex 6"} plan_cycle={80} plan_daily_earning={16550} plan_amount={48000} plan_type={'Big Plan'} />
                                    </span>
                                )} */}

                                {/* {userDetails && (amountDetails.plan_state[6] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={asset7} handleClick={handleClick} plan_name={"Finolex 7"} plan_cycle={60} plan_daily_earning={33000} plan_amount={76000} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={asset7} handleClick={handleClick} plan_name={"Finolex 7"} plan_cycle={60} plan_daily_earning={33000} plan_amount={76000} plan_type={'Big Plan'} />
                                    </span>
                                )} */}

                                {/* {userDetails && (amountDetails.plan_state[7] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={tuborg4} handleClick={handleClick} plan_name={"Windharvester 8"} plan_cycle={365} plan_daily_earning={2500} plan_amount={35000} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={tuborg4} handleClick={handleClick} plan_name={"Windharvester 8"} plan_cycle={365} plan_daily_earning={2500} plan_amount={35000} plan_type={'Big Plan'} />
                                    </span>
                                )} */}

                                {/* {userDetails && (amountDetails.plan_state[8] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={tuborg5} handleClick={handleClick} plan_name={"Windharvester 9"} plan_cycle={365} plan_daily_earning={4000} plan_amount={60000} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={tuborg5} handleClick={handleClick} plan_name={"Windharvester 9"} plan_cycle={365} plan_daily_earning={4000} plan_amount={60000} plan_type={'Big Plan'} />
                                    </span>
                                )} */}
                            </div>)}
                    </div>)}

            </div>

            {/*short plans */}
            <div className={`card_grid grid grid-cols-1 sm:w-3/5 lg:w-3/5 w-[97%] mx-auto mt-2 ${currentVisible === 'short' ? 'mb-20' : ''}`}>

                {currentVisible === 'short' && amountDetails?.plan_state && userDetails && (
                    <div className={`grid grid-cols-1`}>
                        {(userDetails.boughtLong < 1 || amountDetails.plan_state[7] === 0) ?
                            (
                                <span className='pointer-events-none'>
                                    {/* <span>hi</span> */}
                                    <Card product_type={"short"} product_image={pl1} handleClick={handleClick} plan_name={"Finolex 8"} plan_cycle={3} plan_daily_earning={310} plan_amount={600} plan_type={'Short Plan'} />
                                </span>
                            ) :
                            <span>
                                <Card product_type={"short"} product_image={pl1} handleClick={handleClick} plan_name={"Finolex 8"} plan_cycle={3} plan_daily_earning={310} plan_amount={600} plan_type={'Short Plan'} />
                            </span>
                        }

                        {(userDetails.boughtLong < 1 || amountDetails.plan_state[8] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={pl2} handleClick={handleClick} plan_name={"Finolex 9"} plan_cycle={2} plan_daily_earning={1510} plan_amount={1210} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={pl2} handleClick={handleClick} plan_name={"Finolex 9"} plan_cycle={2} plan_daily_earning={1510} plan_amount={1210} plan_type={'Short Plan'} />
                            </span>
                            )}

                        {(userDetails.boughtLong < 1 || amountDetails.plan_state[9] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={pl3} handleClick={handleClick} plan_name={"Finolex 10"} plan_cycle={2} plan_daily_earning={4000} plan_amount={2530} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={pl3} handleClick={handleClick} plan_name={"Finolex 10"} plan_cycle={2} plan_daily_earning={4000} plan_amount={2530} plan_type={'Short Plan'} />
                            </span>
                            )}

                        {(userDetails.boughtLong < 1 || amountDetails.plan_state[10] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={pl4} handleClick={handleClick} plan_name={"Finolex 11"} plan_cycle={2} plan_daily_earning={1200} plan_amount={7000} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={pl4} handleClick={handleClick} plan_name={"Finolex 11"} plan_cycle={2} plan_daily_earning={1200} plan_amount={7000} plan_type={'Short Plan'} />
                            </span>
                            )}

                        {/* {(userDetails.boughtLong < 1 || amountDetails.plan_state[11] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={asset2} handleClick={handleClick} plan_name={"Finolex 11"} plan_cycle={4} plan_daily_earning={50000} plan_amount={30000} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={asset2} handleClick={handleClick} plan_name={"Finolex 11"} plan_cycle={4} plan_daily_earning={50000} plan_amount={30000} plan_type={'Short Plan'} />
                            </span>
                            )} */}

                        {/* {(userDetails.boughtLong < 1 || amountDetails.plan_state[12] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={asset3} handleClick={handleClick} plan_name={"Finolex 12"} plan_cycle={5} plan_daily_earning={120000} plan_amount={60000} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={asset3} handleClick={handleClick} plan_name={"Finolex 12"} plan_cycle={5} plan_daily_earning={120000} plan_amount={60000} plan_type={'Short Plan'} />
                            </span>
                            )} */}

                        {/* {(userDetails.boughtLong < 1 || amountDetails.plan_state[15] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={wind4} handleClick={handleClick} plan_name={"Windharvester 16"} plan_cycle={18} plan_daily_earning={1400} plan_amount={10000} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={wind4} handleClick={handleClick} plan_name={"Windharvester 16"} plan_cycle={18} plan_daily_earning={1400} plan_amount={10000} plan_type={'Short Plan'} />
                            </span>
                            )} */}
                    </div>)}
            </div>



            {/*Navigation Bar 2 bg-[#1cb5b2]*/}
            {welcomeShow ? (
                <div className="fixed bottom-0 text-xs z-10 bg-white rounded-none text-ntxt flex overflow-x-hidden  mx-auto mt-2 border-2 border-gray-100 w-full overflow-y-hidden">
                    <div className="flex flex-row justify-around items-center w-full py-2">
                        <div className='cursor-pointer mx-2 flex flex-col justify-center items-center'>
                            <img src={assets4} alt="online" className='w-8' />
                            <div>Home</div>
                        </div>

                        <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' >
                            <img src={assets5} alt="recharge" className='w-8' />
                            <div>Invite</div>
                        </div>
                        <div className='cursor-pointer mx-2 flex flex-col justify-center items-center ' >
                            <img src={assets6} alt="app_dwd" className='w-8' />
                            <div>Team</div>
                        </div>


                        <div className='cursor-pointer mx-2 flex flex-col justify-center items-center'>
                            <img src={assets7} alt="invite" className='w-8' />
                            <div>My</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="fixed bottom-0 text-xs z-10 bg-white rounded-none text-ntxt flex overflow-x-hidden  mx-auto mt-2 border-2 border-gray-100 w-full overflow-y-hidden">
                    <div className="flex flex-row justify-around items-center w-full py-1">
                        <div className='cursor-pointer mx-2 flex flex-col justify-center items-center'>
                            <img src={assets4} alt="online" className='w-8' />
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
                            <img src={assets7} alt="invite" className='w-8' />
                            <div>My</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home