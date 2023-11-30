import { SearchOutlined } from '@ant-design/icons'
import React from 'react'

function SearchComponent({searchData,setSearchData}) {
  return (
    <div> 
        <a href="#" className="absolute px-2"><SearchOutlined/></a>
          <span><input type="text" name="" id="" defaultValue={searchData} onChange={(e)=>setSearchData(e.target.value)} className="py-1 px-8 rounded border boredr-gray-100" /></span>
   </div>
  )
}

export default SearchComponent