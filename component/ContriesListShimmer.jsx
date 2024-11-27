import style from './ContriesListShimmer.module.css'
// import './ContriesListShimmer.css'
const ContriesListShimmer = () => {

  return (
    <div className={style.ShimmerContainer}>
        {Array.from({length:10}).map((el , i)=>{
              return <div key = {i} className={style.ShimmerCard}></div>
        })}
    </div>
  )
}

export default ContriesListShimmer
