import React from 'react';

const Country = (props) => {
    console.log(props.names);
    const { name, capital, population, languages, flag } = props.country;
    console.log(props.country);
    const flagStyle = {height: '65px'};
    const countryStyle = { border: '1px solid #eee', margin: '10px', padding: '10px' };
    const handleAddCountry = props.handleAddCountry;
    
    return (
        <div style={countryStyle}>
            <h4>This is {name}</h4>
            <p>Region: {capital}</p>
            <img style={flagStyle}  src={flag} alt="" />
            <p>Population : {population}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;