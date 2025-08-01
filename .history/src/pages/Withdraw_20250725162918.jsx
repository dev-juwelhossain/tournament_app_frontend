import { faBangladeshiTakaSign, faChevronLeft, faMobileScreenButton, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { NavLink, useOutletContext } from 'react-router';

const Withdraw = () => {
    const { totalIncome } = useOutletContext();


    const { updateData } = useOutletContext();
    const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const [activeTab, setActiveTab] = useState(null);
    const { register, handleSubmit, reset } = useForm();
    const tabs = ["bKash", "Rocket", "Nagad"];

    const onSubmit = (data) => {

        const withdrawPayload = {
            user_id: user.user.uid,
            user_name: user.user.displayName,
            payment_phone_number: data?.payment_phone_number,
            amount: data?.amount,
            status: 0,
            payment_method: activeTab,
        };
        console.log("Deposit Payload:", withdrawPayload);

        const request = axios.post(`${VITE_API_BASE_URL}/withdraw-request`, withdrawPayload);

        toast.promise(request, {
            loading: 'Sending...',
            success: 'Sent !',
            error: 'Something went wrong!',
        });
        request
            .then((response) => {
                console.log("Response:", response);
                if (response.status === 201) {
                    updateData();
                    reset();
                    // navigate("/thankyou");
                }
            })

    };


    return (
        <div className='max-w-md mx-auto font-Jakarta bg-mainbg space-y-3  pb-60 py-5'>
            {/* wallet header */}
            <div className='w-[96%] mx-auto flex justify-between items-center py-3 px-4 font-medium text-white bg-cardbg rounded-lg'>
                <NavLink to='/profile'><FontAwesomeIcon icon={faChevronLeft} className='text-xl' /></NavLink>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-lg'>Abailable Balance</h2>
                    <h2 className='text-xl'><FontAwesomeIcon icon={faBangladeshiTakaSign} /> {totalIncome ? totalIncome : 0} Tk</h2>
                </div>
            </div>
            {/* Mobile Banking list */}
            <div className='bg-cardbg grid grid-cols-3 gap-2 px-1 py-2'>
                <div className="flex justify-between mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-full text-center py-2 font-semibold border ${activeTab === tab
                                ? "bg-purple-100 text-purple-700 border-purple-400"
                                : "bg-gray-100 text-gray-600 border-gray-300"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {/* <div onClick={() => setActiveTab('bkash')} className='bg-white rounded '>
                    <img src="./image/BKash-bKash2-Logo.wine.png" alt="" />
                </div>
                <div onClick={() => setActiveTab('nagad')} className='bg-white rounded'>
                    <img src="./image/Nagad-Logo.wine.png" alt="" />
                </div>
                <div onClick={() => setActiveTab('rocket')} className=' rounded'>
                    <img src="./image/dutch-bangla-rocket-seeklogo.png" alt="" />
                </div> */}
            </div>
            {/* withdraw form */}
            <div className='bg-cardbg w-[96%] mx-auto px-5 py-5 rounded-lg text-white'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3 flex flex-col '>
                    <div className='flex items-center gap-2 bg-white text-cardbg px-2 py-2 rounded-lg'>
                        <FontAwesomeIcon icon={faMobileScreenButton} className='text-xl' />
                        <input {...register("payment_phone_number", { required: true })} type="text" placeholder='Mobile Number' className='placeholder:text-black focus:outline-none w-full' />
                    </div>
                    <div className='flex items-center gap-2 bg-white text-cardbg px-2 py-2 rounded-lg'>
                        <FontAwesomeIcon icon={faBangladeshiTakaSign} className='text-xl' />
                        <input {...register("amount", { required: true })} type="number" placeholder='Amount to Withdraw' className='placeholder:text-black focus:outline-none w-full' />

                    </div>
                    <h2 className='text-center text-red-500'>* Minimum withdraw amount 100 taka *</h2>
                    <button type='submit' className='bg-amber-400 py-2 px-4 rounded-2xl'>
                        Withdraw
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Withdraw;