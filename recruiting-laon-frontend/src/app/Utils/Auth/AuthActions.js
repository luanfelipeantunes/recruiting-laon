import axiosInstance from "../Utils";
import { Constants } from "../Contants";


//Realização de Login
export const signin = async (credentials) => {
    try {
        const response = await axiosInstance.post(Constants.baseUrl + '/login', credentials);

        localStorage.setItem('token', response.data.token);

        return response;
    } catch (error) {
        return error.response;
    }
};