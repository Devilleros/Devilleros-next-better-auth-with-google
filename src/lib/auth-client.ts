import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient()
//     // baseURL: "http://localhost:3000"
// })

export const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        })
        console.log("data:", data)
    }

export const signOut = async () => {
        await authClient.signOut();
        if (typeof window !== "undefined") {            
            window.location.href = "/login";
            //window.location.href = `https://accounts.google.com/Logout?continue=https://appengine.google.com/_ah/logout?continue=${encodeURIComponent("http://localhost:3000/login")}`
            // window.location.href = "/";
        }
    }

export const { useSession } = createAuthClient()



// import { createAuthClient } from "better-auth/client"
// import { nextCookies } from "better-auth/next-js" ///cookies


// const authClient =  createAuthClient({
//     plugins: [nextCookies()]
// })
 
// export const signIn = async () => {
//     const data = await authClient.signIn.social({
//         provider: "google"
//     })
// }
// export const signOut = async () => {
//     await authClient.signOut();
  
//     if (typeof window !== "undefined") {
//       window.location.href = "/login";
//     }
//   };