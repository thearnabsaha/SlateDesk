import React, { useEffect, useState } from 'react'
import DocumentItem from './DocumentItem'
import { File } from 'lucide-react'
import axios from 'axios'
// const documents = [
//   {
//     "id": 1,
//     "label": "Page 1",
//     "child": [
//       {
//         "id": 2,
//         "label": "Child Page 1",
//         "child": []
//       },
//       {
//         "id": 3,
//         "label": "Child Page 2",
//         "child": [
//           {
//             "id": 4,
//             "label": "Grand Child Page 1",
//             "child": []
//           },
//           {
//             "id": 5,
//             "label": "Grand Child Page 2",
//             "child": []
//           },
//         ]
//       },
//     ],
//   }
// ]

// //@ts-ignore
// const RenderDocumentsChild = ({ nodes }) => {
//   return (
//     <>
//       {
//         nodes.map((e) => (
//           <DocumentItem icon={File} label={e.label} key={e.id}>
//             {
//               e.child && e.child.length > 0 && (
//                 <RenderDocumentsChild nodes={e.child} />
//               )
//             }
//           </DocumentItem>
//         ))
//       }
//     </>
//   )
// }

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
      {/* <RenderDocumentsChild nodes={documents} /> */}
      {/* <DocumentItem icon={File} label={}/> */}
      {
        documents.map((e) => {
          return (
            <></>
          )
        })
      }
    </div >
  )
}

export default Documents