const Country = ({country, updateVisitedCountries}) => {
    return ( 
        <>
            <li>
                {country.name.common} {country.flag}
            </li>
            <button onClick={() => updateVisitedCountries(country)}> I've been there! 👋🏼 </button>
        </>
     );
}
 
export default Country;