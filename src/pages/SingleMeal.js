import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="

const SingleMeal = () => {
  const {id}=useParams()
  const[loading ,setLoading]=useState(false);
  const[meal,setMeal]=useState(null)
  useEffect(()=>{
    setLoading(true)
    const fetchData=async()=>{
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        console.log(data)
        if(data.meals){
          const {
            idMeal,
            strMeal,
            strMealThumb,
            strCategory,
            strArea,
            strTags,
            strInstructions,
            strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8}=data.meals[0];

            const ingredients= [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8]
            const newMeal= {
              id: idMeal,
              Name: strMeal,
              image: strMealThumb,
              type: strCategory,
              info: strArea,
              tag: strTags,
              instructions: strInstructions,
              ingredients
            };
            setMeal(newMeal)
        }else{
          setMeal(null)
        }
      } catch (error) {
        console.log(error)
       
      }
      setLoading(false)
    }
    fetchData()
  },[id])
  if(loading){
    return <Loading/>
  }
  if(!meal){
    return <h2 className='section-title'>No meal to display</h2>
  }else{
    const{
      Name,image,type,info,tag,instructions,ingredients
    }=meal
  return (
    <section className='section single-section'>
      <Link to='/' className='btn btn-primary'>back home</Link>
      <h2 className='section-title'>{Name}</h2>
      <div className="single">
        <img src={image} alt={Name} />
        <div className="single-info">
          <p><span className='single-data'>Type:</span>{type}</p>
          <p><span className='single-data'>Origin:</span>{info}</p>
          <p><span className='single-data'>Tag:</span>{tag}</p>
          <p><span className='single-data'>Instructions:</span>{instructions}</p>
          <p><span className='single-data'>Ingredients:</span >{ingredients.map((item,index)=>{
            return item?<i key={index}>{item}, </i>:null
          })}</p>
        </div>
      </div>
    </section>
  )
}
}

export default SingleMeal
