import React from 'react'
import DocumentItem from './DocumentItem'
import { Search } from 'lucide-react'

const Documents = () => {
  return (
    <div>
      <DocumentItem icon={Search} label='Untitled' />
      <DocumentItem icon={Search} label='Untitled' />
      <DocumentItem icon={Search} label='Untitled' />
      <DocumentItem icon={Search} label='Untitled' />
      {/* <DocumentItem label='New Page' /> */}
    </div >
  )
}

export default Documents