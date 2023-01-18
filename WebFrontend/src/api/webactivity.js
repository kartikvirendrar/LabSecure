import axios from "axios";

export const viewWebHistory = async (student) => 
  await axios.post(`/api/viewWebHistory`, student);
