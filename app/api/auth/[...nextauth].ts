import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { CustomUser } from "../../../typescript.types/tstypes";
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
  ],
});
