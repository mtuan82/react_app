import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { User, ResUser } from "../interfaces/User";
import { getCookie, deleteCookie, setCookie, hasCookie } from 'cookies-next';

const apiUrl = process.env.NEXT_PUBLIC_API_URL; 

export async function login(data: User): Promise<ResUser> {
    var res: ResUser = {
        status: 0,
        token: "",
        errorMsg: ""
    }
    if (hasCookie("token")) {
        deleteCookie("token");
    }

    const result = await axios.post(`${apiUrl}/api/Account/Login`, data)
        .then(function (response) {
            return res = {
                status: response.status,
                token: response.data.token,
                errorMsg: ""
            };
        })
        .catch(function (error) {
            return res = {
                status: error.status,
                token: "",
                errorMsg: error.data.error
            };
        });
    setCookie("token", result.token);
    return res = {
        status: result.status,
        token: result.token,
        errorMsg: result.errorMsg
    };
}

export async function getCurrentUser(): Promise<string> {
    try {
        const token = getCookie("token");
        if (token)
            return jwtDecode(token);
        else
            return "";
    } catch (error) {
        return "";
    }
}

export async function logout(): Promise<void> {
    deleteCookie("token");
}

export async function forgotPassword(email: string): Promise<ResUser> {
    var res: ResUser = {
        status: 0,
        token: "",
        errorMsg: ""
    }
    res = {
        status: 200,
        token: "",
        errorMsg: ""
    };
    return res;
}