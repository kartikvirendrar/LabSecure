import axios from "axios";

export const viewAppHistory = async (student) => 
  await axios.post(`/api/viewAppHistory`, student);
