import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { publicRoutes, protectedRoutes, apiAuthPrefix } from "./routes";
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  console.log('MIDDLEWARE', req.nextUrl.pathname);
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  
  console.log('isLoggedIn', isLoggedIn);

  // const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  // const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);

  // if (isApiAuthRoute) {
  //   return null;
  // } 

  // if (isProtectedRoute) {
  //   if (isLoggedIn) {
  //     return Response.redirect(new URL('/settings', nextUrl));
  //   }

  //   return Response.redirect(new URL('/auth/login', nextUrl));
  // }

});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
     '/(api|trpc)(.*)',
  ],
}