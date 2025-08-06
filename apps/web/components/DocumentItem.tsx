import { Popover, PopoverContent, PopoverTrigger } from '@workspace/ui/components/popover'
import axios from 'axios'
import { ChevronDownIcon, ChevronRightIcon, Ellipsis, LucideIcon, Plus, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
interface ItemProps {
    label?: string
    onClick?: () => void
    icon: LucideIcon,
    ParentId: string,
    id: string,
    children?: React.ReactNode
}
let paddingleft = 5;
const DocumentItem = ({ label, onClick, icon: Icon, children, ParentId, id }: ItemProps) => {
    const [open, setOpen] = useState(false)
    const [childitem, setChilditem] = useState(1)
    useEffect(() => {
        if (children) {
            setChilditem((prev) => prev + 1)
        }
    }, [])
    const childPageHandler = (e) => {
        e.stopPropagation()
        axios.post('http://localhost:3001/document/', {
            "label": "Untitled",
            "documentId": id,
            "userId": "cmdq5vyme00002mx8wn15bx2l"
        })
            .then(function (response) {
                console.log(response);
                window.location.reload()

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const pageDeleteHandler = (e) => {
        e.stopPropagation()
        console.log(id)
        axios.delete('http://localhost:3001/document/', {
            data: {
                userId: "cmdq5vyme00002mx8wn15bx2l",
                id: id
            }
        })
            .then(function (response) {
                console.log(response);
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <div className='group/document-item flex w-full items-center text-muted-foreground font-[500] py-1 hover:bg-accent cursor-pointer' onClick={() => setOpen((prev) => !prev)}>
                {open ? <ChevronDownIcon className='size-4 ml-4 mr-2 shrink-0 min-w-4 min-h-4' /> :
                    <ChevronRightIcon className='size-4 ml-4 mr-2 shrink-0 min-w-4 min-h-4' />}
                <Icon className='mr-2 size-4 shrink-0 min-w-4 min-h-4' />
                <p className=''>{label}</p>
                {<div className='ml-auto flex invisible group-hover/document-item:visible' onClick={(e) => e.stopPropagation()}>
                    <Popover>
                        <PopoverTrigger asChild className='cursor-pointer'>
                            <Ellipsis className='mr-3 size-4' />
                        </PopoverTrigger>
                        <PopoverContent className="m-0 p-0 w-56 translate-x-30 bg-accent">
                            <h1 className="flex items-center p-2 cursor-pointer hover:bg-background" onClick={pageDeleteHandler}>
                                <Trash className='mr-3 size-4' />Delete</h1>
                            <div className='bg-ring w-full h-[1px]' />
                            <h1 className="p-2 text-xs font-[500] text-ring">Last Edited by: Arnab Saha</h1>
                        </PopoverContent>
                    </Popover>
                    <Plus className='mr-3 size-4' onClick={childPageHandler} />
                </div>}
            </div>
            {open && <div style={{ paddingLeft: (paddingleft * childitem) + "px" }}>
                {children}
            </div>}
        </div>
    )
}

export default DocumentItem