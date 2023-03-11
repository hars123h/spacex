import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useState, useLayoutEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QRCode from "react-qr-code";
import { useContext } from 'react';
import { AmountContext } from '../App';
import axios from 'axios';
import BASE_URL from '../api_url';

//#df1f26
const Invite = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const amountDetails = useContext(AmountContext);
    const [cb, setCb] = useState({
        value: '',
        copied: false
    });
    const [toasterShow, setToasterShow] = useState(false);
    const [toasterText, setToasterText] = useState('');

    const toaster = (text) => {
        setToasterText(text);
        setToasterShow(true);
        setTimeout(() => {
            setToasterShow(false);
            //navigate('/mine');
        }, 5000);
    }

    const getUserDetails = async () => {
        const details = await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') })
            .then(({ data }) => data);
        setUserDetails(details);
    }

    useLayoutEffect(() => {
        document.body.style.backgroundColor = '#0f1c28'
        getUserDetails();
        setLoading(false);
    }, []);

    if (loading || userDetails === null) {
        return (
            <div className='h-screen grid place-items-center'>
                <div>Loading...</div>
            </div>
        )
    }
    //[#2e9afe]
    return (
        <div className=' bg-red-800  flex flex-col text-white font-light p-5 relative'>
            {toasterShow ? <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex gap-2 bg-black opacity-80 text-white px-2 py-1 rounded-md'>
                    <div>{toasterText}</div>
                </div>
            </div> : null}
            <div className="top p-3 flex cursor-pointer  items-center">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => navigate(-1)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  storke-white  cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                {/* <span className='ml-1'>back</span> */}
                <div className='flex-grow text-lg text-semibold text-center'>Invite</div>
            </div>

            {/* <p className='p-3 text-xs break-words'>
                https://www.tharsmahindr44.tech/register/invite_code/{userDetails.user_invite}
            </p> */}

            {/* <div className='p-3 font-bold cursor-pointer'>
                <CopyToClipboard text={`https://www.tharsmahindr44.tech/register/invite_code/${userDetails.user_invite}`} onCopy={() => toaster('Copied to clipboard')}>
                    <span>Invite Link: click to copy</span>
                </CopyToClipboard>
            </div>

            <div className="invitation flex p-3">
                <div className='font-bold'>Invitation code: {userDetails.user_invite}</div>
                <CopyToClipboard text={userDetails.user_invite} onCopy={() => toaster('Copied to clipboard')}>
                    <span className='ml-2'>Copy code</span>
                </CopyToClipboard>
            </div> */}

            <div className="qr mx-auto flex justify-center items-center mt-4 mb-6">
                <QRCode
                    size={130}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={`http://www.finolexpipesty54.site/register/invite_code/${userDetails.user_invite}`}
                    viewBox={`0 0 130 130`}
                />
            </div>

            <div className='flex  items-end gap-10 bg-invbg px-4 py-4 mt-2 mb-2 rounded-md'>
                <div className='flex flex-col gap-1'>
                    <div className='text-md font-semibold text-white'>Invitation link:</div>
                    <div className='w-[120px] font-semibold text-xs overflow-hidden text-gray-600 bg-white py-2 rounded-lg'> http://www.finolexpipesty54.site/register/invite_code/{userDetails.user_invite}</div>
                </div>
                <CopyToClipboard text={`http://www.finolexpipesty54.site/register/invite_code/${userDetails.user_invite}`} onCopy={() => toaster('copy success')}>
                    <div className='bg-red-800 text-white font-semibold py-1 px-8'>Copy</div>
                </CopyToClipboard>
            </div>

            <div className='flex  items-end gap-10 bg-invbg px-4 py-4 mt-2 mb-2 rounded-md'>
                <div className='flex flex-col gap-1 '>
                    <div className='text-md font-semibold text-white'>Invitation Code:</div>
                    <div className='w-[120px] font-semibold text-xs overflow-hidden text-gray-600 bg-white py-2 rounded-lg'> {userDetails.user_invite}</div>
                </div>
                <CopyToClipboard text={userDetails.user_invite} onCopy={() => toaster('copy success')}>
                    <div className='bg-red-800 text-white font-semibold py-1 px-8'>Copy</div>
                </CopyToClipboard>
            </div>

            <div className="info px-4 mt-2 sm:text-xs md:text-md text-sm bg-invbg rounded-md">
                Invitation rewards: Welcome to use the APP, invite new friends to join, you can get very high invitation rewards, and you can quickly withdraw cash to your bank account every day. APP is the safest, most popular and most profitable APP in 2023, dedicated to benefiting all mankind and promoting it globally. Invite new friends to join and you will get the following different invitation rewards:
                <br />
                Level 1={amountDetails.level1_percent}%
                <br />
                Level 2={amountDetails.level2_percent}%
                <br />
                Level 3={amountDetails.level3_percent}%
            </div>
        </div>
    )
}

export default Invite