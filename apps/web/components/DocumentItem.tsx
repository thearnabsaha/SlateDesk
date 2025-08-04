import { ChevronDownIcon, ChevronUpIcon, Icon, LucideIcon } from 'lucide-react'
import React, { useState } from 'react'
interface ItemProps {
    label?: string
    onClick?: () => void
    icon?: LucideIcon
    children?: React.ReactNode
}
const DocumentItem = ({ label, onClick, icon: Icon, children }: ItemProps) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='flex w-full items-center text-muted-foreground font-[500]' onClick={() => setOpen((prev) => !prev)}>
                {open ? <ChevronDownIcon className='size-4 ml-4 mr-2' /> :
                    <ChevronUpIcon className='size-4 ml-4 mr-2' />}
                {/* {Icon && <Icon className='mr-1 size-4' />} */}
                <p className=''>{label}</p>

            </div>
            {open ? <>{children}</> : <p className=''>No pages Inside</p>}

        </div>
    )
}

export default DocumentItem