import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sdata from './Sdata'
import Products from './Products'
function SearchItems() {
  const {term} =useParams()

  const [filterData ,setFilterData] = useState([])

  useEffect(()=>{
    const filteredData = ()=>{
      const data = Sdata.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
      setFilterData(data)
    }
    filteredData()
  }, [term])
  return (
    <div>
      <Products Sdata={filterData} />
    </div>
  )
}

export default SearchItems
