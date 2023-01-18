import axios from "axios";

export const findUserByEmail = async (email) => {
    return await axios.post(
      `/api/check-user-email`,
      {email}
    );
};