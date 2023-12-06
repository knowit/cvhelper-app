import { authOptions } from "@/options/authOptions";
import NextAuth, { AuthOptions, User } from "next-auth"

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }