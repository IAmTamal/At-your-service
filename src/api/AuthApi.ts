import Axios from "axios";
import { ICredentials } from "../interface/interfaces";
import { showErrorToast } from "../utils/toasts";


const API = import.meta.env.VITE_SERVEZY_API;


export const LoginUser = async (creds: ICredentials) => {

    try {
        const response = await Axios.post(`${API}/auth/login`, creds);
        return response;
    } catch (error: any) {
        showErrorToast(error.message);
    }

};

export const RegisterUser = async (creds: ICredentials) => {

    try {
        const response = await Axios.post(`${API}/auth/register`, creds);
        return response;
    } catch (error) {
        console.log(error);
    }

};
