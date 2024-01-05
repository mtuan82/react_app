import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { User, ResUser } from "../interfaces/User";
import { getCookie, deleteCookie, setCookie, hasCookie } from 'cookies-next';

const apiUrl = process.env.API_URL;

export function login(data: User): ResUser {
    var res: ResUser = {
        status: 0,
        token: "",
        errorMsg: ""
    }
    if (hasCookie("token"))
    {
        deleteCookie("token");
    }

const tokenArray = [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiJZekV6TUdkb01ISm5PSEJpT0cxaWJEaHlOVEE9IiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJzY29wZSI6ImEsIGIiLCJpc3MiOiJiamhJUmpNMWNYcGFhMjF6ZFd0SVNucDZlamxNYms0NGJUbE5aamszZFhFPSIsInN1YiI6Ill6RXpNR2RvTUhKbk9IQmlPRzFpYkRoeU5UQT0iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDozMDAwL2F1dGgvbG9naW4iLCJqdGkiOiIxNTE2MjM5MDIyIiwiZXhwIjoiMjAyNC0wNS0xN1QwNzowOTo0OC4wMDArMDU0NSJ9.8IlJjcQaAYGJIYbKCj-t40cKK_rzebWUvEuEnQvyD8Q",
   // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiJZekV6TUdkb01ISm5PSEJpT0cxaWJEaHlOVEE9IiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJzY29wZSI6ImEsIGIiLCJpc3MiOiJiamhJUmpNMWNYcGFhMjF6ZFd0SVNucDZlamxNYms0NGJUbE5aamszZFhFPSIsInN1YiI6Ill6RXpNR2RvTUhKbk9IQmlPRzFpYkRoeU5UQT0iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDozMDAwL2F1dGgvbG9naW4iLCJqdGkiOiIxNTE2MjM5MDIyIiwiZXhwIjoiMjAyMi0wNS0xN1QwNzowOTo0OC4wMDArMDU0NSJ9.p43HpUUjepG-PG4R5obLBrVqkMDQWdnvkDTgIBKnQSY",
  ];    
    //const result = axios.post(`${apiUrl}/auth`, data);
    res = {
        status: 200,
        token: tokenArray[Math.floor(Math.random() * tokenArray.length)],
        errorMsg: ""
    };
    setCookie("token", res.token);
    return res;
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