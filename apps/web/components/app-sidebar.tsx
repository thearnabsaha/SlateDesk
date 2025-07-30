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
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { ChevronsUpDown } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@workspace/ui/components/popover"


export function AppSidebar() {
    const { data: session, status } = useSession()
    return (
        <>
            {session && <Sidebar>
                <SidebarHeader className="cursor-pointer">
                    <Popover>
                        <PopoverTrigger asChild>
                            <div className="flex items-center space-x-1 pl-2 pt-2">
                                <Image src={session.user?.image || "/default.png"} width={20} height={20} alt="book" className=" rounded-4xl" />
                                <h1 className=" font-semibold">{session.user?.name}</h1>
                                <ChevronsUpDown className="text-ring text-sm size-4 cursor-pointer" />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="m-0 p-0 w-72 translate-x-10">
                            <h1 className=" font-medium text-xs text-ring pt-2 px-2">{session.user?.email}</h1>
                            <div className="flex space-x-1 items-center p-2 pb-3">
                                <Image src={session.user?.image || "/default.png"} width={30} height={30} alt="book" className="w-[30px] h-[30px] rounded-4xl" />
                                <h1 className=" font-medium text-xs">{session.user?.name}'s Desk</h1>
                            </div>
                            <hr />
                            <h1 className="text-xs text-ring font-semibold cursor-pointer px-2 py-1" onClick={() => signOut({ callbackUrl: "/" })}>Log Out</h1>
                        </PopoverContent>
                    </Popover>
                </SidebarHeader>
                <SidebarContent>

                </SidebarContent>
                <SidebarFooter>

                </SidebarFooter>
                <SidebarRail />
            </Sidebar>}
        </>
    );
}