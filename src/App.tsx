import PokemonDetail from "./components/PokemonDetail";

import { useState,useEffect } from "react";
import { Pokemon } from "./Pokemon";
import fetchPokemons from "./Http";
function App() {
  const [currentID,setCurrentID] = useState(1);
  const [pokemon,setPokemon] = useState<Pokemon[]>([]);
  const clickHandler=(id:number)=>{
    setCurrentID(id);
  }

  useEffect(() => {
  fetchPokemons().then((data:Pokemon[])=>{
    setPokemon(data);
  }).catch();
  }, [])
  

  return (
    <div className="bg-secondary bg-gradient">
      <div>
        {pokemon.length>0 ? pokemon.map((element) => {
          return (
            <>
              <PokemonDetail pokemon={element} changePokemon={clickHandler}/>
            </>
          );

        }):<div>loading...</div>}
      </div>

      {pokemon.length>0 && <div className="card p-2 d-grid gap-1 mx-auto font-monospace rounded border border-4 rounded"
      style={{ width: "400px" }}>
       <div> Name: {pokemon[currentID-1].name} </div>
        <div>color: {pokemon[currentID-1].color}</div>
        <div>power: {pokemon[currentID-1].power}</div>
      </div>
}
    </div>
  );
}

export default App;
