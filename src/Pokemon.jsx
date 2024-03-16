import React from 'react';

function Pokemon({ pokemon, selectedLanguage }) {
const { id, name, type, base, image } = pokemon;
const pokemonName = name[selectedLanguage];

return (
<div className="card">
<div className="pokemon-card">
<div className="pokemon-image">
<img src={image} alt={name.english} />
</div>
<div className="pokemon-details">
<h2 className="pokemon-name"> (ID: {id}) {pokemonName}</h2>
<div className="pokemon-type">
<ul>
{type.map((t, index) => (
<li key={index}>{t}</li>
))}
</ul>
</div>
<div className="pokemon-stats">
<div>
<strong>HP:</strong> {base.HP}
</div>
<div>
<strong>Attack:</strong> {base.Attack}
</div>
<div>
<strong>Defense:</strong> {base.Defense}
</div>
<div>
<strong>Sp. Attack:</strong> {base["Sp. Attack"]}
</div>
<div>
<strong>Sp. Defense:</strong> {base["Sp. Defense"]}
</div>
<div>
<strong>Speed:</strong> {base.Speed}
</div>
</div>
</div>
</div>
</div>
);
}

export default Pokemon;