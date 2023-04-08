import Axios from "axios";
import { IService } from "../interface/interfaces";
import { showErrorToast } from "../utils/toasts";


const API = import.meta.env.VITE_SERVEZY_API;

export const CreateService = async (service: IService) => {

    try {
        const response = await Axios.post(`${API}/service/create`, service);
        return response;
    } catch (error: any) {
        showErrorToast(error.message);
    }
};

