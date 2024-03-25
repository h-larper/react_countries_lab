import { useEffect, useState } from "react";
import CountriesList from "../Components/CountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadCountries = async() => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    };

    const updateVisitedCountries = (country) => {
        // take object and add to array of visited whilst keeping list
        console.log(country); 
        setVisitedCountries([...visitedCountries, country])
        // remove from original list
    };

    useEffect(
        () => {
            loadCountries();
        }, []
    );

    return (  
        <>
            <CountriesList countries={countries} visitedCountries={visitedCountries} updateVisitedCountries={updateVisitedCountries}/>
        </>
    );
}
 
export default CountriesContainer;