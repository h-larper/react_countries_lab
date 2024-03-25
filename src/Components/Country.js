const Country = ({country}) => {
    return ( 
        <>
            <li>
                {country.name.common} {country.flag}
            </li>
            <button> I've been there! 👋🏼 </button>
        </>
     );
}
 
export default Country;