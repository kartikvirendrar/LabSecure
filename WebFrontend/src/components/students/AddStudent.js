import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { addStudent } from "../../api/student";

const AddStudent = () => {
    const navigate = useNavigate();
    const [prn, setPrn] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [year, setYear] = useState("FY");
    const [branch, setBranch] = useState("Artificial Intelligence and Data Science");
    const [division, setDivision] = useState("A");
    const [rollNo, setRollNo] = useState("");

    if(window.localStorage.getItem("userid")===null || window.localStorage.getItem("userid")===undefined){
        navigate("/login");
        toast.error("Please login first!");
        return;
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
        addStudent({ name, email, password, prn, branch, division, rollNo, year })
          .then((res) => {
            console.log(res.data);
            toast.success("Studnet Created Successfully");
            navigate("/students");
        })
          .catch((err) => 
          {console.log(err);
    });
      };

    return (
        <>
            <section className="my-6 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md border border-blue-500 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add New Student</h2>

                <form onSubmit={handleSubmit} method="POST">
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">P.R.N. No.</label>
                            <input type="number" onChange={(e) => setPrn(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Name</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Year</label>
                            <select onChange={(e) => setYear(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option value="FY">FY</option>
                                <option value="SY">SY</option>
                                <option value="TY">TY</option>
                                <option value="B.Tech.">B.Tech.</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Branch</label>
                            <select onChange={(e) => setBranch(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option value="Artificial Intelligence and Data Science">Artificial Intelligence and Data Science</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Information Technology">Information Technology</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Division</label>
                            <select onChange={(e) => setDivision(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Roll No.</label>
                            <input type="number" onChange={(e) => setRollNo(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                    </div>

                    <div className="flex justify-end mt-6">
                        <a href="/students" className="mx-4 px-6 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cancel</a>
                        <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default AddStudent;