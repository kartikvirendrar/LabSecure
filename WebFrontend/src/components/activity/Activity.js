import React from "react";
import { useState, useEffect } from 'react';
import { getActivity } from "../../api/activity";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Actvity = () => {
    const navigate = useNavigate();
    const [activity, setAct] = useState([]);

    useEffect(() => {
        if (window.localStorage.getItem("userid") === null || window.localStorage.getItem("userid") === undefined) {
            navigate("/login");
            toast.error("Please login first!");
            return;
        }
        getActivity()
            .then(res => {
                console.log(res.data);
                setAct(res.data);
            })
            .catch(err => console.log(err));
    }, [navigate]);

    return (
        <>
            <div className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">

                    <h1 className="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Lab Actvity</h1>
                    <div className="mt-6 space-y-8 xl:mt-6">
                        {activity.map((act) => (
                            <div>
                                <div className="text-center"></div>
                                <div className="flex justify-between max-w-2xl mx-auto px-8 py-4 border border-green-500 rounded-xl dark:border-red-700">
                                    <div className="flex flex-col items-left space-y-2">
                                        <span className="text-sm font-light text-blue-600 dark:text-blue-400">{act.labNo} - {act.deviceNo}</span>
                                        <div className="flex flex-row">
                                            <img className="h-36 w-36" src={act.loginImage} alt="loginImage" />
                                            <p>..</p>
                                            <img className="h-36 w-36" src={act.logoutImage} alt="logoutImage" />
                                        </div>
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">{act.prn}</p>
                                    </div>
                                    <div className="flex flex-col space-y-8">
                                        {
                                            act.loginTime === act.logoutTime
                                                ?
                                                <a href={`/activity/${act._id}`} className="text-center py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-green-700 rounded cursor-pointer hover:bg-gray-500 dark:bg-green-700">View Details</a>
                                                :        
                                                <a href={`/activity/${act._id}`} className="text-center py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-green-700 rounded cursor-pointer hover:bg-gray-500 dark:bg-red-700">View Details</a>
                                        }
                                        <div className="space-y-6">
                                            <p className="text-gray-700 text-center dark:text-gray-200">{act.loginTime}</p>
                                            <p className="text-gray-700 text-center dark:text-gray-200">-</p>
                                            <p className="text-gray-700 text-center dark:text-gray-200">{act.logoutTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Actvity;