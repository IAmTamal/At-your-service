/* Get the full profile data for the user */

import Axios from 'axios';


const API = import.meta.env.VITE_SERVEZY_API;

export const fetchProfiledata = async () => {
    const response = await Axios.get(`${API}/auth/getprofiledata`, {
        withCredentials: true,
    });
    return response.data;
};
