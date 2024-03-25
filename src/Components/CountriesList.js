import Country from "../Components/Country";

const CountriesList = ({countries, visitedCountries, updateVisitedCountries}) => {

    const mappedCountries = countries.map(country => {
        return <Country country={country} key={country.id} updateVisitedCountries={updateVisitedCountries}/>
    })

    const mappedVisitedCountries = visitedCountries.map(visitedCountry => {
        return <Country country={visitedCountry} key={visitedCountries.id} updateVisitedCountries={updateVisitedCountries} />
    });

    
    return (  
        <>
            <div>
                <h2 id="tovisit">To Vist:</h2>
                {mappedCountries}
            </div>
            <div>
                <h2 id="visited">Visited:</h2>
                {mappedVisitedCountries}
            </div>
        </>
    );
}
 
export default CountriesList;