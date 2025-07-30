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



export function AppSidebar() {

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
            {/* {children} */}
        </>
    );
}