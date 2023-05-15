import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import type { NextAuthOptions } from "next-auth";
import { ENV } from "@/lib/env";

export const authOptions: NextAuthOptions = {
	providers: [
		Auth0Provider({
			clientId: ENV.AUTH0_CLIENT_ID,
			clientSecret: ENV.AUTH0_CLIENT_SECRET,
			issuer: ENV.AUTH0_ISSUER_BASE_URL
		})
	],
	session: {
		strategy: "jwt"
	},
	callbacks: {
		async session({ session, token, user }) {
			return session;
		}
	}
}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
