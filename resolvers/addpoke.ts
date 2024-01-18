import { Request, Response } from "npm:express@4.18.2";
import { ModeloPoke } from "../db/pokemon.ts";
export const addpoke = async (req: Request, res: Response) => {
  try {

    const {name,id,type}= req.body;


    const newCoche = new ModeloPoke({name,type,id});
    await newCoche.save();

    res.status(200).send({
        name:newCoche.name,
        id:newCoche.id,
        type:newCoche.tipo
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

