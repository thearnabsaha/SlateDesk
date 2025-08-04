import { ChevronDownIcon, ChevronUpIcon, Ellipsis, LucideIcon, Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
interface ItemProps {
    label?: string
    onClick?: () => void
    icon: LucideIcon
    children?: React.ReactNode
}
let paddingleft = 5;
const DocumentItem = ({ label, onClick, icon: Icon, children }: ItemProps) => {
    const [open, setOpen] = useState(false)
    const [childitem, setChilditem] = useState(1)
    useEffect(() => {
        if (children) {
            setChilditem((prev) => prev + 1)
        }
    }, [])

    return (
        <div>
            <div className='flex w-full items-center text-muted-foreground font-[500] py-1 hover:bg-accent cursor-pointer' onClick={() => setOpen((prev) => !prev)}>
                {open ? <ChevronDownIcon className='size-4 ml-4 mr-2' /> :
                    <ChevronUpIcon className='size-4 ml-4 mr-2' />}
                <Icon className='mr-2 size-4' />
                <p className=''>{label}</p>
                {<div className='ml-auto flex'>
                    <Ellipsis className='mr-3 size-4' />
                    <Plus className='mr-3 size-4' />
                </div>}
            </div>
            {open && <div style={{ paddingLeft: (paddingleft * childitem) + "px" }}>{children ? children : <p className='font-[500] text-sm text-ring' style={{ paddingLeft: (paddingleft + 30 * childitem) + "px" }}>No pages Inside</p>}</div>}
        </div>
    )
}

export default DocumentItem