import { SidebarProvider, SidebarTrigger } from "@workspace/ui/components/sidebar"
import { AppSidebar } from "../../components/app-sidebar"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-col w-full">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}