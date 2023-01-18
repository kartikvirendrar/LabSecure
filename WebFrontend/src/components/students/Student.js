import React from "react";
import { useState, useEffect } from 'react';
import { getStudents } from "../../api/student";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Student = () => {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        if(window.localStorage.getItem("userid")===null || window.localStorage.getItem("userid")===undefined){
            navigate("/login");
            toast.error("Please login first!");
            return;
        }
        getStudents()
            .then(res => {
                // console.log(res.data);
                setStudents(res.data);
            })
            .catch(err => console.log(err));
    }, [navigate]);

    return (
        <>
            <div className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">

                    <h1 className="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Students</h1>
                    <div className="flex justify-center mt-3">
                        <a href="/student/add" className="px-2 py-1 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Add Student
                        </a>
                    </div>
                    <div className="mt-6 space-y-8 xl:mt-6">
                        {students.map((stud) => (
                            <div>
                                <div className="text-center"></div>
                                    <div className="flex justify-between max-w-2xl mx-auto px-8 py-4 border border-red-500 rounded-xl dark:border-green-700">
                                        <div className="flex flex-col items-left space-y-2">
                                            <span className="text-sm font-light text-blue-600 dark:text-blue-400">{stud.email}</span>
                                            <p className="mt-2 text-gray-600 dark:text-gray-300">{stud.name}</p>
                                            <p className="mt-2 text-gray-600 dark:text-gray-300">{stud.year} {stud.branch} {stud.division} {stud.rollNo}</p>
                                        </div>
                                        <div className="flex flex-col space-y-8">
                                        <a href={`/student/${stud._id}`} className="text-center py-1 px-2 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-red-700 rounded cursor-pointer hover:bg-gray-500 dark:bg-green-700">View Details</a>
                                            <div className="space-y-6">
                                                <p className="text-gray-700 text-center dark:text-gray-200">{stud.prn}</p>
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

export default Student;