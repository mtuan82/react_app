import axios from "axios";
import { jwtDecode,JwtPayload } from "jwt-decode";
import { User, ResUser } from "../interfaces/User";
import { getCookie, deleteCookie, setCookie, hasCookie } from 'cookies-next';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function register(data: any): Promise<string> {

    if (data == null) {
        return "Account info is required";
    }

    await axios.post(`${apiUrl}/api/Account/Register`, data)
        .then( (response) => {
            return "";
        })
        .catch( (error) => {
            throw error;
        });
    return "";
}

export async function login(data: User): Promise<void> {

    if (hasCookie("token")) {
        deleteCookie("token");
    }

    await axios.post(`${apiUrl}/api/Account/Login`, data)
        .then( (response) => {
            setCookie("token", response.data.token);
        })
        .catch( (error) => {
            throw error;
        });
}

export function getCurrentUser(): string {
    try {
        const token = getCookie("token");
        type customJwtPayload = JwtPayload & { 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string };
        if (token) {
            let data = jwtDecode<customJwtPayload>(token);
            return data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        }
        else
            return "";
    } catch (error) {
        return "";
    }
}

export function getRoleUser(): string {
    try {
        const token = getCookie("token");
        type customJwtPayload = JwtPayload & { "http://schemas.microsoft.com/ws/2008/06/identity/claims/role":string };
        if (token) {
            let data = jwtDecode<customJwtPayload>(token);
            return data["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        }
        else
            return "";
    } catch (error) {
        return "";
    }
}

export function getClaimUser(): string[] {
    try {
        const token = getCookie("token");
        type customJwtPayload = JwtPayload & { scope:string[] };
        if (token) {
            let data = jwtDecode<customJwtPayload>(token);
            return data["scope"];
        }
        else
            return [];
    } catch (error) {
        return [];
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