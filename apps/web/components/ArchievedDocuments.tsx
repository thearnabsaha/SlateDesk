import React, { useEffect, useState } from 'react'
import DocumentItem from './DocumentItem'
import { File } from 'lucide-react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { BACKEND_URL } from '@/lib/config'
import ArchievedDocumentsItem from './ArchievedDocumentsItem'
interface DocumentNode {
    id: string
    label: string
    documentId: string | null
}
interface RenderDocumentsChildProps {
    nodes: DocumentNode[]
    parentId?: string | null
}
const RenderDocumentsChild = ({ nodes, parentId = null }: RenderDocumentsChildProps) => {
    const currentNodes = nodes.filter((e) => e.documentId === parentId)
    return (
        <>
            {
                currentNodes.map((e) => {
                    return (
                        <div key={e.id}>
                            <ArchievedDocumentsItem icon={File} label={e.label} id={e.id}>
                                <RenderDocumentsChild nodes={nodes} parentId={e.id} />
                            </ArchievedDocumentsItem>
                        </div>
                    )
                })
            }
        </>
    )
}

const ArchievedDocuments = () => {
    const { data: session, status } = useSession()
    const [documents, setDocuments] = useState([])
    useEffect(() => {
        axios.get(`${BACKEND_URL}document/${session?.user?.id}`).then((e) => {
            setDocuments(e.data.message)
        }).catch(function (error) {
            console.log(error);
        });
    }, [])
    return (
        <div>
            <RenderDocumentsChild nodes={documents} />
        </div >
    )
}

export default ArchievedDocuments
