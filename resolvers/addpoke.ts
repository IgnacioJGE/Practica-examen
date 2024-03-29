import { Request, Response } from "npm:express@4.18.2";
import { ModeloPoke } from "../db/pokemon.ts";

export const addpoke = async (req: Request, res: Response) => {
  try {

    const {name,id,tipo}= req.body;

    console.log(name,tipo,id)
    const newPoke = new ModeloPoke({name,tipo,id});
    await newPoke.save();

    res.status(200).send({
        name:newPoke.name,
        id:newPoke.id,
        tipo:newPoke.tipo
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

