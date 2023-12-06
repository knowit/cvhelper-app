// import { withAuthProvider } from "./middlewares/withAuthentication"

import { withAuth } from "next-auth/middleware"
import { authOptions } from "./options/authOptions"

// import { withAuth } from "./middlewares/withAuthentication";
// export default withAuth({});

export default withAuth({
  pages: authOptions.pages
})

export const config = {
  matcher: [
    /*
    * Match all request paths except for the ones starting with:
    * - api (API routes)
    * - _next/static (static files)
    * - _next/image (image optimization files)
    * - favicon.ico (favicon file)
    */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
}