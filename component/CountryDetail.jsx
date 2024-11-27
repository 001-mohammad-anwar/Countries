import { Link, useLocation, useParams } from "react-router-dom";
import style from "./countryDetail.module.css";
import React, { useContext, useEffect, useState } from "react";
import CountryDetailShimmer from "./CountryDetailShimmer";
import { useOutletContext } from 'react-router-dom';
const CountryDetail = () => {
  const [CountryData, setContryData] = useState(null);
  const [NotfoundData, setNotfoundData] = useState(false);
  //   const countryName = new URLSearchParams(location.search).get("name");
  //   const year =  new URLSearchParams(location.search).get('age')
  
  const {state}= useLocation();
  console.log();
  const param = useParams();
 
  const countryName = param.country;

  useEffect(() => {
    if(state){
      setContryData({
        name: state.name.common,
        flag: state.flags.svg,
        NativeName: Object.values(state.name.nativeName)[0].common,
        population: state.population.toLocaleString("en-IN"),
        region:state.region,
        SubRegion: state.subregion,
        Capital: state.capital,
        Area: state.area,
        Language: Object.values(state.languages)
          .map((countryName) => countryName)
          .join(", "),
        ToplevelDomain:state.tld,
        currencies: Object.values(state.currencies)
          .map((coruncy) => coruncy.name)
          .join(","),
        currenciesSymbol: Object.values(state.currencies).symbol,
        borders: [],
      });
      if (!state.borders) {
        state.borders = [];
      }

      {
        state.borders.map((border) => {
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderData]) => {
              setContryData((prevState) => ({
                ...prevState,
                borders: [...prevState.borders, borderData.name.common],
              }));
            });
        });
      }
      return ;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setContryData({
          name: data.name.common,
          flag: data.flags.svg,
          NativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          SubRegion: data.subregion,
          Capital: data.capital,
          Area: data.area,
          Language: Object.values(data.languages)
            .map((countryName) => countryName)
            .join(", "),
          ToplevelDomain: data.tld,
          currencies: Object.values(data.currencies)
            .map((coruncy) => coruncy.name)
            .join(","),
          currenciesSymbol: Object.values(data.currencies).symbol,
          borders: [],
        });
        if (!data.borders) {
          data.borders = [];
        }
        {
          data.borders.map((border) => {
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([borderData]) => {
                setContryData((prevState) => ({
                  ...prevState,
                  borders: [...prevState.borders, borderData.name.common],
                }));
              });
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setNotfoundData(true);
      });
  }, [countryName]);
  if (NotfoundData) {
    return <div>Not found</div>;
  }
  const [isdark] =  useOutletContext()
  return (
    //  CountryData === null ? 'loading.......' :
    <>
    <div className={style.Length}>
      <main className={`${isdark?'dark':''}`}>
        <div className={style.countryDetailContainer}>
          {!CountryData ?<CountryDetailShimmer/>:<div>
            <span className={style.backButton} onClick={() => history.back()}>
              <i className="fa-sharp fa-solid fa-arrow-left">&nbsp;&nbsp;</i>
              Back
            </span>

            <div className={style.countryDetails}>
              <div className={style.flag}>
                <img src={CountryData.flag} alt={CountryData.name} />
              </div>
              <div>
                <h1>{CountryData.name}</h1>
                <p>
                  <b>Native Name:</b>
                  <span className={style.NativeName}>
                    {CountryData.NativeName}
                  </span>
                </p>
                <p>
                  <b>Population:</b>
                  <span className={style.Population}>
                    {CountryData.population}
                  </span>
                </p>
                <p>
                  <b>Region:</b>
                  <span className={style.Region}>{CountryData.region}</span>
                </p>
                <p>
                  <b>Sub Region:</b>
                  <span className={style.SubRegion}>
                    {CountryData.SubRegion}
                  </span>
                </p>
                <p>
                  <b>Capital:</b>
                  <span className={style.Capital}>{CountryData.Capital}</span>
                </p>
              </div>
              <div className={style.bottomContainer}>
                <p>
                  <b>Top Level Domain:</b>
                  <span className={style.LevelDomain}>
                    {CountryData.ToplevelDomain}
                  </span>
                </p>
                <p>
                  <b>Currencies:</b>
                  <span className={style.Currencies}>
                    {CountryData.currencies}
                  </span>
                </p>
                <p>
                  <b>Languages:</b>
                  <span className={style.Languages}>
                    {CountryData.Language}
                  </span>
                </p>

                {CountryData.borders.length !== 0 && (
                  <div className={style.BorderCuntries}>
                    <b>Border Cuntries :</b>&nbsp;
                    {CountryData.borders.map((border) => (
                      <Link key={border} to={`/${border}`}>
                        {border}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>}
        </div>
      </main>
      </div>
    </>
  );
};

export default CountryDetail;
