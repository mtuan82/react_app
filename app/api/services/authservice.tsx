import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { User, ResUser } from "../interfaces/User";
import { getCookie, deleteCookie, setCookie, hasCookie } from 'cookies-next';

const apiUrl = process.env.API_URL;

export async function login(data: User): Promise<ResUser> {
    var res: ResUser = {
        status: 0,
        token: "",
        errorMsg: ""
    }
    if (hasCookie("token")) {
        deleteCookie("token");
    }
    //${apiUrl}
    const result = await axios.post(`http://localhost:7070/api/Account/Login`, data)
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

export function getCurrentUser(): string {
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

export function logout(): void {
    deleteCookie("token");
}

export function forgotPassword(email: string): ResUser {
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