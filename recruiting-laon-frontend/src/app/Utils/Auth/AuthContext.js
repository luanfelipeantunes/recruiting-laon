import axiosInstance from "../Utils";
import { Constants } from "../Contants";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token && user) {
            setUser(JSON.parse(user));
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
            setUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            return response;

        } catch (error) {
            return error.response;
        }
    };

    const signout = () => {
        axiosInstance.post(Constants.baseUrl + '/logout')
            .then(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setUser(null);
                setIsAuthenticated(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signin, signout, isLoading, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}
