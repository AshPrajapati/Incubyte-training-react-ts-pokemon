import { Pokemon } from "./Pokemon"
export const pokemon:Pokemon[] = [{
    id:1,
    name:"Pikachu",
    color:'yellow',
    power:1,
    hasEnergy:true
},
{
    id:2,
    name:"Emolga",
    color:'pink',
    power:2,
    hasEnergy:true
},
{
    id:3,
    name:"Minun",
    color:'red',
    power:4,
    hasEnergy:false
}
]

export default function fetchPokemons():Promise<Pokemon[]>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(pokemon);
        },2000);
    })
}