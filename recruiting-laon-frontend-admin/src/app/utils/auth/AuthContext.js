import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../Utils"
import { Constants } from "../Constants";


const AuthContext = createContext();

export function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            setIsAuthenticated(true);
        };
        setIsLoading(false);
    }, []);

    //Função de login
    const signin = async (credentials) => {
        try {
            const response = await axiosInstance.post(Constants.baseUrl + "/login", credentials);
            localStorage.setItem('token', response.data.token);
            setIsAuthenticated(true);
            setUser(response.data.user);
            return response;
        }catch (error){
            return error.response;
        }
    };

    //Função de logout
    const signout = () => {
        axiosInstance.post(Constants.baseUrl + "/logout")
        .then(() => {
            localStorage.removeItem('token');
            setIsAuthenticated(false);
            setUser(null);
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, user, isLoading, signin, signout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    return useContext(AuthContext);
}