import React from 'react'
import DocumentItem from './DocumentItem'
import { File } from 'lucide-react'
const documents = [
  {
    "id": 1,
    "label": "Page 1",
    "child": [
      {
        "id": 2,
        "label": "Child Page 1",
        "child": []
      },
      {
        "id": 3,
        "label": "Child Page 2",
        "child": [
          {
            "id": 4,
            "label": "Grand Child Page 1",
            "child": []
          },
          {
            "id": 5,
            "label": "Grand Child Page 2",
            "child": []
          },
        ]
      },
    ],
  }
]
const RenderDocumentsChild = ({ nodes }: { nodes: typeof documents }) => {
  return (
    <>
      {
        nodes.map((e) => (
          <DocumentItem icon={File} label={e.label} key={e.id}>
            {
              e.child && e.child.length > 0 && (
                <RenderDocumentsChild nodes={e.child} />
              )
            }
          </DocumentItem>
        ))
      }
    </>
  )
}

const Documents = () => {
  return (
    <div>
      <RenderDocumentsChild nodes={documents} />
    </div >
  )
}

export default Documents