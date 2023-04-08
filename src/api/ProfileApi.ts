/* Get the full profile data for the user */

import Axios from 'axios';


const API = import.meta.env.VITE_SERVEZY_API;

export const fetchProfiledata = async (username: any) => {

    console.log(username);
    const response = await Axios.get(`${API}/auth/getprofiledata/${username}`);

    return response;
};
