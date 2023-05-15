"use client";

import { cn } from "@/utils/tailwindUtils";
import Link from "next/link";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext({ isOpen: false });

export default function Sidebar({
	children
}: {
	children: React.ReactNode
}) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<SidebarContext.Provider value={{ isOpen }}>
			<button 
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className={cn("col-span-full")}
			>
				Nav
			</button>
			<SidebarNav />
			<div className={cn(
				"col-span-full",
				{"col-span-9": isOpen}
			)}>
				{children}
			</div>
		</SidebarContext.Provider>
	)
}

function SidebarNav() {
  let { isOpen } = useContext(SidebarContext);

  return (
		<>
			{isOpen && (
				<div className={cn("col-span-3")}> 
					<>
						<ul>
							<li><Link href="/">Home</Link></li>
							<li><Link href="/about">About</Link></li>
						</ul>
					</>
				</div>
			)}
		</>
  );
}
