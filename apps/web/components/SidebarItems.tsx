import { LucideIcon, Search } from 'lucide-react'
import React from 'react'
interface ItemProps {
    label: string
    onClick?: () => void
    icon: LucideIcon
    shortcut?: string
}
const SidebarItems = ({ label, onClick, icon: Icon, shortcut }: ItemProps) => {
    return (
        <div className='flex w-full items-center text-muted-foreground font-[500]' onClick={onClick}>
            <Icon className='ml-4 mr-2 size-4' />
            <p className=''>{label}</p>
            {shortcut && <p className='border border-sidebar-ring rounded-sm text-xs p-1 px-1.5 ml-auto mr-4'>{shortcut}</p>}
        </div>
    )
}

export default SidebarItems