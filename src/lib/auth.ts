import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
 
export const auth = betterAuth({
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        authorizationParams: {
          prompt: 'consent select_account',
        },
      }
    },
    plugins: [nextCookies()],
  })

// export const auth = betterAuth({
// socialProviders: {
//     google: {
//         clientId: process.env.GOOGLE_CLIENT_ID!,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//         authorizationParams: {
//             prompt: 'select_account',
//           },
//     }
// },
//     plugins: [nextCookies()],
// })
