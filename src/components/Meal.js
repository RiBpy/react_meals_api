import React from 'react'
import { Link } from 'react-router-dom'
const Meal = ({image,name,id,info,type}) => {
  return (
   <article className='meal'>
    <div className="img-container">
      <img src={image} alt={name} />
    </div>
    <div className="meal-footer" key={id}>
      <h3>{name}</h3>
      <h4>{type}</h4>
      <p>{info}</p>
      <Link to={`/meal/${id}`} className="btn btn-primary btn-details">details</Link>
    </div>
   </article>
  )
}

export default Meal
