import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://arey-pranay:Pranay2222@cluster0.mvanoh1.mongodb.net/?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(connection_url, mongooseOptions);

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Worldddd"));

// const createCard = async (req, res) => {
//   const dbCard = await req.body;
//   const card = new Cards(dbCard);
//   await card.save();
//   res.status(201).send(card);
// };

// const createCard = async (req, res) => {
//   try {
//     const dbCard = req.body;
//     const card = new Cards(dbCard);
//     await card.save();
//     res.status(201).send(card);
//   } catch (error) {
//     console.error("Error creating card:", error);
//     res.status(500).send("Error creating card");
//   }
// };

const createCard = async (req, res) => {
  try {
    const dbCards = req.body; // Array of objects

    // Iterate through the array and save each card
    const savedCards = [];
    for (const dbCard of dbCards) {
      const card = new Cards(dbCard);
      await card.save();
      savedCards.push(card);
    }

    res.status(201).send(savedCards); // Send the array of saved cards in the response
  } catch (error) {
    console.error("Error creating cards:", error);
    res.status(500).send("Error creating cards");
  }
};

app.post("/tinder/cards", createCard);

app.post("/tinder/clear", async (req, res) => {
  try {
    await Cards.deleteMany({});
    res.status(200).send("Old data cleared");
  } catch (error) {
    console.error("Error clearing old data:", error);
    res.status(500).send("Error clearing old data");
  }
});

const getCards = async (req, res) => {
  const cards = await Cards.find();
  res.status(200).send(cards);
};

app.get("/tinder/cards", getCards);

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
