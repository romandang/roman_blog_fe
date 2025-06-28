import { BASE_URL } from "@/utils/common";
import { API } from "@/utils/endpoints";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "yourname" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const results = await fetch(API.AUTH.SIGN_IN, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          });

          const resultsJson = await results.json();
          const accessToken = resultsJson?.response?.data?.access_token;
          const expiredIn = resultsJson?.response?.data?.expired_in; 
          // ví dụ API trả về { user: {...}, accessToken: "xxxx" }
          if (accessToken) {
            const getUserInfo = await fetch(API.AUTH.GET_USER_INFO, {
              method: "GET",
              headers: { "Content-Type": "application/json", "Authorization": `Bearer ${accessToken}` },
            });

            const resultsUserInfo = await getUserInfo.json();
            const userInfo = resultsUserInfo?.response?.data;

            return {
              id: userInfo.email,
              name: userInfo.authorName,
              email: userInfo.email,
              avatar: userInfo.avatar,
              accessToken,
              accessTokenExpiredIn: expiredIn
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],  
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.email;
        token.authorName = user.authorName;
        token.email = user.email;
        token.avatar = user.avatar;
        token.accessToken = user.accessToken;
        token.accessTokenExpiredIn = user.accessTokenExpiredIn;
      }

      if (Date.now() > token.accessTokenExpiredIn) {
        return {
          ...token,
          error: "SessionExpired"
        };
      }
      return token
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        avatar: token.avatar,
      };
      session.accessToken = token.accessToken;
      session.error = token.error;
      
      return session;
    }
  },
  
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
