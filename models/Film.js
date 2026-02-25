import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
   titel: String,
   regissor: String,
   ar: Number,
   skadespealre: String,
   rating: Number,
});

// Tredje parameter = exakt collection-namn i Atlas
export default mongoose.model("Film", filmSchema, "filmer_collection");
