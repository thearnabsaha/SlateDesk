import React, { useEffect, useState } from 'react'
import DocumentItem from './DocumentItem'
import { File } from 'lucide-react'
import axios from 'axios'
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
              <DocumentItem icon={File} label={e.label}>
                <RenderDocumentsChild nodes={nodes} parentId={e.id} />
              </DocumentItem>
            </div>
          )
        })
      }
    </>
  )
}

const Documents = () => {
  const [documents, setDocuments] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/document/cmdq5vyme00002mx8wn15bx2l").then((e) => {
      console.log(e.data.message)
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

export default Documents