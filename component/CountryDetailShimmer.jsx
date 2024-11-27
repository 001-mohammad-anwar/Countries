import React from "react";
import style from "./CountryDetailShimmer.module.css"
const CountryDetailShimmer = () => {
  return (
    <div>
      <main>
        <div className={style.countryDetailContainer}>
          <span></span>

          <div className={style.countryDetailShimmer}>
            <div className={style.flag}>
              <img src="" />
            </div>
            <div>
              <p>
                <b></b>
                <span >
                  
                </span>
              </p>
              <p>
                <b></b>
                <span >
                 
                </span>
              </p>
              <p>
                <b></b>
                <span></span>
              </p>
              <p>
                <b></b>
                <span></span>
              </p>
              <p>
                <b></b>
                <span ></span>
              </p>
            </div>
            <div>
              <p>
                <b></b>
                <span >
                  
                </span>
              </p>
              <p>
                
              </p>
              <p>
              </p>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CountryDetailShimmer;
