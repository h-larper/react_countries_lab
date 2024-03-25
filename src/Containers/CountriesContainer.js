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

    useEffect(
        () => {
            loadCountries();
        }, []
    );

    // useEffect(
    //     () => {
    //         console.log(`countries: ${JSON.stringify(countries)}`);
    //     }, [countries]
    // );

    return (  
        <>
            <CountriesList countries={countries} visitedCountries={visitedCountries}/>
        </>
    );
}
 
export default CountriesContainer;