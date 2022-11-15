import React, { useEffect, useRef} from 'react'
import { useGlobalContext } from '../context'
const SearchForm = () => {
const {setSearchText,meals,setFilterText}=useGlobalContext()
const searchValue=useRef("")
function searchMeal(){
  setSearchText(searchValue.current.value)
}
const handleSubmit=(e)=>{
  e.preventDefault()
}
useEffect(()=>{
  searchValue.current.focus()//when app will run cursor will automatically in focus
},[setSearchText])
let uniqueCategory=[...new Set (meals.map(e=>e.type))]
  return (
   <section className="section search">
      <form className="search-form" >
        <div className="form-control" onSubmit={handleSubmit}>
          <label htmlFor="name">Search food</label>
          <input type="text" name="name" id="name" ref={searchValue} onChange={searchMeal} />
        </div>
        <div className="form-control">
          <label htmlFor="name">Filter food</label>
          <select id="">
            <option >All</option>
              {
              uniqueCategory.map(single=>{
                return (    
                <option key={single}  onClick={()=>setFilterText(single)}>{single}</option>
                )
              })
              }
          </select>  
        </div>
      </form>
   </section>
  )
}

export default SearchForm
