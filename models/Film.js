import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
   titel: String,
   regissor: String,
   ar: Number,
   skadespelare: String,
   rating: Number,
});

export default mongoose.model("Film", filmSchema, "filmer_collection");
