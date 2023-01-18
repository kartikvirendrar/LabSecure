import React from "react";
import { useState, useEffect } from "react";
import { getActivityById } from "../../api/activity";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { viewWebHistory } from "../../api/webactivity";
import { viewAppHistory } from "../../api/appactivity";

const DetailActivity = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activity, setActivity] = useState([]);
    const [webHistory1, setWebHistory1] = useState([]);
    const [webHistory, setWebHistory] = useState([]);
    const [appHistory1, setAppHistory1] = useState([]);
    const [appHistory, setAppHistory] = useState([]);
    const [collection, setRoomNo] = useState("");
    const [coll, setRoom] = useState("");
    const [fromD, setFromD] = useState("");
    const [toD, setToD] = useState("");
    const setWebActivityAPI = () => {
        setRoomNo("Lab" + activity.labNo + "-" + activity.deviceNo);
        setRoom("App" + activity.labNo + "-" + activity.deviceNo);
        setFromD(activity.loginTime);
        setToD(activity.logoutTime);
    }
    const toIST = (d) => {
        let ist = new Date(d);
        return ist.toString();
    }
    useEffect(() => {
        if (window.localStorage.getItem("userid") === null || window.localStorage.getItem("userid") === undefined) {
            navigate("/login");
            toast.error("Please login first!");
            return;
        }

        getActivityById(id)
            .then(res => {
                // console.log(res.data);
                setActivity(res.data);
            })
            .catch(err => console.log(err));
    }, [id, navigate]);

    setTimeout(setWebActivityAPI, 1);

    useEffect(() => {
        if (toD !== undefined && collection !== undefined && fromD !== undefined) {
            viewWebHistory({ collection, fromD, toD })
                .then((res) => {
                    // console.log(res.data);
                    setWebHistory1(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [toD, fromD, collection]);

    useEffect(() => {
        if (toD !== undefined && coll !== undefined && fromD !== undefined) {
            viewAppHistory({ coll, fromD, toD })
                .then((res) => {
                    setAppHistory1(res.data);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [toD, fromD, coll]);

    useEffect(() => {
        var temp = webHistory1;
        for (let i in webHistory1) {
            temp[i].date = toIST(webHistory1[i].date).substring(0, 24);
        }
        setWebHistory(temp);
    }, [webHistory1])

    useEffect(() => {
        var temp = appHistory1;
        for (let i in appHistory1) {
            temp[i].date = toIST(appHistory1[i].date).substring(0, 24);
        }
        setAppHistory(temp);
    }, [appHistory1])

    return (
        <>
            <section className="my-6 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md border border-blue-500 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white mb-4">Activity - {activity._id}</h2>

                <form >
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Prn No. </label>
                        <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"> {activity.prn} </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-2 mb-6">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Lab No. </label>
                            <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"> {activity.labNo} </p>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Device No. </label>
                            <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"> {activity.deviceNo} </p>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Login Date & Time</label>
                            <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"> {activity.loginTime} </p>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Logout Date & Time</label>
                            <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"> {activity.logoutTime} </p>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Login Image</label>
                            <img className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" src={activity.loginImage} alt={activity.prn} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Logout Image</label>
                            <img className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" src={activity.logoutImage} alt={activity.prn} />
                        </div>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200 mt-4">Web Activity</label>

                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full">
                                            <thead class="border-b">
                                                <tr>
                                                    <th scope="col" class="text-sm text-white px-6 py-4 text-center">Title</th>
                                                    <th scope="col" class="text-sm text-white px-6 py-4 text-center">Date & Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {webHistory.map((web) => (
                                                    <tr class="border-b">
                                                        <a href={web.url} target="_blank" rel="noreferrer" class="text-sm text-white font-light px-6 py-4 no-underline">{web.title}</a>
                                                        <td class="text-sm text-white font-light px-6 py-2 text-center whitespace-nowrap">{web.date}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="text-gray-700 dark:text-gray-200 mt-4">Activity Logs</label>
                        <table class="min-w-full">
                            <thead class="border-b">
                                <tr>
                                    <th scope="col" class="text-sm text-white px-6 py-4 text-center">Active Processes and Devices</th>
                                    <th scope="col" class="text-sm text-white px-6 py-4 text-center">Date & Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appHistory.map((app) => (
                                    <tr class="border-b">
                                        <a href="/" class="text-justify text-sm text-white font-light no-underline">Processes - {app.active}</a>
                                        <br/><br/>
                                        <a href="/" class="text-justify text-sm text-white font-light no-underline">Devices - {app.devices}</a>
                                        <td class="text-sm text-white font-light px-6 py-2 text-center whitespace-nowrap">{app.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-end mt-6">
                        <a href="/trackactivity" className="px-6 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</a>
                    </div>
                </form>
            </section>
        </>
    );
}

export default DetailActivity;