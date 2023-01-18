import axios from "axios";

export const getStudents = async () => 
  await axios.get(`/api/getStudents`);

export const addStudent = async (student) => 
  await axios.post(`/api/addStudent`, student);

export const updateStudent = async (id, student) => 
  await axios.post(`/api/student/update/${id}`, student);

export const getStudentById = async (id) => 
  await axios.get(`/api/student/${id}`);

export const getStudentActivityByPrn = async (prn) => 
  await axios.get(`/api/student/activity/${prn}`);