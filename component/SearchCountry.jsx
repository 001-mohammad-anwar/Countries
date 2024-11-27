
import style from './SearchCountry.module.css'
const SearchCountry = ({setquery}) => {

  return (
    <div className= {style.searchFilterContainer}>
          <div className={style.searchCountainer}>
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                <input onChange={(e)=>setquery(e.target.value.toLowerCase())} type="text" placeholder='Search for a countries...' />
          </div>
    </div>
  )
}

export default SearchCountry
