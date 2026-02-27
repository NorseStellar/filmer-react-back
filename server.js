import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import filmRoutes from "./routes/filmer.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
   .connect(process.env.MONGO_URI)
   .then(() => console.log("Uppkopplingen till MongoDB fungerar!"))
   .catch((err) => console.log(err));

app.use("/api/filmer", filmRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
   console.log(`Server körs på port: ${PORT}`);
});
