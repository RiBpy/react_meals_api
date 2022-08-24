import React from 'react';
import Loading from '../components/Loading';
import Meal from '../components/Meal';
import { useGlobalContext } from '../context';
const MealList = () => {
  const {meals,loading}=useGlobalContext()
  if(loading){
    return <Loading/>
  }if(meals.length<1){
    return (
      <div className='section-title'>
        <h4>No Meals found based on your search</h4>
      </div>
    )
  }
  return (
   <section className="section">
    <h2 className='section-title'>Meals</h2>
     <div className='meals-center'>
      {meals.map(item=>{
        return <Meal key={item.id} {...item}/>
      })}
    </div>
   </section>
  )
}

export default MealList
