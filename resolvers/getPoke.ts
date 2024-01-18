import { Request, Response } from "npm:express@4.18.2";
import { pokemon } from "../types.ts";


export type datapure={
  results: pokesimple[]
}
export type pokesimple={
  name:string,
  url:string
}
export type pokemonfinall={
  id:number,
  name:string,
  types:tipos[]
}
export type tipos={
 type:type
}
export type type={
  name:string
}
export const getallpoke = async (req: Request, res: Response) => {
    try {
      const URL="https://pokeapi.co/api/v2/pokemon";
      const datos= await fetch(URL);
      const todospokes:datapure= await datos.json();      
    
    let allpokes:pokemon[]=[];
      for (let index = 0; index < todospokes.results.length; index++) {
        const pokeactual= await fetch(todospokes.results[index].url)
        const pokeactualjson:pokemonfinall= await  pokeactual.json();
         allpokes.push({
          name:pokeactualjson.name,
          id:pokeactualjson.id,
          tipo:pokeactualjson.types[0].type.name
        })
      }

        
 
      res.status(200).send(allpokes);
    } catch(error) {
      res.status(500).send(error.message);
      return;
    }
  };
  
  
  
  