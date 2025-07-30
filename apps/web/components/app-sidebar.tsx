// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarGroup,
//     SidebarHeader,
// } from "@workspace/ui/components/sidebar"
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@workspace/ui/components/resizable"
// export function AppSidebar() {
//     return (
//         <Sidebar>
//             <SidebarHeader />
//             <SidebarContent>
//                 <SidebarGroup />
//                 <SidebarGroup />
//             </SidebarContent>
//             <SidebarFooter />
//         </Sidebar>
//     )
// }
"use client";

import * as React from "react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@workspace/ui/components/sidebar";



export function AppSidebar({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Sidebar>
                <SidebarHeader>

                </SidebarHeader>
                <SidebarContent>

                </SidebarContent>
                <SidebarFooter>

                </SidebarFooter>
                <SidebarRail />
            </Sidebar>
            {children}
        </>
    );
}