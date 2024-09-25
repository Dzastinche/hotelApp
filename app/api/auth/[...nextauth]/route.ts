import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { CustomUser } from "@/typescript.types/tstypes";
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "signIn",
      credentials: {
        username: {
          type: "text",
          label: "username",
          placeholder: "your username",
        },
        email: {
          type: "email",
          label: "email",
          placeholder: "your email",
        },
        password: {
          type: "password",
          label: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const user = {
          id: "1",
          username: "da",
          email: "neki@gmail.com",
          password: "2",
        };
        if (
          credentials.username === user.username &&
          credentials.password === user.password
        ) {
          const currentUser: CustomUser = {
            username: credentials.username,
            email: credentials.email,
            id: user.id,
          };
          return currentUser;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      if (account !=null && profile !==undefined){
        if (account.provider === "google") {
          return profile.email_verified && profile.email.endsWith("@example.com")
        }
      }
      
      return true // Do different verification for other providers that don't have `email_verified`
    },
  }
  ...
});
