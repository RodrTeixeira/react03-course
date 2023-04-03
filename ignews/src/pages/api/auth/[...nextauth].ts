// import NextAuth from "next-auth"
// import Providers from "next-auth/providers"

// export default NextAuth({

//   providers: [
//     Providers.GitHub({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       scope: "read:user"
//     }),

//   ],
// })



import { query as q } from "faunadb";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

//import fauna from "../../../services/fauna";
import { fauna } from "../../../services/fauna";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn(user, account, profile) {
    //async signIn({ user, account, profile, email, credentials }) {
      //console.log(user);

      // const { email } = user

      // try {
      //   await fauna.query(
      //     q.If(
      //       q.Not(
      //         q.Exists(
      //           q.Match(
      //             q.Index("user_by_email"),
      //             q.Casefold(user.email)
      //           )
      //         )
      //       ),
      //       q.Create(
      //         q.Collection("users"),
      //         { data: { email } }
      //       ),
      //       q.Get(
      //         q.Match(
      //           q.Index("user_by_email"),
      //           q.Casefold(user.email)
      //         )
      //       )
      //     )
      //   )
      //   return true
      // } catch {
      //   return false
      // }

      // try {
      //   await fauna.query(
      //     q.Create(
      //       q.Collection("users"),
      //       { data: { emails } }
      //       //{ data: { email } }
      //     )
      //   )
      //   return true
      // } catch {
      //   return false
      // }

      return true
    },
  }
}
export default NextAuth(authOptions)