import express,{Request,Response} from "npm:express@4.18.2"
import mongoose from "npm:mongoose@8.1.0";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { getallpoke } from "./resolvers/getPoke.ts";
import { getapoke } from "./resolvers/getonepoke.ts";
import { addpoke } from "./resolvers/addpoke.ts";
const env = await load();
const MONGO_URL=env.MONGO_URL||Deno.env.get('MONGO_URL')
if(!MONGO_URL){
  console.log("No MONGO_URL")
 console.error();
 Deno.exit(1);
}
try{
await mongoose.connect(MONGO_URL);
console.info("Mongo Concectado")
const app= express();
app.use(express.json())
app.get("/getallpokemon",getallpoke)
   .get("/getpoke/:id",getapoke)
   .post("/addpoke",addpoke)
const PORT=env.PORT||Deno.env.get("PORT")
app.listen(PORT,()=> console.info ((`Te estoy escuchando desde ${PORT}`)));

}catch(e){
  console.error(e)
}