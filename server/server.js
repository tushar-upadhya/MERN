import express from "express";
import mongoose, { mongo } from "mongoose";
import "dotenv/config";

const server = express();
let PORT = 3000;

server.use(express.json());

mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true,
});

server.post("/signup", (req, res) => {
  let { fullname, email, password } = req.body; // Extracts fullname, email, and password from the request body

  // Validates the fullname from the frontend
  if (fullname.length < 3) {
    // If the fullname is less than 3 characters long, it sends a 403 status code and an error message
    return res
      .status(403)
      .json({ error: "fullname must be at least 3 characters" });
  }

  // If the fullname is valid, it sends a 200 status code and a status message
  return res.status(200).json({ status: "okay" });
});

server.listen(PORT, () => {
  console.log("PORT:", PORT);
});
