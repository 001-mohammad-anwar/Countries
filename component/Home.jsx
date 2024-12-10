import React, { useState } from 'react'
import SearchCountry from "./SearchCountry"
import CardContainer from "./CardContainer"
import style from './CardContainer.module.css';
import SelectManue from "./SelectManue";
import { useOutletContext } from 'react-router-dom';
const Home = () => {
   const [isdark] =  useOutletContext('')
  //  console.log(isdark);
    const [query, setquery] = useState('')  
  return (
    <main className={`${isdark?'dark':''} `}>
      <div className={style.cardList}>
        <div className={style.main}>
          <SearchCountry setquery={setquery}/>
          <SelectManue setquery={setquery}/>
        </div>
        <CardContainer query={query} />
      </div>
    </main>
  );
};

export default Home;
