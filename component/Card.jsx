import React from 'react'
import style from "./Card.module.css"
import { Link } from 'react-router-dom'
const Card = ({Population , Region , Capital , Name, flags ,data }) => {
  
  return (
    <Link  className={style.cardContainer} to={`/${Name}`} state={data}>
        <div className={style.card}>
            <img src={flags} alt="flag" />
            <div className={style.cardText}>
                 <h1 className={style.title}>
                       {Name} 
                 </h1>
                 <p><b>Population: </b>{Population}</p>
                 <p><b>Region: </b>{Region}</p>
                 <p><b>Capital: </b>{Capital}</p>
            </div>
        </div>
        
    </Link>
  )
}

export default Card
