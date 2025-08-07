import { childPageHandler, pageArchievedHandler, pageDeleteHandler } from '@/lib/ApiFunctions'
import { Popover, PopoverContent, PopoverTrigger } from '@workspace/ui/components/popover'
import { ChevronDownIcon, ChevronRightIcon, Ellipsis, LucideIcon, Plus, Trash, Undo } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
interface ItemProps {
    label?: string
    onClick?: () => void
    icon: LucideIcon,
    id: string,
    children?: React.ReactNode
}
let paddingleft = 5;

const ArchievedDocumentsItem = ({ label, onClick, icon: Icon, children, id }: ItemProps) => {
    const [open, setOpen] = useState(false)
    const [childitem, setChilditem] = useState(1)
    const { data: session, status } = useSession()
    useEffect(() => {
        if (children) {
            setChilditem((prev) => prev + 1)
        }
    }, [])
    return (
        <div>
            <div className='group/document-item flex w-full items-center text-muted-foreground font-[500] py-1 hover:bg-accent cursor-pointer' onClick={() => setOpen((prev) => !prev)}>
                {open ? <ChevronDownIcon className='size-4 ml-4 mr-2 shrink-0 min-w-4 min-h-4' /> :
                    <ChevronRightIcon className='size-4 ml-4 mr-2 shrink-0 min-w-4 min-h-4' />}
                <Icon className='mr-2 size-4 shrink-0 min-w-4 min-h-4' />
                <p className=''>{label}</p>
                {<div className='ml-auto flex invisible group-hover/document-item:visible' onClick={(e) => e.stopPropagation()}>
                    <Undo className='mr-3 size-4' />
                    {/* <Plus className='mr-3 size-4' onClick={(e) => childPageHandler(e, id, session?.user?.id)} /> */}
                    <Trash className='mr-3 size-4' />
                </div>}
            </div>
            {open && <div style={{ paddingLeft: (paddingleft * childitem) + "px" }}>
                {children}
            </div>}
        </div>
    )
}

export default ArchievedDocumentsItem