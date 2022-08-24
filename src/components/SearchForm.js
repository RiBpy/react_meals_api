import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'
const SearchForm = () => {
const {setSearchText}=useGlobalContext()
const searchValue=useRef("")
function searchMeal(){
  setSearchText(searchValue.current.value)
}
const handleSubmit=(e)=>{
  e.preventDefault()
}
useEffect(()=>{
  searchValue.current.focus() //when app will run cursor will automatically in focus
})
  return (
   <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your food</label>
          <input type="text" name="name" id="name" ref={searchValue} onChange={searchMeal} />
        </div>
      </form>
   </section>
  )
}

export default SearchForm
