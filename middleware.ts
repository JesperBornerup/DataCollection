import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export async function middleware(req: NextRequest) {
    let cookie = req.cookies.get('userID');
    //if the cookies doesn't exist, redirect to the login page
    if (!cookie) {
        const url = req.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.rewrite(url);
    }

    
    return NextResponse.next();
    }
    

export const config = {
    matcher: '/survey/'
}