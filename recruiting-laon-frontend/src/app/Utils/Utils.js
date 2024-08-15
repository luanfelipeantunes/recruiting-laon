import { Constants } from "./Contants";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: Constants.baseUrl,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

axiosInstance.interceptors.request.use(config => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;