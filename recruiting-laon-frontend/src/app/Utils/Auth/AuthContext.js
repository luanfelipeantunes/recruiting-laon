import axiosInstance from "../Utils";
import { Constants } from "../Contants";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
       setIsAuthenticated(true);
    };
    setIsLoading(false);
    }, []);


    //Realização de Login
    const signin = async (credentials) => {
        try {
            const response = await axiosInstance.post(Constants.baseUrl + '/login', credentials);
            localStorage.setItem('token', response.data.token);
            setIsAuthenticated(true);
            return response;

        } catch (error) {
            return error.response;
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, signin, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}
