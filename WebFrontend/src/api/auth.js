import axios from "axios";

export const createOrUpdateUser = async (authtoken,name) => {
    return await axios.post(
      `/api/create-or-update-user`,
      {name},
      {
        headers: {
          authtoken,
        },
      }
    );
};
