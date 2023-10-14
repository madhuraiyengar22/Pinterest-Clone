import React from 'react'

function UploadImage() {
  return (
    <div className=' w-full h-full bg-[rgb(233,233,233)] flex items-center justify-center rounded-xl'>
        <input type="file" accept='image/png, image/jpeg' placeholder='Select or DragnDrop your image'/>
    </div>
  )
}

export default UploadImage