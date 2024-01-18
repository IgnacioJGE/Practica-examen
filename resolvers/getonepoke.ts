import { Request, Response } from "npm:express@4.18.2";
import { pokemon } from "../types.ts";
import { pokemonfinall } from "./getPoke.ts";
import { tipos } from "./getPoke.ts";
import { type } from "./getPoke.ts";
import { ModeloPoke } from "../db/pokemon.ts";

export const getapoke = async (req: Request, res: Response) => {
    try {
      const URL="https://pokeapi.co/api/v2/pokemon/";
      const id=req.params.id;
      console.log(id);
      const alreadyExists = await ModeloPoke.findOne({ id }).exec();
      if (alreadyExists) {
        res.status(400).send("Pokemon already exists");
        const datos= await fetch(`${URL}${id}`);
        const pokemonpelao:pokemonfinall= await datos.json();
        res.status(200).send({
          name:pokemonpelao.name,
          tipo:pokemonpelao.types[0].type.name,
          id:pokemonpelao.id
        });
        return;
      }else{
      const datos= await fetch(`${URL}${id}`);
      const pokemonpelao:pokemonfinall= await datos.json();
      const newPoke= new ModeloPoke({name:pokemonpelao.name ,id:pokemonpelao.id,type:pokemonpelao.types[0].type.name})
       await newPoke.save();
      res.status(200).send({
        name:pokemonpelao.name,
        tipo:pokemonpelao.types[0].type.name,
        id:pokemonpelao.id
      });
    }
    } catch(error) {
      res.status(500).send(error.message);
      return;
    }
  };
  
  
  
  