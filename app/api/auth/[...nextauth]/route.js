import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import nextAppLoader from "next/dist/build/webpack/loaders/next-app-loader";

const authOptions = {
    providers : [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials){
                const user = {id: "1"};
                return user;
            }
        })
    ],
    session: {
        strategy : "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET, 
    pages: {
        signIn: "/",
    }
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};