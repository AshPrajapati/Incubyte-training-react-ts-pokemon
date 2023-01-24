
import { Pokemon } from "../Pokemon";

interface PokemonDetailProp {
  pokemon: Pokemon;
  changePokemon: Function
}
function PokemonDetail(props: PokemonDetailProp) {
  const { pokemon } = props;

  

  
  return (
    <div
      className="card p-2 d-grid gap-1 mx-auto font-monospace rounded border border-4 rounded"
      style={{ width: "400px" }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        className="card-img-top"
        alt="pokemon.name"
      />
      <h1>{`Pokemon Name is: ${pokemon.name}`}</h1>
      <p style={{ backgroundColor: pokemon.color }}>Pokemon color</p>
      <p>{`Power of Pokemon: ${pokemon.power}`}</p>
      <p>{`Pokemon has Energy: ${pokemon.hasEnergy}`}</p>
      <button onClick={() => props.changePokemon(pokemon.id)}>Show Details</button>
    </div>
  );
}

export default PokemonDetail;
