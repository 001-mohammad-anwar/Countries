import React from 'react'
import style from './SelectManue.module.css'
const SelectManue = ({setquery}) => {
  return (
    <div >
        <select className={style.SelectManue} onChange={(e)=>setquery(e.target.value.toLowerCase() ) } >
            <option hidden>Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default SelectManue
