import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { prisma } from "@workspace/database/client"
// export const { auth, handlers, signIn, signOut } = NextAuth({
const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt", maxAge: 60 * 60 * 24 },
    ...authConfig,
    callbacks: {
        async session({ session, token }) {
            // You need to store the user ID here
            if (token?.sub) {
                session.user.id = token.sub; // This is your internal DB user.id
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id; // user.id comes from your DB adapter
            }
            return token;
        },
    }
});

export default handler;