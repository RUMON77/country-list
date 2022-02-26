

// import Country from './components/Country/Country';
import React, { useState, useEffect } from 'react';
import Country from './components/Country/Country';
import './App.css';
import Cart from './components/Cart/Cart';


function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  

  useEffect(() => {
  
     fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data=>setCountries(data))
    .catch(err => console.log(err));
}, [])

const handleAddCountry = (country) => {
  const newCart = [...cart, country];
  setCart(newCart);
}
return (
  <div className="App">
    <h1>county loaded: {countries.length}</h1>
    <h4>Country Added: {cart.length} </h4>
    <Cart cart={cart}/>
  
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
      }
  

  </div>
);
}

export default App;

