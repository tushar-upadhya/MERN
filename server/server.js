import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const PORT = 3000;

// middle ware
app.use(express.json());

mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true,
});

app.post("/signup", (req, res) => {
  //   console.log("req.body:", req.body);
  //   res.json(req.body);

  const { fullName, email, password } = req.body;

  // validating the data from frontend
});

app.listen(PORT, () => {
  console.log("PORT:", PORT);
});
