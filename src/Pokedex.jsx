import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function Pokedex() {
const [pokemonList, setPokemonList] = useState([]);
const [selectedLanguage, setSelectedLanguage] = useState('english');

useEffect(() => {
fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
.then(response => response.json())
.then(data => setPokemonList(data))
.catch(error => console.error('Error fetching data:', error));
}, []);

const handleLanguageChange = (language) => {
setSelectedLanguage(language);
};

return (
<div className="pokedex1">
<div className="language-buttons">
<button onClick={() => handleLanguageChange('english')}>English</button>
<button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
<button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
<button onClick={() => handleLanguageChange('french')}>French</button>
</div>
<div className="pokemon-cards">
{pokemonList.map(pokemon => (
<Pokemon key={pokemon.id} pokemon={pokemon} selectedLanguage={selectedLanguage} />
))}
</div>
</div>
);
}

export default Pokedex;