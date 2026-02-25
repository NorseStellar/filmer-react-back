import express from "express";
import Film from "../models/Film.js";

const router = express.Router();

// GET alla filmer
router.get("/", async (req, res) => {
   const filmer = await Film.find();
   res.json(filmer);
});

// POST ny film
router.post("/", async (req, res) => {
   const nyFilm = new Film(req.body);
   await nyFilm.save();
   res.json(nyFilm);
});

// DELETE film
router.delete("/:id", async (req, res) => {
   await Film.findByIdAndDelete(req.params.id);
   res.json({ message: "Film borttagen" });
});

export default router;
