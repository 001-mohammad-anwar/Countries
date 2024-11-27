import React, { useState, useEffect } from "react";
import Card from "./Card";
import style from "./CardContainer.module.css";
import ContriesListShimmer from "./contriesListShimmer";

const CardContainer = ({ query, Region }) => {
  // Step 1: Set up state to store the country data
  const [countries, setCountries] = useState([]);

  // Step 2: Fetch the data when the component mounts using useEffect

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data); // Store the fetched countries data in state
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
      });
  }, []);

  return (
    <>
      {!countries.length ? (
        <ContriesListShimmer />
      ) : (
        <div className={style.container}>
          {countries
            .filter((country) =>
              country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
            )
            .map((country) => (
              <div key={country.cca3}>
                <Card
                  country={country}
                  Population={country.population.toLocaleString("en-IN")}
                  Capital={country.capital}
                  Region={country.region}
                  Name={country.name.common}
                  flags={country.flags.svg}
                  data={country}
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default CardContainer;
