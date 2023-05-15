import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { ENV } from "@/lib/env";

const handler = NextAuth({
	providers: [
		Auth0Provider({
			clientId: ENV.AUTH0_CLIENT_ID,
			clientSecret: ENV.AUTH0_CLIENT_SECRET,
			issuer: ENV.AUTH0_ISSUER_BASE_URL
		})
	]
})

export { handler as GET, handler as POST }
