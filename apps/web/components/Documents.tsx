import React from 'react'
import DocumentItem from './DocumentItem'
import { File } from 'lucide-react'

const Documents = () => {
  return (
    <div>
      <DocumentItem icon={File} label='Untitled'>
        <DocumentItem icon={File} label='Untitled' />
        <DocumentItem icon={File} label='Untitled' >
          <DocumentItem icon={File} label='Untitled' />
          <DocumentItem icon={File} label='Untitled' >
            <DocumentItem icon={File} label='Untitled' />
            <DocumentItem icon={File} label='Untitled' >
              <DocumentItem icon={File} label='Untitled' >
                <DocumentItem icon={File} label='Untitled' >
                  <DocumentItem icon={File} label='Untitled' >
                    <DocumentItem icon={File} label='Untitled' >
                      <DocumentItem icon={File} label='Untitled' />
                    </DocumentItem>
                    <DocumentItem icon={File} label='Untitled' />
                  </DocumentItem>
                  <DocumentItem icon={File} label='Untitled' />
                </DocumentItem>
                <DocumentItem icon={File} label='Untitled' />
              </DocumentItem>
              <DocumentItem icon={File} label='Untitled' />
            </DocumentItem>
          </DocumentItem>
        </DocumentItem>
      </DocumentItem>
      {/* <DocumentItem label='New Page' /> */}
    </div >
  )
}

export default Documents