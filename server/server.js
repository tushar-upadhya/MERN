import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

import User from "./Schema/User.js";

const app = express();
const PORT = 3000;

//  regex format for email and password validation
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

// middle ware
app.use(express.json());

mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true,
});

//
const generateUserName = async (email) => {
  let userName = email.split("a")[0];
  // abc@gmail.com => [abc, gmail] => abc for user

  let isUserNameExists = await User.exists({
    "personal_info.username": userName,
  }).then((result) => {
    return result;
  });

  isUserNameExists ? (userName += nanoid().substring(0, 5)) : "";

  return userName;
};

app.post("/signup", (req, res) => {
  //   console.log("req.body:", req.body);
  // res.json(req.body);

  let { fullname, email, password } = req.body;

  // validating the data from frontend
  if (fullname.length < 3) {
    return res.status(403).json({ error: "Fullname must be 3 letter" });
  }
  if (!email.length) {
    return res.status(403).json({ error: "enter email" });
  }
  if (!emailRegex.test(email)) {
    return res.status(403).json({ error: "email is invalid" });
  }
  if (!passwordRegex.test(password)) {
    return res.status(403).json({
      error:
        "password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letter",
    });
  }

  bcrypt.hash(password, 10, async (error, hashPassword) => {
    let username = await generateUserName(email);

    let user = new User({
      personal_info: { fullname, email, hashPassword },
    });

    user
      .save()
      .then((u) => {
        return res.status(200).json({ user: u });
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.status(500).json({ error: "email already exits" });
        }
        return res.status(500).json({ error: err.message });
      });

    // console.log("hashPassword:", hashPassword);
  });

  // return res.status(200).json({ status: "okay" });
});

app.listen(PORT, () => {
  console.log("PORT:", PORT);
});
