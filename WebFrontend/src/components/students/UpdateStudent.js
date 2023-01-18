import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { updateStudent, getStudentById, getStudentActivityByPrn } from "../../api/student";

const UpdateStudent = () => {
    const navigate = useNavigate();
    const [activity, setAct] = useState([]);
    const { id } = useParams();
    const [prn, setPrn] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [year, setYear] = useState("FY");
    const [branch, setBranch] = useState("Artificial Intelligence and Data Science");
    const [division, setDivision] = useState("A");
    const [rollNo, setRollNo] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateStudent(id, { name, email, password, prn, branch, division, rollNo, year })
            .then((res) => {
                console.log(res.data);
                toast.success("Studnet Updated Successfully");
                navigate("/students");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (window.localStorage.getItem("userid") === null || window.localStorage.getItem("userid") === undefined) {
            navigate("/login");
            toast.error("Please login first!");
            return;
        }

        getStudentById(id)
            .then(res => {
                // console.log(res.data);
                setPrn(res.data.prn);
                setName(res.data.name);
                setEmail(res.data.email);
                setPassword(res.data.password);
                setBranch(res.data.branch);
                setDivision(res.data.division);
                setRollNo(res.data.rollNo);
                setYear(res.data.year);
                getStudentActivityByPrn(res.data.prn)
                    .then(res => {
                        // console.log(res.data);
                        setAct(res.data);
                        console.log(res.data);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

    }, [id, navigate]);

    return (
        <>
            <section className="my-6 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md border border-blue-500 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Student - {name}</h2>

                <form onSubmit={handleSubmit} method="POST">
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">P.R.N. No.</label>
                            <input type="number" value={prn} onChange={(e) => setPrn(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Year</label>
                            <select value={year} onChange={(e) => setYear(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option value="FY">FY</option>
                                <option value="SY">SY</option>
                                <option value="TY">TY</option>
                                <option value="B.Tech.">B.Tech.</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Branch</label>
                            <select value={branch} onChange={(e) => setBranch(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option value="Artificial Intelligence and Data Science">Artificial Intelligence and Data Science</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Information Technology">Information Technology</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Division</label>
                            <select value={division} onChange={(e) => setDivision(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Roll No.</label>
                            <input value={rollNo} type="number" onChange={(e) => setRollNo(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                    </div>

                    <div className="flex justify-end mt-6">
                        <a href="/students" className="mx-4 px-6 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cancel</a>
                        <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
                    </div>
                </form>
            </section>

            <section className="my-6 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md border border-blue-500 dark:bg-gray-800">
                <div className="mt-6 space-y-8 xl:mt-6">
                    {activity.map((act) => (
                        <div>
                            {
                                act.prn===prn
                                ?
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
                                    <a href={`/activity/${act._id}`} className="text-center py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-green-700 rounded cursor-pointer hover:bg-gray-500 dark:bg-red-700">View Details</a>
                                    <div className="space-y-6">
                                        <p className="text-gray-700 text-center dark:text-gray-200">{act.loginTime}</p>
                                        <p className="text-gray-700 text-center dark:text-gray-200">-</p>
                                        <p className="text-gray-700 text-center dark:text-gray-200">{act.logoutTime}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            :
                            <div className="hidden"></div>
                    }
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default UpdateStudent;