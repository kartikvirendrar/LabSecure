import axios from "axios";

export const getActivity = async () => 
  await axios.get(`/api/getActivity`);

export const getActivityById = async (id) => 
  await axios.get(`/api/getActivityById/${id}`);
