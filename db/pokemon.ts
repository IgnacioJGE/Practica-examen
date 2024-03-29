import mongoose from "npm:mongoose@7.6.3";
import { pokemon } from "../types.ts";

const Schema = mongoose.Schema;

const pokeSchema = new Schema(
  {
    name: { type: String, required: true },
    id: { type: Number, required: true, unique: true },
    tipo: { type: String, required: true },
  },
  { timestamps: true }
);

export type PokeModelType = mongoose.Document&(pokemon);

export const ModeloPoke= mongoose.model<PokeModelType>("Pokemons", pokeSchema);