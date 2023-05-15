import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth"

export default async function MyAccount() {
	const session = (await getServerSession(authOptions))!;

	return (
		<main>
			<h1>My Account Page</h1>
			<div>
				This page requires auth. <br />
				Currently logged in as {session.user!.name}
			</div>
		</main>
	)
}
