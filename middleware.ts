
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtDecode } from "jwt-decode";
import { isExpiredToken } from './app/utilities'

export default function middleware(req: NextRequest) {

    var cookieToken = req.cookies.get("token")?.value;
    var token: string = cookieToken == undefined ? "" : cookieToken;
    const path = req.nextUrl.pathname
    console.log(req.url);

    if (token != undefined && token != "" && !path.includes('/login')) {
        var decodedToken = jwtDecode(token);
        if (!isExpiredToken(decodedToken)) {
            return NextResponse.redirect(new URL('/auth/login', req.url))
        }
    }

    if (path.includes('/features') && (token == undefined || token == "")) {
        console.log("request without token");
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    return NextResponse.next()
}

