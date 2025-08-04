import { Search } from 'lucide-react'
import React from 'react'

const SidebarItems = () => {
    return (
        <div className='flex w-full items-center text-muted-foreground font-[500]'>
            <Search className='ml-4 mr-2 size-4' />
            <p className=''>Search</p>
            <p className='border border-sidebar-ring rounded-sm text-xs p-1 px-1.5 ml-auto mr-4'>⌘ K</p>
        </div>
    )
}

export default SidebarItems