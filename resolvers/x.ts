import { Request, Response } from "npm:express@4.18.2";
import {pokemon} from "../types.ts"

export const  = async (req: Request, res: Response) => {
    try {


      res.status(200).send({
        name: jsondata.name,

      });
    } catch(error) {
      res.status(500).send(error.message);
      return;
    }
  };
  
  
  
  