import Country from "../Components/Country";

const CountriesList = ({countries, visitedCountries}) => {

    const mappedCountries = countries.map(country => {
        return <Country country={country} key={country.id} />
    })
    
    return (  
        <>
            <div>
                <h2 id="tovisit">To Vist:</h2>
                {mappedCountries}
            </div>
            <div>
                <h2 id="visited">Visited:</h2>
            </div>
        </>
    );
}
 
export default CountriesList;