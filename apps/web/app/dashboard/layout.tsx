"use client"
import { SidebarProvider, SidebarTrigger } from "@workspace/ui/components/sidebar"
import { AppSidebar } from "../../components/app-sidebar"
import { signOut } from "next-auth/react"
import { Button } from "@workspace/ui/components/button"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-col w-full">
                <div className="flex justify-between py-4">
                    <SidebarTrigger />
                    {/* <Button
                        className="btn btn-secondary mx-2 cursor-pointer"
                        onClick={() => signOut({ callbackUrl: "/" })}>
                        Logout
                    </Button> */}
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}