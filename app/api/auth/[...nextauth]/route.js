import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // Define fields for email and password if using email/password authentication
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log("success");
        // Replace this with your actual user authentication logic
       
        return 34;
      },
    }),

    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "http://localhost:3000/login/", // Adjust the URL to your actual signIn page
  },
};


const handler= NextAuth(authOptions);
export {handler as GET,handler as POSt}