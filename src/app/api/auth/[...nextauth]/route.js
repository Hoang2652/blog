import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export default async function auth(req, res) {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
  ]

  const isDefaultSigninPage = req.method === "GET" && req.query.nextauth.includes("signin")

  // Will hide the `GoogleProvider` when you visit `/api/auth/signin`
  if (isDefaultSigninPage) providers.pop()

  return await NextAuth(req, res, {
    providers,
  })
}