import { NextResponse } from 'next/server';
 
export function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/login' || path === '/usertype' || path === '/buyerRegister' || path === '/farmerRegister'

    const token = request.cookies.get('token')?.value || ''

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}
 
export const config = {
  matcher: [
    '/',
    '/dashboard',
    '/login',
    '/usertype',
    '/buyerRegister',
    '/farmerRegister',
    '/addcrop',
    '/farmerDash',
    '/buyerDash',
    '/bidDash',
    'bidsubmit',
    'logout'
  ]
}