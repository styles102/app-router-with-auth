import Sidebar from "@/components/Sidebar"
import { cn } from "@/utils/tailwindUtils"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<section className={cn("grid grid-cols-12")}>
			<Sidebar>
				{children}
			</Sidebar>
		</section>
	)
}
